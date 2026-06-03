import { Check } from "lucide-react";
import { WaitlistButton } from "@/components/waitlist";

const PERKS = [
  "Be one of the first athletes to join.",
  "Early access to the app.",
  "Exclusive Founding Competitor badge.",
  "Priority registration for Season 1.",
];

// Approximate city positions on an equirectangular world map (left%, top%).
const DOTS = [
  { left: "26%", top: "39%", d: "0s" },
  { left: "16%", top: "44%", d: "0.6s" },
  { left: "33%", top: "70%", d: "1.1s" },
  { left: "49%", top: "32%", d: "0.3s" },
  { left: "51%", top: "36%", d: "1.5s" },
  { left: "52%", top: "57%", d: "0.9s" },
  { left: "61%", top: "46%", d: "1.8s" },
  { left: "69%", top: "52%", d: "0.5s" },
  { left: "77%", top: "43%", d: "1.3s" },
  { left: "84%", top: "42%", d: "0.2s" },
  { left: "85%", top: "76%", d: "2s" },
  { left: "63%", top: "71%", d: "1s" },
];

export function Founding() {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: copy + CTA */}
        <div>
          <h2 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl">
            Become a
            <br />
            Founding Competitor
          </h2>

          <ul className="mt-8 space-y-4">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm bg-primary/15 ring-1 ring-primary/40">
                  <Check className="size-3.5 text-primary" strokeWidth={3} />
                </span>
                <span className="text-zinc-200">{perk}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-3">
            <WaitlistButton size="lg" className="w-full max-w-sm">
              Join the Waitlist
            </WaitlistButton>
            <p className="font-display tracking-wide text-zinc-400">
              Season 1 · January 2027
            </p>
          </div>
        </div>

        {/* Right: glowing world map */}
        <div className="relative aspect-[2/1] w-full">
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(225,29,43,0.12),transparent_70%)]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-contain opacity-25 [filter:brightness(0)_invert(1)]"
          />
          {DOTS.map((dot, i) => (
            <span
              key={i}
              className="absolute"
              style={{ left: dot.left, top: dot.top }}
            >
              <span className="absolute -translate-x-1/2 -translate-y-1/2">
                <span
                  className="ping-dot absolute left-0 top-0 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                  style={{ animationDelay: dot.d }}
                />
                <span className="block size-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(225,29,43,0.7)]" />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
