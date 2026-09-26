// Confirmation email sent to each new Season 1 signup, via the Resend API
// (https://resend.com). No SDK needed — a single authenticated POST.
//
// Required env var:  RESEND_API_KEY   (re_...)
// Optional env var:  RESEND_FROM      (sender, e.g. "COMPETITOR <hello@joincompetitor.com>")
//                    Defaults to Resend's test sender, which only delivers to
//                    your own account email until you verify a domain.

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM =
  process.env.RESEND_FROM ?? "COMPETITOR <onboarding@resend.dev>";

const SUBJECT = "You're in — welcome to COMPETITOR 🏆";

const TEXT = `Welcome, Competitor.

You've reserved your place for Season 1 of COMPETITOR — the fitness league for everyone. You're in.

What happens next:
- Season 1 starts January 1, 2027 — free to enter.
- Every week: a new challenge (strength, bodyweight, endurance, speed).
- Submit your score + proof video, earn points, climb the global rankings.

We'll email you before launch with early access and how to get ready.

Beat. Compete. Repeat.
— The COMPETITOR Team

You're receiving this because you signed up at joincompetitor.com. You can unsubscribe at any time.`;

function html(): string {
  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:#050505;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#0e0e10;border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden;">
        <tr><td style="height:4px;background:linear-gradient(90deg,transparent,#e11d2b,transparent);"></td></tr>
        <tr><td style="padding:36px 36px 8px;text-align:center;">
          <div style="font-family:Arial,Helvetica,sans-serif;font-weight:800;font-style:italic;letter-spacing:1px;font-size:30px;color:#ffffff;">
            COMPET<span style="color:#e11d2b;">I</span>TOR
          </div>
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:4px;color:#e11d2b;margin-top:6px;">
            BEAT. COMPETE. REPEAT.
          </div>
        </td></tr>
        <tr><td style="padding:24px 36px 0;">
          <h1 style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-weight:800;font-style:italic;text-transform:uppercase;font-size:26px;color:#ffffff;">You're in.</h1>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#d4d4d8;">
            You've reserved your place for <strong style="color:#ffffff;">Season 1</strong> of COMPETITOR — the fitness league for everyone.
          </p>
        </td></tr>
        <tr><td style="padding:22px 36px 0;">
          <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#a1a1aa;">What happens next</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#d4d4d8;">
            <tr><td style="padding:6px 0;">🗓️&nbsp;&nbsp;Season 1 starts <strong style="color:#ffffff;">January 1, 2027</strong> — free to enter.</td></tr>
            <tr><td style="padding:6px 0;">💪&nbsp;&nbsp;Every week: a new challenge (strength, bodyweight, endurance, speed).</td></tr>
            <tr><td style="padding:6px 0;">📈&nbsp;&nbsp;Submit your score + proof video, earn points, climb the <strong style="color:#ffffff;">global rankings</strong>.</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:22px 36px 0;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#d4d4d8;">
            We'll email you before launch with early access and how to get ready.
          </p>
        </td></tr>
        <tr><td style="padding:24px 36px 36px;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-weight:800;font-style:italic;text-transform:uppercase;letter-spacing:1px;font-size:16px;color:#e11d2b;">Beat. Compete. Repeat.</p>
          <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#a1a1aa;">— The COMPETITOR Team</p>
        </td></tr>
        <tr><td style="padding:18px 36px;border-top:1px solid rgba(255,255,255,0.08);">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.5;color:#71717a;">
            You're receiving this because you signed up at joincompetitor.com. You can unsubscribe at any time.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Sends the welcome email. Never throws — a mail failure must not break the
 * signup. Silently no-ops (with a warning) when RESEND_API_KEY is unset.
 */
export async function sendWelcomeEmail(to: string): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping confirmation email");
    return;
  }
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to,
        subject: SUBJECT,
        html: html(),
        text: TEXT,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) {
      console.error("Resend email failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("Resend email error", err);
  }
}
