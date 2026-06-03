import { Trophy, Globe, Swords, Crown } from "lucide-react";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    icon: Trophy,
    title: "Compete",
    text: "Complete fitness challenges from anywhere.",
  },
  {
    icon: Globe,
    title: "Rank",
    text: "Compare your results with competitors worldwide.",
  },
  {
    icon: Swords,
    title: "Battle",
    text: "Challenge rivals in 1v1 and Duo Battles.",
  },
  {
    icon: Crown,
    title: "Finals",
    text: "Qualify through the season and earn your place in the Finals.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>How It Works</SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-5 flex size-16 items-center justify-center rounded-full ring-1 ring-primary/30 transition-all duration-300 group-hover:ring-primary group-hover:shadow-[0_0_30px_-6px] group-hover:shadow-primary">
                <Icon className="size-8 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-zinc-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
