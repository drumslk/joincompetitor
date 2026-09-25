"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { EVENT_DATE_MS, EVENT_LABEL } from "@/lib/event";

const TARGET = EVENT_DATE_MS;
const TARGET_LABEL = EVENT_LABEL;

type Unit = { label: string; value: number };

// Absolute epoch diff — timezone-independent. Reaches zero at the same instant
// worldwide (Jan 1, 2027 00:00 UTC), regardless of the visitor's local zone.
function diff(): Unit[] {
  const total = Math.max(0, TARGET - Date.now());
  const sec = Math.floor(total / 1000);
  return [
    { label: "Days", value: Math.floor(sec / 86400) },
    { label: "Hours", value: Math.floor((sec % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((sec % 3600) / 60) },
    { label: "Seconds", value: sec % 60 },
  ];
}

export function Countdown({
  className,
  heading = "Season 1 Starts In",
}: {
  className?: string;
  heading?: string;
}) {
  // Render a stable placeholder on the server, then hydrate with the live value.
  const [units, setUnits] = React.useState<Unit[] | null>(null);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setUnits(diff()));
    const id = setInterval(() => setUnits(diff()), 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  const display = units ?? [
    { label: "Days", value: 0 },
    { label: "Hours", value: 0 },
    { label: "Minutes", value: 0 },
    { label: "Seconds", value: 0 },
  ];

  return (
    <div
      className={cn("flex flex-col items-center gap-3", className)}
      aria-label={`Countdown to ${TARGET_LABEL}`}
    >
      {heading && (
        <p className="font-display text-xs uppercase tracking-[0.25em] text-zinc-300 sm:text-sm">
          {heading}
        </p>
      )}
      <div className="flex items-center gap-1.5 sm:gap-3">
        {display.map((u, i) => (
          <React.Fragment key={u.label}>
            {i > 0 && (
              <span className="-mt-2 text-lg font-bold not-italic leading-none text-primary/50 sm:text-3xl">
                :
              </span>
            )}
            <div className="flex min-w-[3.25rem] flex-col items-center rounded-md bg-[#161618] px-1.5 py-2 ring-1 ring-white/10 sm:min-w-[5rem] sm:px-2">
              <span className="font-heading text-2xl font-extrabold not-italic leading-none tabular-nums text-white [transform:translateZ(0)] sm:text-4xl">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-1 whitespace-nowrap text-[0.5rem] uppercase tracking-tight text-zinc-400 sm:text-[0.6rem] sm:tracking-[0.12em]">
                {u.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <p className="font-display text-sm tracking-[0.15em] text-primary/90">
        {TARGET_LABEL}
      </p>
    </div>
  );
}
