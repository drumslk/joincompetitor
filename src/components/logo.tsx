import { cn } from "@/lib/utils";

/** Angular red "C / lightning" mark used in the maquette. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <path
        d="M40 8 H22 C13 8 7 15 7 24 C7 33 13 40 22 40 H30 L34 31 H23 C18 31 15.5 28 15.5 24 C15.5 20 18 17 23 17 H36 L40 8 Z"
        fill="#e11d2b"
      />
      <path
        d="M30 14 L18 26 H26 L22 36 L36 22 H28 L30 14 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordClassName,
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className={markClassName} />
      <span
        className={cn(
          "font-display text-xl tracking-tight text-white",
          wordClassName,
        )}
      >
        Competitor
      </span>
    </span>
  );
}
