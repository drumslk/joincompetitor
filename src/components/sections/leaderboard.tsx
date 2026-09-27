import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { getDict, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Row = {
  name: string;
  flag: string;
  country: string;
  score: number;
  trend: "up" | "down" | "flat";
};

// Illustrative sample ONLY — these are not real competitors or official
// results. Data is fixed (no live updates) and sorted highest → lowest.
const DEMO_ATHLETES: Row[] = [
  { name: "Marcus Vale", flag: "🇺🇸", country: "USA", score: 9824, trend: "up" },
  { name: "Léa Rousseau", flag: "🇫🇷", country: "FRA", score: 9710, trend: "up" },
  { name: "Rafael Costa", flag: "🇧🇷", country: "BRA", score: 9655, trend: "down" },
  { name: "Kira Petrov", flag: "🇦🇺", country: "AUS", score: 9540, trend: "up" },
  { name: "Jonas Berg", flag: "🇩🇪", country: "GER", score: 9488, trend: "flat" },
  { name: "Aiko Tanaka", flag: "🇯🇵", country: "JPN", score: 9421, trend: "up" },
  { name: "Sipho Ndlovu", flag: "🇿🇦", country: "RSA", score: 9377, trend: "down" },
  { name: "Owen Clarke", flag: "🇬🇧", country: "GBR", score: 9310, trend: "up" },
];

// Fixed demonstration rows, capped at 8 and sorted highest → lowest.
const ATHLETES = [...DEMO_ATHLETES].slice(0, 8).sort((a, b) => b.score - a.score);

const TREND = {
  up: { Icon: TrendingUp, cls: "text-emerald-400" },
  down: { Icon: TrendingDown, cls: "text-primary" },
  flat: { Icon: Minus, cls: "text-zinc-400" },
} as const;

function LeaderRow({ row, rank, lang }: { row: Row; rank: number; lang: Lang }) {
  const { Icon, cls } = TREND[row.trend];

  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.03] px-3 py-3 ring-1 ring-white/5 transition-colors hover:bg-white/[0.06] sm:gap-4 sm:px-4">
      <span
        className={cn(
          "w-6 shrink-0 font-display text-lg tabular-nums not-italic sm:w-8 sm:text-xl",
          rank <= 3 ? "text-primary" : "text-zinc-400",
        )}
      >
        {String(rank).padStart(2, "0")}
      </span>
      <span className="text-lg leading-none">{row.flag}</span>
      <span className="flex-1 truncate font-medium text-white">{row.name}</span>
      <span className="hidden text-xs uppercase tracking-wider text-zinc-400 sm:block">
        {row.country}
      </span>
      <span className="w-16 text-right font-display text-base tabular-nums not-italic text-white sm:w-20 sm:text-lg">
        {row.score.toLocaleString(lang === "fr" ? "fr-FR" : "en-US")}
      </span>
      <Icon className={cn("size-4 shrink-0", cls)} strokeWidth={2.2} />
    </div>
  );
}

export function Leaderboard({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).leaderboard;
  return (
    <section id="leaderboard" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>{t.title}</SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-zinc-300">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 space-y-2">
          {ATHLETES.map((row, i) => (
            <Reveal key={row.name} delay={i * 70}>
              <LeaderRow row={row} rank={i + 1} lang={lang} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center font-display text-sm tracking-wide text-zinc-400">
          {t.footer}
        </p>
      </div>
    </section>
  );
}
