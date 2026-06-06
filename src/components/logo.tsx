import { cn } from "@/lib/utils";

/**
 * Competitor brand logo (full lockup: metallic "C / lightning" mark +
 * COMPETITOR wordmark + tagline). The source PNG has a solid black
 * background, so we use `mix-blend-screen` to drop the black out and let
 * the logo sit cleanly on top of any dark section (header, hero, footer).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/competitor-logo.png"
      alt="Competitor"
      className={cn("h-8 w-auto mix-blend-screen", className)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/competitor-logo.png"
      alt="Competitor"
      className={cn("h-12 w-auto mix-blend-screen", className)}
    />
  );
}
