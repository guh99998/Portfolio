"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Use dentro de um container com `stagger`: herda o ritmo do pai. */
  asChild?: boolean;
};

export default function Reveal({ children, className, delay = 0, asChild }: Props) {
  if (asChild) {
    return (
      <motion.div variants={fadeUp} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
