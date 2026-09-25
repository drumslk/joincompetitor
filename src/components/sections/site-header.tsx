"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { WaitlistButton, useWaitlist } from "@/components/waitlist";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Challenges", href: "#challenges" },
  { label: "Rankings", href: "#leaderboard" },
  { label: "Season 1", href: "#road" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { open } = useWaitlist();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 overflow-hidden px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="Competitor home"
        >
          <Logo className="h-[4.25rem]" />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden min-w-0 items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 lg:block">
          <WaitlistButton size="sm" className="whitespace-nowrap">
            Join Season 1 for Free
          </WaitlistButton>
        </div>

        {/* Mobile: compact CTA + hamburger */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <WaitlistButton size="sm" className="h-10 whitespace-nowrap px-3.5 text-xs">
            Join Free
          </WaitlistButton>
          <button
            type="button"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-md text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-background transition-[max-height] duration-300 lg:hidden",
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
            Join Season 1 for Free
          </button>
        </div>
      </div>
    </header>
  );
}
