"use client";

import { Play, Volume2, Maximize, ChevronRight } from "lucide-react";
import { WaitlistButton } from "@/components/waitlist";

const COLLAGE = [
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=640&q=80",
    alt: "Athlete training with ropes",
  },
  {
    src: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&w=640&q=80",
    alt: "Athlete doing pull-ups outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1567598508481-65985588e295?auto=format&fit=crop&w=640&q=80",
    alt: "Muscular athlete training",
  },
  {
    src: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=640&q=80",
    alt: "Athlete performing calisthenics",
  },
];

const FLAGS = [
  { flag: "🇺🇸", label: "United States" },
  { flag: "🇧🇷", label: "Brazil" },
  { flag: "🇦🇺", label: "Australia" },
  { flag: "🇫🇷", label: "France" },
  { flag: "🇲🇺", label: "Mauritius" },
];

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-16">
      {/* Media band with athlete collage + faux video player */}
      <div className="relative">
        <div className="relative h-[58vh] min-h-[440px] w-full">
          {/* Collage */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
            {COLLAGE.map((img) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="eager"
                className="h-full w-full object-cover"
              />
            ))}
          </div>

          {/* Overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

          {/* Heading */}
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
              <h1 className="font-display text-5xl leading-[0.92] text-white text-shadow-hero sm:text-6xl lg:text-7xl">
                The World
                <br />
                Competes Here
              </h1>
              <p className="mt-6 font-display text-xl tracking-tight text-primary sm:text-2xl">
                The Worldwide Fitness League.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-200">
                Compete against athletes worldwide.
                <br />
                Climb the rankings.
                <br />
                Earn your place in the Finals.
              </p>
            </div>
          </div>

          {/* Faux video control bar */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-4 pb-5 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 rounded-md bg-black/55 px-3 py-2 backdrop-blur-sm ring-1 ring-white/10">
                <button
                  type="button"
                  aria-label="Play teaser"
                  className="flex size-7 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                >
                  <Play className="size-3.5 fill-white" />
                </button>
                <span className="tabular-nums text-xs text-zinc-300">0:00 / 0:20</span>
                <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                  <div className="absolute inset-y-0 left-0 w-1/12 rounded-full bg-primary" />
                </div>
                <Volume2 className="size-4 text-zinc-300" />
                <Maximize className="size-4 text-zinc-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flags + CTA on black */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          {FLAGS.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-2">
              <span className="text-lg leading-none">{c.flag}</span>
              <span className="font-display tracking-wide text-zinc-200">
                {c.label}
              </span>
            </span>
          ))}
          <span className="inline-flex items-center gap-1 font-display tracking-wide text-zinc-400">
            <ChevronRight className="size-4 text-primary" /> and growing
          </span>
        </div>

        <div className="mt-9 flex flex-col items-center gap-3">
          <WaitlistButton size="lg" className="w-full max-w-md">
            Join the Waitlist
          </WaitlistButton>
          <p className="font-display tracking-wide text-zinc-400">
            Season 1 · January 2027
          </p>
        </div>
      </div>
    </section>
  );
}
