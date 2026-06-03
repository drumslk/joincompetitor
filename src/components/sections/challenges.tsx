import { Flame, Dumbbell, HeartPulse, Swords, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";

type Challenge = {
  title: string;
  icon: LucideIcon;
  items: string[];
  image: string;
};

const CHALLENGES: Challenge[] = [
  {
    title: "Push",
    icon: Flame,
    items: ["Push-Ups", "Dips", "Bench Press"],
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Strength",
    icon: Dumbbell,
    items: ["Squat", "Deadlift", "Pull-Ups"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Endurance",
    icon: HeartPulse,
    items: ["Wall Sit", "Plank", "Treadmill Challenges"],
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Battles",
    icon: Swords,
    items: ["Solo", "Duo", "Rival Battles"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Finals",
    icon: Star,
    items: ["Only the best compete for the title."],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=520&q=80",
  },
];

export function Challenges() {
  return (
    <section id="challenges" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Challenges</SectionHeading>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CHALLENGES.map(({ title, icon: Icon, items, image }, i) => (
            <article
              key={title}
              className="group relative h-72 overflow-hidden rounded-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-primary/60 last:max-sm:col-span-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`${title} challenges`}
                loading={i < 3 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

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
          ))}
        </div>
      </div>
    </section>
  );
}
