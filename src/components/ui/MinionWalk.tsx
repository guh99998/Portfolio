"use client";

import { useEffect, useRef, useState } from "react";

// minion em pixel art caminhando pelo terminal — easter egg escondido, nao
// listado na `ajuda`. cada string é uma linha de pixels (10 colunas).
const HEAD = [
  ".YYYYYYYY.",
  "YYYYYYYYYY",
  "YYYYYYYYYY",
  "YYGGGGGGYY",
  "YGGWWWWGGY",
  "YGGWKKWGGY",
  "YYGGGGGGYY",
  "YYYYYYYYYY",
  "YYKYYYYKYY",
  "YYYYKKYYYY",
  "YYBBBBBBYY",
  "YBBBBBBBBY",
  "YBBBBBBBBY",
];

// duas poses de perna alternadas pra dar a sensação de passo
const LEGS_A = ["BBBB..BBBB", "KKK....KKK"];
const LEGS_B = [".BBB..BBB.", ".KK....KK."];
const LEGS_STAND = ["BBBBBBBBBB", "..KKKKKK.."];

const COLORS: Record<string, string> = {
  Y: "#f4c610", // amarelo minion
  G: "#8c8c8c", // aro do óculos
  W: "#ffffff", // lente
  K: "#17171a", // pupila, tira, sapato
  B: "#1f4fa0", // macacão
};

const CELL = 8; // px por pixel do sprite
const COLS = 10;
const SPRITE_HEIGHT = (HEAD.length + 2) * CELL;

function Sprite({ legs }: { legs: string[] }) {
  const rows = [...HEAD, ...legs];
  return (
    <div style={{ lineHeight: 0 }}>
      {rows.map((row, y) => (
        <div key={y} style={{ display: "flex" }}>
          {row.split("").map((cell, x) => (
            <div
              key={x}
              style={{
                width: CELL,
                height: CELL,
                backgroundColor: COLORS[cell] ?? "transparent",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

const SPEED = 55; // pixels por segundo — minion anda mais devagar que o trem
const STEP_MS = 220; // troca de perna
const PAUSE_MS = 1500;

type Phase = "enter" | "pause" | "exit";

export default function MinionWalk({ onExit }: { onExit: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);
  const [reduced, setReduced] = useState(false);
  const [phase, setPhase] = useState<Phase>("enter");
  const [step, setStep] = useState(false);

  useEffect(() => {
    containerRef.current?.focus();
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    onExit();
  }

  // ciclo de perna: só troca enquanto o minion está realmente andando
  useEffect(() => {
    if (reduced || phase === "pause") return;
    const interval = setInterval(() => setStep((s) => !s), STEP_MS);
    return () => clearInterval(interval);
  }, [reduced, phase]);

  useEffect(() => {
    // sob reduced motion o minion so aparece parado no meio, com a fala
    if (reduced) return;

    const container = containerRef.current;
    const sprite = spriteRef.current;
    if (!container || !sprite) return;

    const containerWidth = container.clientWidth;
    const spriteWidth = COLS * CELL;
    const centerX = (containerWidth - spriteWidth) / 2;

    let raf = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (phase === "enter") {
      const distance = containerWidth - centerX;
      const duration = (distance / SPEED) * 1000;
      let start: number | null = null;

      function step(now: number) {
        if (start === null) start = now;
        const t = Math.min((now - start) / duration, 1);
        const x = containerWidth - distance * t;
        if (sprite) sprite.style.transform = `translate(${x}px, -50%)`;

        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setPhase("pause");
        }
      }

      raf = requestAnimationFrame(step);
    } else if (phase === "pause") {
      if (sprite) sprite.style.transform = `translate(${centerX}px, -50%)`;
      timeout = setTimeout(() => setPhase("exit"), PAUSE_MS);
    } else if (phase === "exit") {
      const distance = centerX + spriteWidth;
      const duration = (distance / SPEED) * 1000;
      let start: number | null = null;

      function step(now: number) {
        if (start === null) start = now;
        const t = Math.min((now - start) / duration, 1);
        const x = centerX - distance * t;
        if (sprite) sprite.style.transform = `translate(${x}px, -50%)`;

        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          finish();
        }
      }

      raf = requestAnimationFrame(step);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, phase]);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (
      event.key === "Escape" ||
      event.key === "q" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      finish();
    }
  }

  const showBubble = reduced || phase === "pause";
  const legs = reduced || phase === "pause" ? LEGS_STAND : step ? LEGS_B : LEGS_A;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="application"
      aria-label="Um minion caminha pelo terminal e para no meio para dizer papoi. Toque na tela ou pressione Escape para voltar."
      onKeyDown={handleKeyDown}
      onClick={finish}
      className="relative h-72 cursor-pointer overflow-hidden outline-none focus-visible:outline-2 focus-visible:outline-accent sm:h-80"
    >
      <div
        ref={spriteRef}
        aria-hidden="true"
        className="absolute"
        style={
          reduced
            ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
            : { top: "50%", left: 0, transform: "translate(100vw, -50%)" }
        }
      >
        <Sprite legs={legs} />
      </div>

      {showBubble ? (
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs text-fg shadow-sm sm:text-sm"
          style={{ top: `calc(50% - ${SPRITE_HEIGHT / 2 + 44}px)` }}
        >
          papoi!
          <div className="absolute left-1/2 top-full -mt-[5px] h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-line bg-surface" />
        </div>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 bg-bg/70 px-4 py-2 font-mono text-[10px] text-muted sm:text-xs">
        {reduced ? "toque na tela ou aperte uma tecla pra voltar" : "esc pra pular"}
      </div>
    </div>
  );
}
