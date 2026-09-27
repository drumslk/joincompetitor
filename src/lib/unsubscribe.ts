import crypto from "node:crypto";

// Secret used to sign unsubscribe links so nobody can unsubscribe an address
// they don't control. MUST be set in production (Railway env: UNSUBSCRIBE_SECRET).
const SECRET =
  process.env.UNSUBSCRIBE_SECRET ?? "dev-insecure-unsubscribe-secret";

function normalize(email: string): string {
  return email.trim().toLowerCase();
}

/** Deterministic, non-guessable token bound to an email address. */
export function unsubscribeToken(email: string): string {
  return crypto
    .createHmac("sha256", SECRET)
    .update(normalize(email))
    .digest("hex")
    .slice(0, 32);
}

/** Constant-time verification of an (email, token) pair. */
export function verifyUnsubscribe(email: string, token: string): boolean {
  const expected = unsubscribeToken(email);
  const a = Buffer.from(expected);
  const b = Buffer.from(token || "");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/** Public base URL of the deployed app (used to build absolute links). */
export function baseUrl(): string {
  if (process.env.PUBLIC_BASE_URL) {
    return process.env.PUBLIC_BASE_URL.replace(/\/$/, "");
  }
  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    return `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`;
  }
  return "https://www.joincompetitor.com";
}

/** Human-facing confirmation page link (put in the email body). */
export function unsubscribeUrl(email: string): string {
  const e = encodeURIComponent(normalize(email));
  return `${baseUrl()}/unsubscribe?e=${e}&t=${unsubscribeToken(email)}`;
}

/** One-click POST endpoint (put in the List-Unsubscribe header). */
export function unsubscribeApiUrl(email: string): string {
  const e = encodeURIComponent(normalize(email));
  return `${baseUrl()}/api/unsubscribe?e=${e}&t=${unsubscribeToken(email)}`;
}
