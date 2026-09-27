import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/email";

// Keep this route on the Node.js runtime — better-sqlite3 is native.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
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
    await Promise.allSettled([
      sendWelcomeEmail(normalized),
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
