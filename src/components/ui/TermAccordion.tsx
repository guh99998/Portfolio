import type { Term } from "@/content/glossary";

/**
 * <details> nativo: abre/fecha, navega por teclado e e anunciado por leitor
 * de tela sem uma linha de JS. Nao troque por um accordion de useState.
 */
export default function TermAccordion({ term }: { term: Term }) {
  return (
    <details
      id={term.slug}
      className="group scroll-mt-24 border border-line bg-surface open:border-accent"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
        <h3 className="font-mono text-base font-medium tracking-tight sm:text-lg">
          {term.term}
        </h3>
        <span
          aria-hidden="true"
          className="shrink-0 font-mono text-lg text-accent transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="border-t border-line px-5 py-5">
        <p className="leading-relaxed text-muted">{term.definition}</p>

        <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-relaxed">
          <span className="font-mono text-xs text-accent">
            na prática, pro seu negócio:
          </span>
          <br />
          {term.inPractice}
        </p>
      </div>
    </details>
  );
}
