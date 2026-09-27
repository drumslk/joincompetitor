type IconProps = { className?: string; strokeWidth?: number };

/**
 * Original line-art "warm-up / side-stretch" figure, drawn in the same stroke
 * style as the lucide icons used elsewhere (currentColor, round caps/joins).
 */
export function StretchIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* head */}
      <circle cx="8.6" cy="5" r="2" />
      {/* raised arm arcing up and over the head */}
      <path d="M9.5 7.6C10.6 4.6 14.4 4.2 16 7" />
      {/* torso leaning to the side */}
      <path d="M9.4 6.9 11 13.8" />
      {/* lower arm bent at the waist */}
      <path d="M10.2 10.4 7.4 12.4" />
      {/* legs in a wide stance */}
      <path d="M11 13.8 8 20.5" />
      <path d="M11 13.8 15.4 20" />
    </svg>
  );
}
