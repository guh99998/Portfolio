"use client";

import { useEffect, useState } from "react";

/**
 * Digita o texto em mono. O texto completo fica sempre no DOM pra leitor de
 * tela e pro SEO; a versao animada e aria-hidden. Sob prefers-reduced-motion
 * ele aparece inteiro de uma vez.
 */
export default function TypeLine({
  text,
  speed = 45,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setShown(text);
      return;
    }

    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setShown(text.slice(0, index));
      if (index >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <p className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {shown}
        <span className="ml-0.5 inline-block w-[0.55em] animate-pulse bg-accent align-baseline">
          &nbsp;
        </span>
      </span>
    </p>
  );
}
