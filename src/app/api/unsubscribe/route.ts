import { db } from "@/lib/db";
import { verifyUnsubscribe } from "@/lib/unsubscribe";

// better-sqlite3 + node crypto -> Node.js runtime.
export const runtime = "nodejs";

// Relative Location so the browser resolves it against the public URL it used
// (avoids leaking Railway's internal localhost:8080 host in the redirect).
function redirect(path: string) {
  return new Response(null, { status: 303, headers: { Location: path } });
}

// POST-only so link prefetchers / email scanners can't unsubscribe by accident.
// Handles both the confirmation form and RFC 8058 one-click List-Unsubscribe.
export async function POST(request: Request) {
  const url = new URL(request.url);
  const email = (url.searchParams.get("e") ?? "").trim().toLowerCase();
  const token = url.searchParams.get("t") ?? "";

  if (!email || !verifyUnsubscribe(email, token)) {
    return redirect("/unsubscribe?error=1");
  }

  try {
    db.prepare("DELETE FROM waitlist WHERE email = ?").run(email);
  } catch (err) {
    console.error("unsubscribe delete failed", err);
    return redirect("/unsubscribe?error=1");
  }

  return redirect("/unsubscribe?done=1");
}
