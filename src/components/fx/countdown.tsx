"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { EVENT_DATE_MS } from "@/lib/event";
import { getDict, type Lang } from "@/lib/i18n";

const TARGET = EVENT_DATE_MS;

// Absolute epoch diff — timezone-independent. Reaches zero at the same instant
// worldwide (Jan 1, 2027 00:00 UTC), regardless of the visitor's local zone.
function diffValues(): number[] {
  const total = Math.max(0, TARGET - Date.now());
  const sec = Math.floor(total / 1000);
  return [
    Math.floor(sec / 86400),
    Math.floor((sec % 86400) / 3600),
    Math.floor((sec % 3600) / 60),
    sec % 60,
  ];
}

export function Countdown({
  className,
  lang = "en",
}: {
  className?: string;
  lang?: Lang;
}) {
  const t = getDict(lang).countdown;
  const labels = [t.days, t.hours, t.minutes, t.seconds];

  // Render a stable placeholder on the server, then hydrate with the live value.
  const [values, setValues] = React.useState<number[] | null>(null);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setValues(diffValues()));
    const id = setInterval(() => setValues(diffValues()), 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  const display = values ?? [0, 0, 0, 0];

  return (
    <div
      className={cn("flex flex-col items-center gap-3", className)}
      aria-label={`Countdown to ${t.date}`}
    >
      <p className="font-display text-xs uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
        {t.heading}
      </p>
      <div className="flex items-center gap-1.5 sm:gap-3">
        {display.map((value, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <span className="-mt-2 text-lg font-bold not-italic leading-none text-primary/50 sm:text-3xl">
                :
              </span>
            )}
            <div className="flex min-w-[3.25rem] flex-col items-center rounded-md bg-[#161618] px-1.5 py-2 ring-1 ring-white/10 sm:min-w-[5rem] sm:px-2">
              <span className="font-heading text-2xl font-extrabold not-italic leading-none tabular-nums text-white [transform:translateZ(0)] sm:text-4xl">
                {String(value).padStart(2, "0")}
              </span>
              <span className="mt-1 whitespace-nowrap text-[0.5rem] uppercase tracking-tight text-zinc-500 sm:text-[0.6rem] sm:tracking-[0.12em]">
                {labels[i]}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <p className="font-display text-sm tracking-[0.15em] text-primary/90">
        {t.date}
      </p>
    </div>
  );
}
