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

// Static version: scatter points with the fitted trend line already drawn,
// no animation, no motion.
export default function SignalHero() {
  const fitPts = POINTS.map((p) => ({ x: p.x, y: p.yTrue }));
  const fitPath = curvePath(fitPts);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {/* scatter points */}
      {POINTS.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={0.55}
          fill="var(--color-paper-dim)"
          opacity={0.4}
        />
      ))}

      {/* the fitted signal line */}
      <path
        d={fitPath}
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth={0.55}
        strokeLinecap="round"
      />
    </svg>
  );
}