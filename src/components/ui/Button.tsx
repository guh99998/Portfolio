import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 font-mono text-sm rounded-none px-5 py-3 transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-fg",
  ghost: "border border-line text-fg hover:border-accent hover:text-accent",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
