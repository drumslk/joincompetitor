import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { verifyUnsubscribe } from "@/lib/unsubscribe";

export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Unsubscribe — Competitor",
  robots: { index: false, follow: false },
};

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const email = (typeof sp.e === "string" ? sp.e : "").trim().toLowerCase();
  const token = typeof sp.t === "string" ? sp.t : "";
  const done = sp.done === "1";
  const error = sp.error === "1";
  const valid = Boolean(email) && verifyUnsubscribe(email, token);

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Competitor home" className="flex items-center">
            <Logo className="h-11" />
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        {done ? (
          <>
            <h1 className="font-display text-3xl tracking-tight text-white">
              You&apos;re unsubscribed
            </h1>
            <p className="mt-3 leading-relaxed text-zinc-300">
              You won&apos;t receive any more emails from COMPETITOR. Changed
              your mind? You can sign up again anytime from the homepage.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-display text-lg tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back to COMPETITOR
            </Link>
          </>
        ) : valid && !error ? (
          <>
            <h1 className="font-display text-3xl tracking-tight text-white">
              Unsubscribe
            </h1>
            <p className="mt-3 leading-relaxed text-zinc-300">
              Stop receiving COMPETITOR news and Season 1 updates at{" "}
              <span className="text-white">{email}</span>?
            </p>
            <form
              method="post"
              action={`/api/unsubscribe?e=${encodeURIComponent(email)}&t=${token}`}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-display text-lg tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Confirm unsubscribe
              </button>
              <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
                No, keep me subscribed
              </Link>
            </form>
          </>
        ) : (
          <>
            <h1 className="font-display text-3xl tracking-tight text-white">
              Invalid link
            </h1>
            <p className="mt-3 leading-relaxed text-zinc-300">
              This unsubscribe link is invalid or has expired. If you still want
              to unsubscribe, email us at{" "}
              <a
                href="mailto:hello@joincompetitor.com?subject=unsubscribe"
                className="text-primary underline underline-offset-2"
              >
                hello@joincompetitor.com
              </a>{" "}
              and we&apos;ll remove you.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
