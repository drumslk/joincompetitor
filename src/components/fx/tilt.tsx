"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TiltProps = React.ComponentProps<"div"> & {
  /** Maximum tilt in degrees on each axis. */
  max?: number;
};

/**
 * Tilts its children towards the cursor in 3D and exposes pointer
 * coordinates as CSS vars (--mx/--my) for an optional glare layer.
 * Disabled on touch / reduced-motion for comfort.
 */
export function Tilt({ children, className, max = 10, style, ...props }: TiltProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotX = (0.5 - py) * 2 * max;
    const rotY = (px - 0.5) * 2 * max;
    el.style.setProperty("--rx", `${rotX.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${rotY.toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn(
        "[transform:perspective(900px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))]",
        "transition-transform duration-150 ease-out [transform-style:preserve-3d] motion-reduce:!transform-none",
        className,
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
