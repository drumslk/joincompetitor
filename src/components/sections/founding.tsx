import { Check } from "lucide-react";
import { WaitlistButton } from "@/components/waitlist";
import { Reveal } from "@/components/fx/reveal";
import { Countdown } from "@/components/fx/countdown";
import { WorldArcs } from "@/components/fx/world-arcs";
import { getDict, type Lang } from "@/lib/i18n";

export function Founding({ lang = "en" }: { lang?: Lang }) {
  const g = getDict(lang);
  const t = g.founding;

  return (
    <section className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: copy + CTA */}
        <Reveal>
          <h2 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl">
            {t.titleA}
            <br />
            {t.titleB}
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-300">
            {t.intro}
          </p>

          <ul className="mt-8 space-y-4">
            {t.perks.map((perk, i) => (
              <Reveal key={perk} as="li" delay={120 + i * 90} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm bg-primary/15 ring-1 ring-primary/40">
                  <Check className="size-3.5 text-primary" strokeWidth={3} />
                </span>
                <span className="text-zinc-200">{perk}</span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-4">
            <WaitlistButton size="lg" className="w-full max-w-sm">
              {g.cta.full}
            </WaitlistButton>
            <Countdown className="items-start" lang={lang} />
          </div>
        </Reveal>

        {/* Right: glowing world map */}
        <Reveal as="div" delay={200} className="relative aspect-[2/1] w-full">
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(225,29,43,0.12),transparent_70%)]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-contain opacity-20 [filter:brightness(0)_invert(1)]"
          />
          {/* Animated flight-path arcs connecting cities worldwide */}
          <WorldArcs />
        </Reveal>
      </div>
    </section>
  );
}
