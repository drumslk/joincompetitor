/**
 * Decorative, fixed red glow orbs drifting behind the whole page.
 * Purely cosmetic — hidden from assistive tech and non-interactive.
 */
export function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <span
        className="orb left-[-10%] top-[8%] size-[36rem] opacity-50"
        style={{ animationDelay: "0s" }}
      />
      <span
        className="orb right-[-12%] top-[40%] size-[30rem] opacity-40"
        style={{ animationDelay: "-6s" }}
      />
      <span
        className="orb bottom-[-8%] left-[30%] size-[34rem] opacity-30"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
