import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Visible EN | FR language switcher with flags. English "/", French "/fr". */
export function LangSwitch({ lang }: { lang: Lang }) {
  const item = (active: boolean) =>
    cn(
      "inline-flex items-center gap-1 px-1 py-1 font-display text-xs tracking-wide transition-colors",
      active ? "text-white" : "text-zinc-500 hover:text-zinc-300",
    );
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
