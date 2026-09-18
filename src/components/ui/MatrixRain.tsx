"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "01{}[]<>/\$#;=+*ゴジラアカサタナハマヤラワabcdef";
const FONT_SIZE = 16;
const FPS = 20;

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.trim().replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;

  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

/**
 * Chuva de caracteres no accent do tema (nao verde: em fundo claro o verde
 * perde contraste e briga com a paleta).
 *
 * Cuidados que fazem ela nao pesar:
 *   - pausa quando a aba esta em segundo plano ou quando sai da tela;
 *   - 20fps, nao 60: matrix nao precisa de mais e gasta menos bateria;
 *   - sob prefers-reduced-motion desenha UM quadro parado e para.
 */
export default function MatrixRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const styles = getComputedStyle(document.documentElement);
    const accent = hexToRgb(styles.getPropertyValue("--color-accent") || "#6d28d9");
    const bg = hexToRgb(styles.getPropertyValue("--color-bg") || "#fafafa");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let drops: number[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = 0;
    let visible = true;

    function resize() {
      if (!canvas || !ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${FONT_SIZE}px ui-monospace, monospace`;
      ctx.textBaseline = "top";

      const columns = Math.ceil(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * -height) / FONT_SIZE),
      );

      ctx.fillStyle = `rgb(${bg[0]},${bg[1]},${bg[2]})`;
      ctx.fillRect(0, 0, width, height);
    }

    function step() {
      if (!ctx) return;

      // rastro: pinta o fundo por cima com pouca opacidade
      ctx.fillStyle = `rgba(${bg[0]},${bg[1]},${bg[2]},0.14)`;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i += 1) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // o caractere da ponta e mais forte, o resto e rastro
        ctx.fillStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},0.85)`;
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += 1;
        }
      }
    }

    function loop(now: number) {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      if (now - last < 1000 / FPS) return;

      last = now;
      step();
    }

    resize();

    if (reduced) {
      // um quadro so, sem animacao
      for (let i = 0; i < 24; i += 1) step();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && !document.hidden;
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const onVisibility = () => {
      visible = !document.hidden;
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    />
  );
}
