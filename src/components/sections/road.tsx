import { CalendarDays, Trophy, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Fragment } from "react";

type Stop = {
  icon: LucideIcon;
  period: string;
  label: string;
};

const STOPS: Stop[] = [
  { icon: CalendarDays, period: "January", label: "Season Starts" },
  { icon: CalendarDays, period: "January - April", label: "Weekly Challenges" },
  { icon: Trophy, period: "May", label: "Playoffs" },
  { icon: Trophy, period: "June", label: "Competitor Finals" },
];

export function Road() {
  return (
    <section id="road" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>The Road to the Finals</SectionHeading>

        <div className="mt-14 flex flex-col items-stretch gap-6 sm:flex-row sm:items-start sm:justify-center sm:gap-2">
          {STOPS.map(({ icon: Icon, period, label }, i) => (
            <Fragment key={period}>
              <div className="flex flex-1 flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-full ring-1 ring-primary/30">
                  <Icon className="size-7 text-primary" strokeWidth={1.8} />
                </div>
                <p className="mt-4 font-display text-lg tracking-tight text-white">
                  {period}
                </p>
                <p className="mt-1 text-sm text-zinc-400">{label}</p>
              </div>

              {i < STOPS.length - 1 && (
                <ChevronRight
                  className="mx-auto size-6 shrink-0 rotate-90 self-center text-primary/70 sm:mt-5 sm:rotate-0"
                  aria-hidden
                />
              )}
            </Fragment>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-xl tracking-tight text-white">
          Only the best advance.
        </p>
      </div>
    </section>
  );
}
