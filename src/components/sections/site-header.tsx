"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { WaitlistButton, useWaitlist } from "@/components/waitlist";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Challenges", href: "#challenges" },
  { label: "Season 1", href: "#road" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { open } = useWaitlist();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="Competitor home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WaitlistButton size="sm">Join the Waitlist</WaitlistButton>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wide text-zinc-200 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
            className="mt-2 flex h-12 items-center justify-center rounded-md bg-primary font-display text-lg tracking-wide text-primary-foreground"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </header>
  );
}
