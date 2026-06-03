import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Keep this route on the Node.js runtime — better-sqlite3 is native.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
