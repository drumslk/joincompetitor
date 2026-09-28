import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Visible EN | FR language switcher with flags. English "/", French "/fr".
 * `stacked` renders the two options vertically (space-saving, for the mobile
 * header); the default is a horizontal "EN | FR" row.
 */
export function LangSwitch({
  lang,
  stacked = false,
}: {
  lang: Lang;
  stacked?: boolean;
}) {
  const item = (active: boolean) =>
    cn(
      "inline-flex items-center gap-1 font-display tracking-wide transition-colors",
      stacked ? "px-1 py-0.5 text-[11px]" : "px-1 py-1 text-xs",
      active ? "text-white" : "text-zinc-500 hover:text-zinc-300",
    );

  if (stacked) {
    return (
      <div
        className="flex shrink-0 flex-col items-start leading-none"
        aria-label="Language"
      >
        <Link href="/" hrefLang="en" className={item(lang === "en")}>
          <span className="text-[13px] leading-none">🇬🇧</span>
          EN
        </Link>
        <Link href="/fr" hrefLang="fr" className={item(lang === "fr")}>
          <span className="text-[13px] leading-none">🇫🇷</span>
          FR
        </Link>
      </div>
    );
  }

  return (
    <div className="flex shrink-0 items-center" aria-label="Language">
      <Link href="/" hrefLang="en" className={item(lang === "en")}>
        <span className="text-sm leading-none">🇬🇧</span>
        EN
      </Link>
      <span className="text-zinc-700">|</span>
      <Link href="/fr" hrefLang="fr" className={item(lang === "fr")}>
        <span className="text-sm leading-none">🇫🇷</span>
        FR
      </Link>
    </div>
  );
}
