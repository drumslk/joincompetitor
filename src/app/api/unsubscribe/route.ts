import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyUnsubscribe } from "@/lib/unsubscribe";

// better-sqlite3 + node crypto -> Node.js runtime.
export const runtime = "nodejs";

// POST-only so link prefetchers / email scanners can't unsubscribe by accident.
// Handles both the confirmation form and RFC 8058 one-click List-Unsubscribe.
export async function POST(request: Request) {
  const url = new URL(request.url);
  const email = (url.searchParams.get("e") ?? "").trim().toLowerCase();
  const token = url.searchParams.get("t") ?? "";

  if (!email || !verifyUnsubscribe(email, token)) {
    return NextResponse.redirect(new URL("/unsubscribe?error=1", request.url), 303);
  }

  try {
    db.prepare("DELETE FROM waitlist WHERE email = ?").run(email);
  } catch (err) {
    console.error("unsubscribe delete failed", err);
    return NextResponse.redirect(new URL("/unsubscribe?error=1", request.url), 303);
  }

  return NextResponse.redirect(new URL("/unsubscribe?done=1", request.url), 303);
}
