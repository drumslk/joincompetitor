import { Dumbbell, PersonStanding, Timer, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { Tilt } from "@/components/fx/tilt";

type Challenge = {
  title: string;
  icon: LucideIcon;
  items: string[];
  image: string;
};

const CHALLENGES: Challenge[] = [
  {
    title: "Strength",
    icon: Dumbbell,
    items: ["Bench Press", "Squat", "Deadlift (Classic or Trapbar)"],
    image:
      "https://images.unsplash.com/photo-1652363722856-214ce6a06a44?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Bodyweight",
    icon: PersonStanding,
    items: ["Push-Ups", "Pull-Ups", "Burpees"],
    image:
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Endurance",
    icon: Timer,
    items: ["Dead Hang", "Plank", "Wall Sit"],
    image:
      "https://images.pexels.com/photos/6303467/pexels-photo-6303467.jpeg?auto=compress&cs=tinysrgb&w=520",
  },
  {
    title: "Speed",
    icon: Gauge,
    items: ["Treadmill Sprint"],
    image:
      "https://images.pexels.com/photos/4944975/pexels-photo-4944975.jpeg?auto=compress&cs=tinysrgb&w=520",
  },
];

export function Challenges() {
  return (
    <section id="challenges" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>Challenges</SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHALLENGES.map(({ title, icon: Icon, items, image }, i) => (
            <Reveal key={title} delay={i * 90}>
              <Tilt max={8}>
                <article className="group relative h-72 overflow-hidden rounded-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-primary/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${title} challenges`}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

                  {/* Cursor-following glare */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.18), transparent 45%)",
                    }}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
                      <Icon className="size-5 text-primary" strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-3 font-display text-2xl tracking-tight text-white">
                      {title}
                    </h3>
                    <ul className="mt-1 space-y-0.5">
                      {items.map((item) => (
                        <li key={item} className="text-sm text-zinc-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal delay={CHALLENGES.length * 90}>
          <p className="mt-12 text-center font-display text-lg tracking-tight text-white sm:text-xl">
            Different challenges. One complete fitness league.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
