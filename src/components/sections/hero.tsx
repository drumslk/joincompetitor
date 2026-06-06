"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { WaitlistButton } from "@/components/waitlist";
import { WaitlistCount } from "@/components/fx/waitlist-count";
import { Countdown } from "@/components/fx/countdown";

const FLAGS = [
  { flag: "🇺🇸", label: "United States" },
  { flag: "🇧🇷", label: "Brazil" },
  { flag: "🇦🇺", label: "Australia" },
  { flag: "🇫🇷", label: "France" },
  { flag: "🇲🇺", label: "Mauritius" },
  { flag: "🇬🇧", label: "United Kingdom" },
  { flag: "🇩🇪", label: "Germany" },
  { flag: "🇯🇵", label: "Japan" },
  { flag: "🇿🇦", label: "South Africa" },
  { flag: "🇨🇦", label: "Canada" },
];

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const mediaRef = React.useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = React.useState(0);

  // Ensure the muted background video starts looping on load.
  React.useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  // Parallax: track scroll position (rAF-throttled) while near the top.
  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Spotlight follows the cursor over the media band.
  function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
    const el = mediaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <section id="about" className="relative overflow-hidden pt-20">
      {/* Media band with looping background video */}
      <div
        ref={mediaRef}
        onMouseMove={handleSpotlight}
        className="group relative h-[64vh] min-h-[480px] w-full overflow-hidden"
        style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
      >
        {/* Background video (parallax + slight scale) */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-[120%] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            transform: `translateY(${scrollY * 0.25}px) scale(1.06)`,
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Uniform 20% veil + soft edge gradients so the heading stays readable */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Cursor spotlight: soft red/white glow following the pointer */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle 300px at var(--mx) var(--my), rgba(255,255,255,0.10) 0%, rgba(225,29,43,0.16) 30%, transparent 60%)",
          }}
        />

        {/* Heading (parallax: drifts up + fades on scroll) */}
        <div className="absolute inset-0">
          <div
            className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8"
            style={{
              transform: `translateY(${scrollY * -0.12}px)`,
              opacity: Math.max(0, 1 - scrollY / 600),
            }}
          >
            <h1 className="hero-glow font-display text-5xl leading-[0.92] text-white text-shadow-hero sm:text-6xl lg:text-7xl">
              <span
                className="hero-rise block"
                style={{ animationDelay: "0.05s" }}
              >
                The World
              </span>
              <span
                className="hero-rise block"
                style={{ animationDelay: "0.18s" }}
              >
                Competes Here
              </span>
            </h1>
            <p
              className="hero-rise mt-3 font-display text-xl tracking-tight sm:text-2xl"
              style={{ animationDelay: "0.34s" }}
            >
              <span className="text-sheen">The Worldwide Fitness League.</span>
            </p>
            <p
              className="hero-rise mt-3 max-w-md text-base leading-relaxed text-zinc-200"
              style={{ animationDelay: "0.5s" }}
            >
              Compete against athletes worldwide.
              <br />
              Climb the rankings.
              <br />
              Earn your place in the Finals.
            </p>

            <div
              className="hero-rise mt-7"
              style={{ animationDelay: "0.66s" }}
            >
              <WaitlistCount />
            </div>
          </div>
        </div>
      </div>

      {/* Flags marquee + CTA on black */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-x-8 group-hover:[animation-play-state:paused]">
            {[...FLAGS, ...FLAGS].map((c, i) => (
              <span
                key={`${c.label}-${i}`}
                className="inline-flex shrink-0 items-center gap-2 text-sm"
              >
                <span className="text-lg leading-none">{c.flag}</span>
                <span className="font-display tracking-wide text-zinc-200">
                  {c.label}
                </span>
                <ChevronRight className="size-4 text-primary/60" />
              </span>
            ))}
          </div>
        </div>
        <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-zinc-500">
          and growing
        </p>

        <div className="mt-9 flex flex-col items-center gap-5">
          <WaitlistButton size="lg" className="w-full max-w-md">
            Join the Waitlist
          </WaitlistButton>
          <div className="flex flex-col items-center gap-3">
            <p className="font-display tracking-wide text-zinc-400">
              Next event starts in
            </p>
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}
