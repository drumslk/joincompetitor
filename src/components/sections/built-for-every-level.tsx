import { Users, Hourglass, Gauge, Flag, Trophy, Dumbbell } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { WaitlistButton } from "@/components/waitlist";
import { getDict, type Lang } from "@/lib/i18n";

const ICONS = [Users, Hourglass, Gauge, Flag, Trophy, Dumbbell];

export function BuiltForEveryLevel({ lang = "en" }: { lang?: Lang }) {
  const g = getDict(lang);
  const t = g.levels;

  return (
    <section id="levels" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>{t.title}</SectionHeading>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-zinc-300">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {t.divisions.map((label, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={label} delay={i * 70}>
                <div className="flex h-full items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-4 ring-1 ring-white/10 transition-colors hover:ring-primary/50">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
                    <Icon className="size-4 text-primary" strokeWidth={2} />
                  </span>
                  <span className="font-display text-sm uppercase tracking-wide text-white">
                    {label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={t.divisions.length * 70}>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="font-display text-2xl tracking-tight text-white sm:text-3xl">
              {t.freeLead}{" "}
              <span className="text-primary">{t.freeHighlight}</span>.
            </p>
            <p className="text-sm text-zinc-300">{t.freeSub}</p>
            <WaitlistButton size="lg" className="mt-4 w-full max-w-sm">
              {g.cta.full}
            </WaitlistButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
