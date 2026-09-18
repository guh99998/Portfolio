"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { services } from "@/content/services";

/**
 * Abas acessiveis: role tablist/tab/tabpanel, setas navegam, Home/End vao
 * pras pontas. Sem isso vira um punhado de <div> clicavel que leitor de tela
 * nao sabe anunciar.
 *
 * Substituiu uma grade de 2 colunas: com 3 servicos sobrava uma celula vazia,
 * e como a grade usava `gap-px` sobre um fundo colorido, o vazio virava um
 * retangulo da cor da borda.
 */
export default function ServiceTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const last = services.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;

    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  const service = services[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Serviços"
        className="flex flex-wrap gap-2 border-b border-line"
      >
        {services.map((item, index) => {
          const selected = index === active;

          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              id={`aba-${item.id}`}
              aria-selected={selected}
              aria-controls={`painel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={handleKeyDown}
              className={`-mb-px border-b-2 px-4 py-3 font-mono text-sm transition-colors ${
                selected
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              <span aria-hidden="true" className="mr-2 text-xs opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`painel-${service.id}`}
        aria-labelledby={`aba-${service.id}`}
        tabIndex={0}
        className="border border-t-0 border-line bg-surface p-6 sm:p-8"
      >
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="leading-relaxed text-muted">{service.summary}</p>
            <p className="mt-4 leading-relaxed text-fg/80 italic">
              {service.forWho}
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs text-muted">o que você recebe</p>
            <ul className="flex flex-col gap-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-2 font-mono text-sm text-muted">
                  <span aria-hidden="true" className="text-accent">
                    ›
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
