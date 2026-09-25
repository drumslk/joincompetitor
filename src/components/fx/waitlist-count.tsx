"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Simulated social-proof baseline: starts at START_COUNT on LAUNCH_DATE and
// grows by STEP every STEP_DAYS days, so the number keeps ticking up over time.
// Real signups from the API are added on top of this baseline.
const LAUNCH_DATE = new Date("2026-09-25T00:00:00Z");
const START_COUNT = 100;
const STEP = 15;
const STEP_DAYS = 2;

function simulatedBaseline() {
  const days = Math.floor((Date.now() - LAUNCH_DATE.getTime()) / 86_400_000);
  if (days < 0) return START_COUNT;
  return START_COUNT + STEP * Math.floor(days / STEP_DAYS);
}

/**
 * Fetches the live waitlist count and counts up to it the first time the
 * widget scrolls into view. Adds a baseline so the number always feels alive.
 */
export function WaitlistCount({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [target, setTarget] = React.useState<number | null>(null);
  const [display, setDisplay] = React.useState(0);
  const started = React.useRef(false);

  React.useEffect(() => {
    let active = true;
    fetch("/api/waitlist")
      .then((r) => r.json())
      .then((d) => {
        if (active) setTarget(simulatedBaseline() + (Number(d?.count) || 0));
      })
      .catch(() => {
        if (active) setTarget(simulatedBaseline());
      });
    return () => {
      active = false;
    };
  }, []);

  React.useEffect(() => {
    if (target == null) return;
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1400;
      let startTs: number | null = null;
      const step = (ts: number) => {
        if (startTs == null) startTs = ts;
        const p = Math.min(1, (ts - startTs) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 ring-1 ring-white/10",
        className,
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      <span className="font-display text-lg tabular-nums tracking-wide text-white">
        {display.toLocaleString("en-US")}+
      </span>
      <span className="text-sm text-zinc-300">athletes already in</span>
    </div>
  );
}
