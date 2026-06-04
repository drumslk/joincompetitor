"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { EVENT_DATE_MS, EVENT_LABEL } from "@/lib/event";

const TARGET = EVENT_DATE_MS;
const TARGET_LABEL = EVENT_LABEL;

type Unit = { label: string; value: number };

function diff(): Unit[] {
  const total = Math.max(0, TARGET - Date.now());
  const sec = Math.floor(total / 1000);
  return [
    { label: "Days", value: Math.floor(sec / 86400) },
    { label: "Hrs", value: Math.floor((sec % 86400) / 3600) },
    { label: "Min", value: Math.floor((sec % 3600) / 60) },
    { label: "Sec", value: sec % 60 },
  ];
}

export function Countdown({ className }: { className?: string }) {
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
    { label: "Hrs", value: 0 },
    { label: "Min", value: 0 },
    { label: "Sec", value: 0 },
  ];

  return (
    <div
      className={cn("flex flex-col items-center gap-3", className)}
      aria-label={`Countdown to ${TARGET_LABEL}`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        {display.map((u, i) => (
          <React.Fragment key={u.label}>
            {i > 0 && (
              <span className="-mt-2 text-2xl font-bold not-italic leading-none text-primary/50 sm:text-3xl">
                :
              </span>
            )}
            <div className="flex min-w-[4rem] flex-col items-center rounded-md bg-[#161618] px-3 py-2 ring-1 ring-white/10 sm:min-w-[4.5rem]">
              <span className="font-heading text-3xl font-extrabold not-italic leading-none tabular-nums text-white [transform:translateZ(0)] sm:text-4xl">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
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
