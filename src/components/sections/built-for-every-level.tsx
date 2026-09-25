import { Users, Hourglass, Gauge, Flag, Trophy, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { WaitlistButton } from "@/components/waitlist";

const DIVISIONS: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: "Men & Women" },
  { icon: Hourglass, label: "Age Divisions" },
  { icon: Gauge, label: "Weight Divisions" },
  { icon: Flag, label: "Country Rankings" },
  { icon: Trophy, label: "Overall Open" },
  { icon: Dumbbell, label: "Gym, Club & Community" },
];

export function BuiltForEveryLevel() {
  return (
    <section id="levels" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>Built for Every Level.</SectionHeading>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-zinc-300">
            You don&apos;t need to be an elite athlete to become a Competitor.
            Measure yourself against athletes in your division while remaining
            part of one global fitness league.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {DIVISIONS.map(({ icon: Icon, label }, i) => (
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
          ))}
        </div>

        <Reveal delay={DIVISIONS.length * 70}>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="font-display text-2xl tracking-tight text-white sm:text-3xl">
              Season 1 is <span className="text-primary">free to enter</span>.
            </p>
            <p className="text-sm text-zinc-300">
              No entry fee. No subscription required. No pay-to-rank advantage.
            </p>
            <WaitlistButton size="lg" className="mt-4 w-full max-w-sm">
              Join Season 1 for Free
            </WaitlistButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
