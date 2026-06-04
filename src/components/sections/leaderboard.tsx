"use client";

import * as React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { cn } from "@/lib/utils";

type Row = {
  name: string;
  flag: string;
  country: string;
  score: number;
  trend: "up" | "down" | "flat";
};

const ATHLETES: Row[] = [
  { name: "Marcus Vale", flag: "🇺🇸", country: "USA", score: 9824, trend: "up" },
  { name: "Léa Rousseau", flag: "🇫🇷", country: "FRA", score: 9710, trend: "up" },
  { name: "Rafael Costa", flag: "🇧🇷", country: "BRA", score: 9655, trend: "down" },
  { name: "Kira Petrov", flag: "🇦🇺", country: "AUS", score: 9540, trend: "up" },
  { name: "Jonas Berg", flag: "🇩🇪", country: "GER", score: 9488, trend: "flat" },
  { name: "Aiko Tanaka", flag: "🇯🇵", country: "JPN", score: 9421, trend: "up" },
  { name: "Sipho Ndlovu", flag: "🇿🇦", country: "RSA", score: 9377, trend: "down" },
  { name: "Owen Clarke", flag: "🇬🇧", country: "GBR", score: 9310, trend: "up" },
];

const TREND = {
  up: { Icon: TrendingUp, cls: "text-emerald-400" },
  down: { Icon: TrendingDown, cls: "text-primary" },
  flat: { Icon: Minus, cls: "text-zinc-500" },
} as const;

function LiveRow({ row, rank }: { row: Row; rank: number }) {
  const { Icon, cls } = TREND[row.trend];
  const [score, setScore] = React.useState(row.score);

  // Gently fluctuate the score so the board feels live.
  React.useEffect(() => {
    const id = setInterval(
      () => setScore((s) => s + Math.round((Math.sin(s) + 1) * 3)),
      2200 + rank * 130,
    );
    return () => clearInterval(id);
  }, [rank]);

  return (
    <div className="flex items-center gap-4 rounded-lg bg-white/[0.03] px-4 py-3 ring-1 ring-white/5 transition-colors hover:bg-white/[0.06]">
      <span
        className={cn(
          "w-8 shrink-0 font-display text-xl tabular-nums not-italic",
          rank <= 3 ? "text-primary" : "text-zinc-500",
        )}
      >
        {String(rank).padStart(2, "0")}
      </span>
      <span className="text-lg leading-none">{row.flag}</span>
      <span className="flex-1 truncate font-medium text-white">{row.name}</span>
      <span className="hidden text-xs uppercase tracking-wider text-zinc-500 sm:block">
        {row.country}
      </span>
      <span className="w-20 text-right font-display text-lg tabular-nums not-italic text-white">
        {score.toLocaleString("en-US")}
      </span>
      <Icon className={cn("size-4 shrink-0", cls)} strokeWidth={2.2} />
    </div>
  );
}

export function Leaderboard() {
  return (
    <section id="leaderboard" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>Global Rankings</SectionHeading>
          <p className="mt-4 text-center text-sm text-zinc-400">
            <span className="relative mr-2 inline-flex size-2 align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Live preview — the world is already warming up.
          </p>
        </Reveal>

        <div className="mt-10 space-y-2">
          {ATHLETES.map((row, i) => (
            <Reveal key={row.name} delay={i * 70}>
              <LiveRow row={row} rank={i + 1} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center font-display text-sm tracking-wide text-zinc-500">
          Your name could be here in Season 1.
        </p>
      </div>
    </section>
  );
}
