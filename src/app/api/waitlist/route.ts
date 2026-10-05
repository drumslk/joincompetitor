import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendWelcomeEmail, sendSignupNotification } from "@/lib/email";

// Keep this route on the Node.js runtime — better-sqlite3 is native.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory per-IP rate limit (single Railway instance). Set high so a
// busy event/booth on shared WiFi (one public IP) is never blocked — it only
// stops a runaway automated flood. The honeypot handles ordinary bots.
const RATE_MAX = 300;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const rateHits = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    rateHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateHits.set(ip, recent);
  return false;
}

// Optional signup webhook. Disabled by default — only fires when
// WAITLIST_WEBHOOK_URL is explicitly set (no third party is notified otherwise).
const WEBHOOK_URL = process.env.WAITLIST_WEBHOOK_URL;

// Notify the webhook without ever failing the signup itself. No-op unless a
// WAITLIST_WEBHOOK_URL is configured.
async function notifyWebhook(payload: Record<string, unknown>) {
  if (!WEBHOOK_URL) return;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) {
      console.error("waitlist webhook returned", res.status);
    }
  } catch (err) {
    console.error("waitlist webhook failed", err);
  }
}

export async function POST(request: Request) {
  const ip =
    (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let email: unknown;
  let honeypot: unknown;

  try {
    const body = await request.json();
    email = body?.email;
    honeypot = body?.company;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill. If populated, it's a bot —
  // return a fake success so the bot moves on without triggering a real signup.
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const normalized = email.trim().toLowerCase();

  try {
    const result = db
      .prepare("INSERT INTO waitlist (email) VALUES (?)")
      .run(normalized);

    // New signup -> send the confirmation email and notify Make.com. Both are
    // awaited so they aren't cut off when the response returns, but neither can
    // fail the signup (each swallows its own errors).
    const total = (
      db.prepare("SELECT COUNT(*) AS c FROM waitlist").get() as { c: number }
    ).c;

    await Promise.allSettled([
      sendWelcomeEmail(normalized),
      sendSignupNotification(normalized, total),
      notifyWebhook({
        email: normalized,
        id: Number(result.lastInsertRowid),
        source: "waitlist",
        createdAt: new Date().toISOString(),
      }),
    ]);

    return NextResponse.json(
      { ok: true, id: result.lastInsertRowid },
      { status: 201 },
    );
  } catch (err: unknown) {
    // Unique constraint -> already registered, treat as success (idempotent).
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code?: string }).code === "SQLITE_CONSTRAINT_UNIQUE"
    ) {
      return NextResponse.json({ ok: true, alreadyJoined: true }, { status: 200 });
    }

    console.error("waitlist insert failed", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  const row = db.prepare("SELECT COUNT(*) AS count FROM waitlist").get() as {
    count: number;
  };
  return NextResponse.json({ count: row.count });
}
