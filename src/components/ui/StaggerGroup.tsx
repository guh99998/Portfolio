"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { stagger, viewportOnce } from "@/lib/motion";

/** Container de grid/lista: os <Reveal asChild> filhos entram em sequencia. */
export default function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
