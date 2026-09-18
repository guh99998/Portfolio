export default function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-line bg-accent-soft px-2 py-1 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
