import type { ReactNode } from "react";

/** Secao ancorada. `tone="dark"` liga a paleta invertida na subarvore. */
export default function Section({
  id,
  children,
  tone = "light",
  className = "",
  padding = "py-16 sm:py-24",
}: {
  id: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  /** Sobrescreva pra colar esta secao na anterior (ex: "pb-20 sm:pb-28"). */
  padding?: string;
}) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={[dark ? "theme-dark bg-bg text-fg" : "", "scroll-mt-22", padding, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
