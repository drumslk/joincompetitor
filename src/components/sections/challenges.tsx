import { Dumbbell, PersonStanding, Timer, Gauge } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/fx/reveal";
import { Tilt } from "@/components/fx/tilt";
import { getDict, type Lang } from "@/lib/i18n";

// Visuals stay identical across languages; only the labels are translated.
const VISUALS = [
  {
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1652363722856-214ce6a06a44?auto=format&fit=crop&w=520&q=80",
  },
  {
    icon: PersonStanding,
    image:
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=520&q=80",
  },
  {
    icon: Timer,
    image:
      "https://images.pexels.com/photos/6303467/pexels-photo-6303467.jpeg?auto=compress&cs=tinysrgb&w=520",
  },
  {
    icon: Gauge,
    image:
      "https://images.pexels.com/photos/4944975/pexels-photo-4944975.jpeg?auto=compress&cs=tinysrgb&w=520",
  },
];

export function Challenges({ lang = "en" }: { lang?: Lang }) {
  const t = getDict(lang).challenges;

  return (
    <section id="challenges" className="border-t border-white/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading>{t.title}</SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card, i) => {
            const { icon: Icon, image } = VISUALS[i];
            return (
              <Reveal key={card.title} delay={i * 90}>
                <Tilt max={8}>
                  <article className="group relative h-72 overflow-hidden rounded-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-primary/60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={card.title}
                      loading={i < 2 ? "eager" : "lazy"}
                      className={
                        i === 2
                          ? // Endurance: raise the framing so the plank athlete
                            // sits above the text overlay (bottom-anchored zoom).
                            "absolute inset-x-0 bottom-0 h-[130%] w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                          : "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }
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
                        {card.title}
                      </h3>
                      <ul className="mt-1 space-y-0.5">
                        {card.items.map((item) => (
                          <li key={item} className="text-sm text-zinc-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={t.cards.length * 90}>
          <p className="mt-12 text-center font-display text-lg tracking-tight text-white sm:text-xl">
            {t.bottom}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
