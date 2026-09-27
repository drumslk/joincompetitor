import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Logo } from "@/components/logo";

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

/**
 * Shared shell for the /privacy and /terms pages.
 *
 * The content passed in describes the site's ACTUAL data practices (email
 * collection for launch updates via Railway / Resend / Make.com). A few
 * legally-required specifics that can't be derived from the codebase are left
 * as clearly-marked `[[TO CONFIRM: …]]` blanks. While `draft` is true a notice
 * is shown and the page must NOT be treated as published/final — remove the
 * blanks and set `draft={false}` only after legal review.
 */
export function LegalPage({
  title,
  updated,
  draft = false,
  lead,
  sections,
}: {
  title: string;
  updated: string;
  draft?: boolean;
  lead: string;
  sections: Section[];
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10 bg-background">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Competitor home" className="flex items-center">
            <Logo className="h-11" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-zinc-400">Last updated: {updated}</p>

        {draft && (
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-400" />
            <p className="text-sm leading-relaxed text-zinc-200">
              <span className="font-semibold text-white">
                Draft for internal review — not yet published.
              </span>{" "}
              Sections marked{" "}
              <code className="rounded bg-white/10 px-1">[[TO CONFIRM: …]]</code>{" "}
              still need company details, and this text must be reviewed by the
              person responsible for legal matters before it goes live.
            </p>
          </div>
        )}

        <p className="mt-8 leading-relaxed text-zinc-300">{lead}</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl tracking-tight text-white">
                {s.heading}
              </h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="mt-2 leading-relaxed text-zinc-300">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed text-zinc-300">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Competitor Arena LLC. All rights
          reserved. · Questions?{" "}
          <a
            href="mailto:hello@joincompetitor.com"
            className="text-zinc-400 underline underline-offset-2 hover:text-zinc-200"
          >
            hello@joincompetitor.com
          </a>
        </p>
      </div>
    </main>
  );
}
