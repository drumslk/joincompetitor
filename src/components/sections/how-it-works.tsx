import { CalendarDays, MapPin, Smartphone, Trophy } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { Tilt } from "@/components/fx/tilt";

const STEPS = [
  {
    icon: CalendarDays,
    title: "Weekly Challenge",
    text: "A new strength, bodyweight, endurance or speed challenge is released every week.",
  },
  {
    icon: MapPin,
    title: "Complete It Anywhere",
    text: "Perform the challenge from your gym, home or outdoors, depending on the equipment required.",
  },
  {
    icon: Smartphone,
    title: "Submit Your Performance",
    text: "Enter your score and upload one continuous proof video through the COMPETITOR app.",
  },
  {
    icon: Trophy,
    title: "Earn Points & Climb",
    text: "Once validated, your performance earns points toward the official Season 1 rankings.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>How It Works</SectionHeading>
          <p className="mt-4 text-center text-sm uppercase tracking-[0.2em] text-zinc-300 sm:text-base">
            From the weekly challenge to the global rankings.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <Tilt className="group flex flex-col items-center text-center">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full ring-1 ring-primary/30 transition-all duration-300 group-hover:ring-primary group-hover:shadow-[0_0_30px_-6px] group-hover:shadow-primary">
                  <Icon className="size-8 text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-zinc-300">
                  {text}
                </p>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal delay={STEPS.length * 120}>
          <p className="mt-14 text-center font-display text-lg tracking-tight text-white sm:text-xl">
            The highest-ranked competitors qualify for the{" "}
            <span className="text-primary">Playoffs</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
