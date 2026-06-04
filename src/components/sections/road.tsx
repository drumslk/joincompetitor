"use client";

import * as React from "react";
import { CalendarDays, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { cn } from "@/lib/utils";

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
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the track first enters the lower viewport, 1 once it's
      // comfortably above the middle of the screen.
      const start = vh * 0.85;
      const end = vh * 0.4;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="road" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>The Road to the Finals</SectionHeading>

        <div ref={trackRef} className="relative mt-16">
          {/* Track: vertical on mobile, horizontal on desktop */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10 sm:left-0 sm:top-8 sm:h-px sm:w-full sm:translate-x-0" />
          {/* Vertical fill (mobile only) */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-primary shadow-[0_0_12px_2px_rgba(225,29,43,0.6)] transition-[height] duration-200 ease-out sm:hidden"
            style={{ height: `${progress * 100}%` }}
          />
          {/* Horizontal fill (desktop only) */}
          <FillBar progress={progress} />

          <div className="relative flex flex-col items-stretch gap-12 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
            {STOPS.map(({ icon: Icon, period, label }, i) => {
              const active = progress >= i / (STOPS.length - 1) - 0.02;
              return (
                <Reveal
                  key={period}
                  delay={i * 120}
                  className="flex flex-1 flex-col items-center text-center"
                >
                  <div
                    className={cn(
                      "relative flex size-16 items-center justify-center rounded-full bg-background ring-1 transition-all duration-500",
                      active
                        ? "ring-primary shadow-[0_0_28px_-4px] shadow-primary"
                        : "ring-primary/25",
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                    )}
                    <Icon
                      className={cn(
                        "size-7 transition-colors duration-500",
                        active ? "text-primary" : "text-primary/40",
                      )}
                      strokeWidth={1.8}
                    />
                  </div>
                  <p
                    className={cn(
                      "mt-4 font-display text-lg tracking-tight transition-colors duration-500",
                      active ? "text-white" : "text-zinc-500",
                    )}
                  >
                    {period}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{label}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <p className="mt-12 text-center font-display text-xl tracking-tight text-white">
          Only the best advance.
        </p>
      </div>
    </section>
  );
}

/** Horizontal fill bar for desktop (width-driven), hidden on mobile. */
function FillBar({ progress }: { progress: number }) {
  return (
    <div
      aria-hidden
      className="absolute left-0 top-8 hidden h-px bg-gradient-to-r from-primary to-primary shadow-[0_0_12px_2px_rgba(225,29,43,0.6)] transition-[width] duration-200 ease-out sm:block"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
