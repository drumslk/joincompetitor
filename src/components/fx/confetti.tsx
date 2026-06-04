"use client";

import * as React from "react";

const COLORS = ["#e11d2b", "#ffffff", "#ff6b76", "#fca5a5", "#f4f4f5"];

type Piece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  dist: number;
  rot: number;
  color: string;
  size: number;
};

/**
 * Fires a one-shot confetti burst whenever `fire` flips to a new truthy value.
 * Renders nothing until triggered; cleans pieces up after they fall.
 */
export function Confetti({ fire }: { fire: number }) {
  const [pieces, setPieces] = React.useState<Piece[]>([]);

  React.useEffect(() => {
    if (!fire) return;
    const batch: Piece[] = Array.from({ length: 70 }, (_, i) => ({
      id: fire * 1000 + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.25,
      duration: 1.1 + Math.random() * 0.9,
      dist: 260 + Math.random() * 220,
      rot: (Math.random() - 0.5) * 1080,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 6,
    }));
    const raf = requestAnimationFrame(() => setPieces(batch));
    const t = setTimeout(() => setPieces([]), 2400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [fire]);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 block rounded-[1px]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            animation: `confetti-fall ${p.duration}s cubic-bezier(0.2,0.6,0.4,1) ${p.delay}s forwards`,
            // custom props consumed by the confetti-fall keyframes
            ["--cf-dist" as string]: `${p.dist}px`,
            ["--cf-rot" as string]: `${p.rot}deg`,
          }}
        />
      ))}
    </div>
  );
}
