"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const COLS = 28;
const ROWS = 14;
const START_SPEED = 140;
const MIN_SPEED = 70;
const STORAGE_KEY = "gustavo:cobrinha:recorde";

type Point = { x: number; y: number };
type Dir = "up" | "down" | "left" | "right";

const VECTORS: Record<Dir, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const OPPOSITE: Record<Dir, Dir> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

const KEYS: Record<string, Dir> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  w: "up",
  s: "down",
  a: "left",
  d: "right",
};

function randomFood(snake: Point[]): Point {
  // tenta posicoes ate achar uma livre — o tabuleiro nunca fica tao cheio
  // a ponto disso virar problema
  let spot: Point;
  do {
    spot = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  } while (snake.some((part) => part.x === spot.x && part.y === spot.y));

  return spot;
}

const initialSnake: Point[] = [
  { x: 6, y: 7 },
  { x: 5, y: 7 },
  { x: 4, y: 7 },
];

export default function SnakeGame({ onExit }: { onExit: () => void }) {
  const [snake, setSnake] = useState<Point[]>(initialSnake);
  const [food, setFood] = useState<Point>({ x: 18, y: 7 });
  const [dead, setDead] = useState(false);
  const [best, setBest] = useState(0);

  // a direcao vive em ref pra nao virar dependencia do intervalo
  const dir = useRef<Dir>("right");
  const queued = useRef<Dir | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // o tique le por ref e escreve por setState uma vez so. Calcular dentro do
  // updater do setSnake daria resultado diferente no StrictMode, que invoca
  // o updater duas vezes.
  const snakeRef = useRef(snake);
  const foodRef = useRef(food);
  snakeRef.current = snake;
  foodRef.current = food;

  const score = snake.length - initialSnake.length;

  useEffect(() => {
    boardRef.current?.focus();

    // localStorage pode lancar em aba anonima ou com dados bloqueados
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setBest(Number(saved) || 0);
    } catch {
      // sem recorde salvo, o jogo continua funcionando igual
    }
  }, []);

  const turn = useCallback((next: Dir) => {
    // impede a volta de 180 graus, inclusive no mesmo tique
    if (next === OPPOSITE[dir.current]) return;
    queued.current = next;
  }, []);

  useEffect(() => {
    if (dead) return;

    const speed = Math.max(MIN_SPEED, START_SPEED - score * 4);

    const id = window.setInterval(() => {
      if (queued.current) {
        dir.current = queued.current;
        queued.current = null;
      }

      const current = snakeRef.current;
      const vector = VECTORS[dir.current];
      const head = {
        x: current[0].x + vector.x,
        y: current[0].y + vector.y,
      };

      const hitWall =
        head.x < 0 || head.y < 0 || head.x >= COLS || head.y >= ROWS;
      // a cauda sai no mesmo tique, entao bater nela nao e colisao
      const body = current.slice(0, -1);
      const hitSelf = body.some(
        (part) => part.x === head.x && part.y === head.y,
      );

      if (hitWall || hitSelf) {
        setDead(true);
        return;
      }

      const meal = foodRef.current;
      const ate = head.x === meal.x && head.y === meal.y;
      const next = [head, ...(ate ? current : current.slice(0, -1))];

      setSnake(next);
      if (ate) setFood(randomFood(next));
    }, speed);

    return () => window.clearInterval(id);
  }, [dead, score]);

  useEffect(() => {
    if (!dead) return;

    if (score > best) {
      setBest(score);
      try {
        window.localStorage.setItem(STORAGE_KEY, String(score));
      } catch {
        // recorde so nao persiste; nada mais quebra
      }
    }
  }, [dead, score, best]);

  function restart() {
    setSnake(initialSnake);
    setFood(randomFood(initialSnake));
    dir.current = "right";
    queued.current = null;
    setDead(false);
    boardRef.current?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape" || event.key === "q") {
      onExit();
      return;
    }

    if (dead && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      restart();
      return;
    }

    const next = KEYS[event.key];
    if (!next) return;

    // sem isso as setas rolam a pagina enquanto voce joga
    event.preventDefault();
    turn(next);
  }

  const cells: string[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => " "),
  );
  cells[food.y][food.x] = "food";
  snake.forEach((part, index) => {
    if (cells[part.y]) cells[part.y][part.x] = index === 0 ? "head" : "body";
  });

  return (
    <div className="px-4 py-4">
      <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
        <span>
          pontos <span className="text-accent">{score}</span>
        </span>
        <span>recorde {best}</span>
        <span className="hidden sm:inline">setas · esc pra sair</span>
      </div>

      <div
        ref={boardRef}
        tabIndex={0}
        role="application"
        aria-label={`Jogo da cobrinha. Pontos: ${score}. Use as setas para mover e Escape para sair.`}
        onKeyDown={handleKeyDown}
        className="relative inline-block border border-line leading-none outline-none focus-visible:border-accent"
      >
        {cells.map((row, y) => (
          <div key={y} className="flex">
            {row.map((cell, x) => (
              <span
                key={x}
                aria-hidden="true"
                className={`inline-block h-3 w-3 font-mono text-[10px] sm:h-3.5 sm:w-3.5 ${
                  cell === "head"
                    ? "bg-accent"
                    : cell === "body"
                      ? "bg-accent/50"
                      : cell === "food"
                        ? "bg-fg"
                        : ""
                }`}
              />
            ))}
          </div>
        ))}

        {dead ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-bg/90 px-4 text-center">
            <p className="font-mono text-sm">fim de jogo — {score} ponto(s)</p>
            <p className="font-mono text-xs text-muted">
              enter pra jogar de novo · esc pra sair
            </p>
          </div>
        ) : null}
      </div>

      {/* sem setas no celular, o jogo seria injogavel */}
      <div className="mt-3 flex gap-2 sm:hidden">
        {(
          [
            ["left", "←"],
            ["up", "↑"],
            ["down", "↓"],
            ["right", "→"],
          ] as [Dir, string][]
        ).map(([direction, symbol]) => (
          <button
            key={direction}
            type="button"
            aria-label={`Mover para ${direction}`}
            onClick={() => (dead ? restart() : turn(direction))}
            className="h-11 w-11 border border-line font-mono text-sm text-muted active:border-accent active:text-accent"
          >
            {symbol}
          </button>
        ))}
        <button
          type="button"
          onClick={onExit}
          className="ml-auto h-11 border border-line px-3 font-mono text-xs text-muted"
        >
          sair
        </button>
      </div>
    </div>
  );
}
