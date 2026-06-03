import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="rule" />
      <h2 className="font-display text-center text-3xl tracking-tight text-white sm:text-4xl">
        {children}
      </h2>
      <span className="rule" />
    </div>
  );
}
