import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { getDict, type Lang } from "@/lib/i18n";

export function Faq({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).faq;

  return (
    <section id="faq" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>{t.title}</SectionHeading>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10">
          {t.items.map(({ q, a }, i) => (
            <Reveal key={q} delay={i * 80}>
              <details name="faq" className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-xl tracking-tight text-white">
                    {q}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-primary ring-1 ring-primary/40 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  {a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
