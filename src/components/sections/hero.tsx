"use client";

import * as React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
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
    <section id="about" className="relative overflow-hidden pt-[4.75rem]">
      {/* Full-screen media band with looping background video */}
      <div
        ref={mediaRef}
        onMouseMove={handleSpotlight}
        className="group relative flex min-h-[calc(100dvh-4.75rem)] w-full items-center overflow-hidden"
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
          style={{ transform: `translateY(${scrollY * 0.2}px) scale(1.06)` }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Strong dark veil so every line of text stays perfectly readable */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        {/* Cursor spotlight: soft red/white glow following the pointer */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle 300px at var(--mx) var(--my), rgba(255,255,255,0.10) 0%, rgba(225,29,43,0.16) 30%, transparent 60%)",
          }}
        />

        {/* Hero content (parallax: drifts up + fades on scroll) */}
        <div
          className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            opacity: Math.max(0, 1 - scrollY / 700),
          }}
        >
          <div className="max-w-3xl">
            {/* Secondary visual signature */}
            <p
              className="hero-rise flex items-center gap-3 font-display text-xs uppercase tracking-[0.35em] text-zinc-300"
              style={{ animationDelay: "0.03s" }}
            >
              <span className="h-px w-8 bg-primary" />
              The World Competes Here.
            </p>

            {/* Main title */}
            <h1
              className="hero-glow mt-5 font-display text-5xl leading-[0.92] text-white text-shadow-hero sm:text-6xl lg:text-7xl"
            >
              <span className="hero-rise block" style={{ animationDelay: "0.08s" }}>
                The Fitness League
              </span>
              <span className="hero-rise block" style={{ animationDelay: "0.2s" }}>
                for Everyone.
              </span>
            </h1>

            {/* Red subtitle */}
            <p
              className="hero-rise mt-5 font-display text-xl uppercase tracking-tight text-primary sm:text-2xl"
              style={{ animationDelay: "0.34s" }}
            >
              One Challenge. One Score. One Global Ranking.
            </p>

            {/* Description */}
            <p
              className="hero-rise mt-5 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg"
              style={{ animationDelay: "0.48s" }}
            >
              Every week, complete a new fitness challenge from your gym, home or
              outdoors. Submit your score and video, earn points and climb the
              global rankings.
            </p>

            {/* Season 1 info badge */}
            <div
              className="hero-rise mt-7"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-display text-xs uppercase tracking-[0.18em] text-white sm:text-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Season 1 · Jan–Apr 2027 · Free to Compete
              </span>
            </div>

            {/* Buttons */}
            <div
              className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "0.72s" }}
            >
              <WaitlistButton size="lg" className="w-full sm:w-auto">
                Join Season 1 for Free
              </WaitlistButton>
              <a
                href="#how-it-works"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-md border border-white/25 px-8 font-display text-lg tracking-wide text-white transition-colors hover:border-white/50 hover:bg-white/10 sm:w-auto"
              >
                See How It Works
                <ArrowRight className="size-5" />
              </a>
            </div>

            {/* Social proof */}
            <div
              className="hero-rise mt-8"
              style={{ animationDelay: "0.84s" }}
            >
              <WaitlistCount />
            </div>
          </div>
        </div>
      </div>

      {/* Global reach signature: scrolling flags band */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
        <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-zinc-400">
          Athletes competing worldwide — and growing
        </p>

        {/* Main countdown to Season 1 */}
        <div className="mt-10 flex justify-center">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
