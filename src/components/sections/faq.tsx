import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { EVENT_LABEL } from "@/lib/event";

const FAQS = [
  {
    q: "What is COMPETITOR?",
    a: "COMPETITOR is an international fitness league built around weekly challenges, verified performances, points, divisions, rankings, Playoffs and Finals.",
  },
  {
    q: "Is Season 1 free?",
    a: "Yes. Registration and participation in Season 1 are free.",
  },
  {
    q: "When does Season 1 start?",
    a: `Season 1 starts on ${EVENT_LABEL}. Weekly challenges continue through the end of April, followed by the Playoffs in May and the online Finals in June.`,
  },
  {
    q: "Do I need to be an elite athlete?",
    a: "No. COMPETITOR is designed for different fitness levels, with divisions that allow you to compare yourself with relevant competitors.",
  },
  {
    q: "Do I need a gym?",
    a: "Not for every challenge. Some challenges can be completed at home or outdoors, while others require standard gym equipment. The equipment and rules are announced with each weekly challenge.",
  },
  {
    q: "How do I submit my performance?",
    a: "Enter your score and upload one continuous proof video through the COMPETITOR app. Each challenge includes specific rules and a required camera angle.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>FAQ</SectionHeading>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10">
          {FAQS.map(({ q, a }, i) => (
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
