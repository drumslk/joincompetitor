"use client";

import * as React from "react";

// City positions on the equirectangular map, in viewBox units (100 x 50).
const CITIES = [
  { x: 26, y: 19.5 }, // North America (west)
  { x: 16, y: 22 }, // North America
  { x: 33, y: 35 }, // South America
  { x: 49, y: 16 }, // Europe
  { x: 51, y: 18 }, // Europe
  { x: 52, y: 28.5 }, // Africa
  { x: 61, y: 23 }, // Middle East
  { x: 69, y: 26 }, // South Asia
  { x: 77, y: 21.5 }, // East Asia
  { x: 84, y: 21 }, // Japan
  { x: 85, y: 38 }, // Australia
  { x: 63, y: 35.5 }, // Indian Ocean
];

// Pairs of city indices to connect with an arc.
const LINKS: [number, number][] = [
  [3, 0],
  [4, 8],
  [0, 10],
  [3, 5],
  [1, 2],
  [8, 9],
  [6, 7],
  [4, 11],
  [9, 10],
  [5, 7],
];

/** Quadratic arc between two points, bowed outward for a "flight path" look. */
function arcPath(ax: number, ay: number, bx: number, by: number) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dist = Math.hypot(bx - ax, by - ay);
  // Lift the control point perpendicular to the line.
  const lift = Math.min(14, dist * 0.4);
  const nx = -(by - ay) / (dist || 1);
  const ny = (bx - ax) / (dist || 1);
  const cx = mx + nx * lift;
  const cy = my + ny * lift - 4;
  return `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`;
}

export function WorldArcs() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 50"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e11d2b" stopOpacity="0" />
          <stop offset="50%" stopColor="#e11d2b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff6b76" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#ff6b76" />
          <stop offset="100%" stopColor="#e11d2b" />
        </radialGradient>
      </defs>

      {/* Arcs */}
      {LINKS.map(([a, b], i) => {
        const d = arcPath(CITIES[a].x, CITIES[a].y, CITIES[b].x, CITIES[b].y);
        return (
          <g key={i}>
            {/* faint base line */}
            <path
              d={d}
              fill="none"
              stroke="#e11d2b"
              strokeOpacity="0.12"
              strokeWidth="0.25"
            />
            {/* traveling pulse */}
            <path
              d={d}
              fill="none"
              stroke="url(#arcGrad)"
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeDasharray="8 60"
              style={{
                animation: `arc-dash ${4 + (i % 4)}s linear ${i * 0.5}s infinite`,
              }}
            />
          </g>
        );
      })}

      {/* City nodes */}
      {CITIES.map((c, i) => (
        <g key={i}>
          <circle
            cx={c.x}
            cy={c.y}
            r="1.6"
            fill="#e11d2b"
            opacity="0.25"
            style={{ animation: `node-pulse 2.6s ease-out ${(i % 6) * 0.4}s infinite` }}
          />
          <circle cx={c.x} cy={c.y} r="0.7" fill="url(#nodeGlow)" />
        </g>
      ))}

      <style>{`
        @keyframes arc-dash {
          to { stroke-dashoffset: -68; }
        }
        @keyframes node-pulse {
          0% { r: 0.7; opacity: 0.6; }
          70%, 100% { r: 3; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          path, circle { animation: none !important; }
        }
      `}</style>
    </svg>
  );
}
