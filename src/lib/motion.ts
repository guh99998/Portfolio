import type { Variants } from "motion/react";

/** Entrada padrao de qualquer bloco. Curta: animacao a servico do conteudo. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Container de grid: os filhos entram em sequencia. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** viewport compartilhado — anima uma vez so, um pouco antes de entrar. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
