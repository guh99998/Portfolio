"use client";

import { useEffect, useRef, useState } from "react";

// o classico trem ascii do comando `sl` do linux
const TRAIN = String.raw`      ====        ________                ___________
  _D _|  |_______/        \__I_I_____===__|_________|
   |(_)---  |   H\________/ |   |        =|___ ___|
   /     |  |   H  |  |     |   |         ||_| |_||
  |      |  |   H  |__--------------------| [___] |
  | ________|___H__/__|_____/[][]~\_______|       |
  |/ |   |-----------I_____I [][] []  D   |=======|__
__/ =| o |=-~~\  /~~\  /~~\  /~~\ ____Pue___________|
 |/-=|___|=    ||    ||    ||    |_____/~\___/
  \_/      \O=====O=====O=====O_/      \_/`;

const SPEED = 130; // pixels por segundo

export default function TrainRun({ onExit }: { onExit: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trainRef = useRef<HTMLPreElement>(null);
  const doneRef = useRef(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    containerRef.current?.focus();
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    onExit();
  }

  useEffect(() => {
    // sob reduced motion o trem so aparece parado, sem RAF nenhum
    if (reduced) return;

    const container = containerRef.current;
    const train = trainRef.current;
    if (!container || !train) return;

    const containerWidth = container.clientWidth;
    const trainWidth = train.scrollWidth;
    const distance = containerWidth + trainWidth;
    const duration = (distance / SPEED) * 1000;

    let raf = 0;
    let start: number | null = null;

    function step(now: number) {
      if (start === null) start = now;
      const t = Math.min((now - start) / duration, 1);
      const x = containerWidth - distance * t;
      if (train) train.style.transform = `translate(${x}px, -50%)`;

      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        finish();
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

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

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="application"
      aria-label="Um trem passa pelo terminal. Toque na tela ou pressione Escape para voltar."
      onKeyDown={handleKeyDown}
      onClick={finish}
      className="relative h-72 cursor-pointer overflow-hidden outline-none focus-visible:outline-2 focus-visible:outline-accent sm:h-80"
    >
      <pre
        ref={trainRef}
        aria-hidden="true"
        className="absolute font-mono text-[9px] leading-tight whitespace-pre text-accent sm:text-xs"
        style={
          reduced
            ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
            : { top: "50%", left: 0, transform: "translate(100vw, -50%)" }
        }
      >
        {TRAIN}
      </pre>

      <div className="absolute inset-x-0 bottom-0 bg-bg/70 px-4 py-2 font-mono text-[10px] text-muted sm:text-xs">
        {reduced ? "toque na tela ou aperte uma tecla pra voltar" : "esc pra pular"}
      </div>
    </div>
  );
}
