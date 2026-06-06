"use client";

import * as React from "react";

// City positions on the world map, in viewBox units (100 x 50). Computed from
// each city's real lon/lat through the map's displayed projection, calibrated
// against the background image (950x620, object-contain in a 2:1 box):
//   x = 50 + 0.2128 * lon      y = 27 - 0.2874 * lat
const CITIES = [
  { x: 24.8, y: 17.2 }, // Los Angeles
  { x: 32.9, y: 19.6 }, // Miami
  { x: 40.8, y: 33.6 }, // Rio de Janeiro
  { x: 48.3, y: 17.9 }, // Marrakech
  { x: 50.5, y: 13.0 }, // Paris
  { x: 52.7, y: 15.0 }, // Rome
  { x: 53.9, y: 36.8 }, // Cape Town
  { x: 62.3, y: 32.9 }, // Mauritius
  { x: 66.4, y: 18.8 }, // New Delhi
  { x: 79.7, y: 16.8 }, // Tokyo
  { x: 82.2, y: 36.7 }, // Sydney
];

// Pairs of city indices to connect with an arc.
const LINKS: [number, number][] = [
  [0, 1], // LA – Miami
  [1, 2], // Miami – Rio
  [0, 9], // LA – Tokyo
  [4, 1], // Paris – Miami
  [3, 4], // Marrakech – Paris
  [4, 5], // Paris – Rome
  [5, 6], // Rome – Cape Town
  [6, 7], // Cape Town – Mauritius
  [7, 8], // Mauritius – New Delhi
  [8, 9], // New Delhi – Tokyo
  [9, 10], // Tokyo – Sydney
  [2, 6], // Rio – Cape Town
  [4, 8], // Paris – New Delhi
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
