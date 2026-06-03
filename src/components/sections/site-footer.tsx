import { Mail } from "lucide-react";
import { LogoMark } from "@/components/logo";

type IconProps = { className?: string };

function TikTok({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3a5.6 5.6 0 0 0 4 4.4v3a8.5 8.5 0 0 1-4-1.2v6.3a6.3 6.3 0 1 1-6.3-6.3c.3 0 .6 0 .9.1v3.1a3.3 3.3 0 1 0 2.3 3.1V3h3.1Z" />
    </svg>
  );
}

function Instagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function Youtube({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "TikTok", href: "#", Icon: TikTok },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "Email", href: "mailto:hello@competitor.gg", Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <LogoMark className="h-12 w-12" />
        <p className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl">
          Competitor
        </p>
        <p className="mt-2 font-display text-sm tracking-[0.25em] text-primary">
          Beat. Compete. Repeat.
        </p>

        <div className="mt-8 flex items-center gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full text-zinc-300 ring-1 ring-white/15 transition-all hover:text-white hover:ring-primary"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© 2024 Competitor Arena LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-zinc-300">
              Privacy Policy
            </a>
            <span className="text-zinc-700">|</span>
            <a href="#" className="transition-colors hover:text-zinc-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
