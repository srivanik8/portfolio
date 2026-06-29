import { useEffect, useRef, useState } from "react";

// Deterministic pseudo-random scatter so it's stable across renders.
function seededPoints(n: number, seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const pts: { x: number; y: number; yTrue: number }[] = [];
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 100;
    const trend = 50 + 22 * Math.sin((x / 100) * Math.PI * 1.4 + 0.4);
    const noise = (rand() - 0.5) * 26;
    pts.push({ x, y: trend + noise, yTrue: trend });
  }
  return pts;
}

const POINTS = seededPoints(28, 7);

function curvePath(pts: { x: number; y: number }[]) {
  if (pts.length === 0) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const mx = (p0.x + p1.x) / 2;
    d += ` Q ${p0.x} ${p0.y} ${mx} ${(p0.y + p1.y) / 2}`;
  }
  return d;
}

export default function SignalHero() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const duration = 2600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const fitPts = POINTS.map((p) => ({ x: p.x, y: p.yTrue }));
  const fitPath = curvePath(fitPts);

  // Sweeping reveal: clip the fit-line by progress.
  const sweepX = progress * 100;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="sweep-clip">
          <rect x="0" y="0" width={sweepX} height="100" />
        </clipPath>
        <linearGradient id="fade-edge" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0" />
          <stop offset="8%" stopColor="var(--color-signal)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* scatter points, fade in with slight stagger based on x */}
      {POINTS.map((p, i) => {
        const reveal = Math.min(1, Math.max(0, (progress * 130 - p.x) / 14));
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={0.55}
            fill="var(--color-paper-dim)"
            opacity={0.45 * reveal}
          />
        );
      })}

      {/* the converging fit line, sweeping left to right */}
      <g clipPath="url(#sweep-clip)">
        <path
          d={fitPath}
          fill="none"
          stroke="url(#fade-edge)"
          strokeWidth={0.55}
          strokeLinecap="round"
        />
      </g>

      {/* leading edge marker */}
      {progress < 1 && (
        <circle
          cx={sweepX}
          cy={fitPts[Math.min(fitPts.length - 1, Math.floor((sweepX / 100) * fitPts.length))]?.y ?? 50}
          r={0.9}
          fill="var(--color-signal)"
        />
      )}
    </svg>
  );
}
