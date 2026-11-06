"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const tags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  aside: motion.aside,
} as const;

type RevealProps = {
  as?: keyof typeof tags;
  delay?: number;
  lift?: boolean;
  shift?: boolean;
  className?: string;
  children: ReactNode;
};

export function Reveal({
  as = "div",
  delay = 0,
  lift = false,
  shift = true,
  className,
  children,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = tags[as];
  const hidden = shift ? { opacity: 0, y: 18 } : { opacity: 0 };
  const shown = shift ? { opacity: 1, y: 0 } : { opacity: 1 };

  return (
    <Component
      className={className}
      initial={reduce ? false : hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay: reduce ? 0 : delay, ease }}
      whileHover={lift && !reduce ? { y: -4 } : undefined}
    >
      {children}
    </Component>
  );
}
