"use client";

import { useEffect, useRef } from "react";
import MatrixRain from "./MatrixRain";

export default function MatrixApp({ onExit }: { onExit: () => void }) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.focus();
  }, []);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape" || event.key === "q") onExit();
  }

  return (
    <div
      ref={boxRef}
      tabIndex={0}
      role="application"
      aria-label="Chuva de caracteres estilo Matrix. Toque na tela ou pressione Escape para sair."
      onKeyDown={handleKeyDown}
      onClick={onExit}
      className="relative h-72 cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-accent sm:h-80"
    >
      <MatrixRain />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-bg/70 px-4 py-2 font-mono text-[10px] text-muted sm:text-xs">
        <span>toque na tela ou esc pra sair</span>
        <button
          type="button"
          onClick={onExit}
          className="border border-line px-2 py-1 text-muted active:border-accent active:text-accent"
        >
          sair
        </button>
      </div>
    </div>
  );
}
