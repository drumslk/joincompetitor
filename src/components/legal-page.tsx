import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Logo } from "@/components/logo";

type Section = { heading: string; body: string };

/**
 * Shared shell for the /privacy and /terms pages. The body is intentionally a
 * clearly-marked PLACEHOLDER: it describes what each section will cover without
 * inventing any binding legal wording. Replace `sections` with the final,
 * lawyer-reviewed text before launch.
 */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10 bg-background">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Competitor home" className="flex items-center">
            <Logo className="h-14" />
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

        {/* Clearly-identifiable provisional notice */}
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4">
          <FileText className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-zinc-200">
            <span className="font-semibold text-white">
              Draft — provisional content.
            </span>{" "}
            This page is a work-in-progress placeholder while our final,
            legally-reviewed {title.toLowerCase()} is being prepared. It is not
            yet binding. For any question in the meantime, contact us at{" "}
            <a
              href="mailto:hello@joincompetitor.com"
              className="text-primary underline underline-offset-2"
            >
              hello@joincompetitor.com
            </a>
            .
          </p>
        </div>

        <p className="mt-8 leading-relaxed text-zinc-300">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2 className="font-display text-xl tracking-tight text-white">
                {heading}
              </h2>
              <p className="mt-2 leading-relaxed text-zinc-400">{body}</p>
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
