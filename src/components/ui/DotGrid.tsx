/** Grid de pontos decorativo (assinatura do visual). Puro enfeite: aria-hidden. */
export default function DotGrid({
  className,
  cols = 6,
  rows = 5,
}: {
  className?: string;
  cols?: number;
  rows?: number;
}) {
  const gap = 12;
  const r = 1.5;
  const width = (cols - 1) * gap + r * 2;
  const height = (rows - 1) * gap + r * 2;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      {Array.from({ length: rows }).map((_, y) =>
        Array.from({ length: cols }).map((_, x) => (
          <circle
            key={`${x}-${y}`}
            cx={x * gap + r}
            cy={y * gap + r}
            r={r}
            fill="currentColor"
          />
        )),
      )}
    </svg>
  );
}
