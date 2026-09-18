import { marquee } from "@/content/roadmap";

/**
 * Faixa escura com o que ele domina.
 *
 * Duas coisas que fazem o loop nao "terminar" numa tela larga:
 *   1. Varias copias, nao duas. Com N copias e um deslocamento de UMA copia,
 *      a faixa so mostra vazio se a viewport passar de (N-1) copias.
 *   2. O keyframe desloca `-100% / N`, entao a emenda cai exatamente no
 *      inicio da copia seguinte — e a duracao significa "segundos por copia",
 *      que nao muda quando voce adiciona tecnologias em roadmap.ts.
 */
const COPIES = 6;

export default function Marquee() {
  return (
    <div className="theme-dark overflow-hidden border-y border-line bg-bg py-4 text-fg">
      <div
        className="flex w-max animate-[marquee_18s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ "--marquee-copies": COPIES } as React.CSSProperties}
      >
        {Array.from({ length: COPIES }).map((_, copy) => (
          <ul
            key={copy}
            // so a primeira copia e lida: o resto e repeticao visual
            aria-hidden={copy > 0 ? "true" : undefined}
            className="flex shrink-0 items-center gap-8 pr-8"
          >
            {marquee.map((item) => (
              <li
                key={item}
                className="flex items-center gap-8 font-mono text-sm text-muted"
              >
                {item}
                <span aria-hidden="true" className="text-accent">
                  ·
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
