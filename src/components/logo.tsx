import { cn } from "@/lib/utils";

/**
 * Competitor brand logo (full lockup: metallic "C / lightning" mark +
 * COMPETITOR wordmark + tagline). Optimized transparent WebP — no blend mode
 * needed; it sits cleanly on any dark background (header, hero, footer).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/competitor-logo-hd.webp"
      alt="Competitor"
      className={cn("h-8 w-auto", className)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/competitor-logo-hd.webp"
      alt="Competitor"
      className={cn("h-12 w-auto", className)}
    />
  );
}
