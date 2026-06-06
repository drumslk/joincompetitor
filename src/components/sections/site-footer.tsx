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

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/joincompetitor", Icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com/@joincompetitor", Icon: TikTok },
  { label: "Email", href: "mailto:hello@joincompetitor.com", Icon: Mail },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <LogoMark className="h-40 w-auto sm:h-48" />

        <div className="mt-8 flex items-center gap-3">
          {SOCIALS.map(({ label, href, Icon }) => {
            const isExternal = href.startsWith("http");
            return (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="flex size-10 items-center justify-center rounded-full text-zinc-300 ring-1 ring-white/15 transition-all hover:text-white hover:ring-primary"
            >
              <Icon className="size-5" />
            </a>
            );
          })}
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
          <p>© {year} Competitor Arena LLC. All rights reserved.</p>
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
