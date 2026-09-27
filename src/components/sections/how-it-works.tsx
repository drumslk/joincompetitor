import { CalendarDays, MapPin, Smartphone, Trophy } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { Tilt } from "@/components/fx/tilt";
import { getDict, type Lang } from "@/lib/i18n";

const ICONS = [CalendarDays, MapPin, Smartphone, Trophy];

export function HowItWorks({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).how;

  return (
    <section id="how-it-works" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>{t.title}</SectionHeading>
          <p className="mt-4 text-center text-sm uppercase tracking-[0.2em] text-zinc-300 sm:text-base">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={step.title} delay={i * 120}>
                <Tilt className="group flex flex-col items-center text-center">
                  <div className="mb-5 flex size-16 items-center justify-center rounded-full ring-1 ring-primary/30 transition-all duration-300 group-hover:ring-primary group-hover:shadow-[0_0_30px_-6px] group-hover:shadow-primary">
                    <Icon className="size-8 text-primary" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-zinc-300">
                    {step.text}
                  </p>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={t.steps.length * 120}>
          <p className="mt-14 text-center font-display text-lg tracking-tight text-white sm:text-xl">
            {t.bottom} <span className="text-primary">{t.bottomHighlight}</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
