import { SectionHeading } from "./section-heading";

const FAQS = [
  {
    q: "What is Competitor?",
    a: "Competitor is the Worldwide Fitness League. Complete fitness challenges from anywhere, compare your results against athletes around the globe, and earn your place in the Finals.",
  },
  {
    q: "When does Season 1 start?",
    a: "Season 1 kicks off in January 2027. Weekly challenges run from January through April, playoffs in May, and the Competitor Finals in June.",
  },
  {
    q: "Do I need a gym or special equipment?",
    a: "No. Challenges are built around bodyweight and standard movements you can do anywhere — push-ups, dips, squats, planks and more.",
  },
  {
    q: "What do I get for joining the waitlist?",
    a: "You become a Founding Competitor: early access to the app, an exclusive Founding badge, and priority registration for Season 1.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>FAQ</SectionHeading>

        <div className="mt-12 divide-y divide-white/10">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-xl tracking-tight text-white">
                  {q}
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-primary ring-1 ring-primary/40 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
