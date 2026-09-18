"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { runCommand, type Line } from "@/lib/terminal";
import dynamic from "next/dynamic";

// o jogo so baixa quando alguem digita `cobrinha` — nao pesa no
// carregamento da home pra quem nunca vai jogar
const SnakeGame = dynamic(() => import("./SnakeGame"), {
  loading: () => (
    <p className="px-4 py-4 font-mono text-xs text-muted">carregando jogo...</p>
  ),
});
import { site } from "@/content/site";

const banner: Line[] = [
  { kind: "accent", text: `${site.name} — terminal do portfólio` },
  { kind: "out", text: "digite `ajuda` e dê enter pra começar." },
  { kind: "out", text: "" },
];

const toneClass: Record<Line["kind"], string> = {
  in: "text-fg",
  out: "text-muted",
  err: "text-accent",
  accent: "text-accent",
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(banner);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  // -1 = digitando algo novo; 0+ = navegando o historico de tras pra frente
  const [cursor, setCursor] = useState(-1);
  const [playing, setPlaying] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // mantem a ultima linha visivel, sem mexer no scroll da pagina
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const typed = value;
    const result = runCommand(typed);

    if (result.game) {
      setPlaying(true);
    }

    if (result.clear) {
      setLines([]);
    } else {
      setLines((current) => [
        ...current,
        { kind: "in", text: typed },
        ...result.lines,
        { kind: "out", text: "" },
      ]);
    }

    if (typed.trim()) {
      setHistory((current) => [typed, ...current].slice(0, 50));
    }

    setValue("");
    setCursor(-1);

    if (result.goTo) {
      document
        .querySelector(result.goTo)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    if (history.length === 0) return;

    event.preventDefault();

    const next =
      event.key === "ArrowUp"
        ? Math.min(cursor + 1, history.length - 1)
        : cursor - 1;

    setCursor(next);
    setValue(next < 0 ? "" : history[next]);
  }

  return (
    <div
      className="border border-line bg-surface"
      // clicar em qualquer lugar da caixa devolve o foco pro input,
      // como num terminal de verdade
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span aria-hidden="true" className="h-2.5 w-2.5 bg-accent" />
        <span aria-hidden="true" className="h-2.5 w-2.5 bg-line" />
        <span aria-hidden="true" className="h-2.5 w-2.5 bg-line" />
        <p className="ml-2 truncate font-mono text-xs text-muted">
          visitante@{site.shortName}: ~
        </p>
      </div>

      {playing ? (
        <SnakeGame
          onExit={() => {
            setPlaying(false);
            setLines((current) => [
              ...current,
              { kind: "out", text: "até a próxima." },
              { kind: "out", text: "" },
            ]);
            // devolve o foco pro prompt, como sair de um programa de verdade
            window.setTimeout(() => inputRef.current?.focus(), 0);
          }}
        />
      ) : (
        <div
          ref={scrollRef}
          className="h-72 overflow-y-auto px-4 py-4 sm:h-80"
          aria-live="polite"
          aria-label="Saída do terminal"
        >
          {lines.map((line, index) => (
            <p
              key={index}
              className={`font-mono text-xs leading-relaxed break-words whitespace-pre-wrap sm:text-sm ${toneClass[line.kind]}`}
            >
              {line.kind === "in" ? (
                <>
                  <span className="text-accent">$ </span>
                  {line.text}
                </>
              ) : (
                line.text || "\u00a0"
              )}
            </p>
          ))}
        </div>
      )}

      {playing ? null : (
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-line px-4 py-3"
        >
          <label
            htmlFor="terminal-input"
            className="font-mono text-sm text-accent"
          >
            $
            <span className="sr-only">
              Digite um comando. Use ajuda para ver a lista.
            </span>
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="ajuda"
            className="w-full bg-transparent font-mono text-xs text-fg outline-none placeholder:text-muted/60 sm:text-sm"
          />
        </form>
      )}
    </div>
  );
}
