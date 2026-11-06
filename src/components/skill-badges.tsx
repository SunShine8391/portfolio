"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function SkillBadges({ items }: { items: readonly string[] }) {
  const reduce = useReducedMotion();

  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{
            duration: 0.35,
            delay: reduce ? 0 : Math.min(index * 0.035, 0.4),
            ease,
          }}
          whileHover={reduce ? undefined : { y: -2 }}
        >
          <Badge variant="outline" className="h-7 px-2.5 text-[0.8rem] font-normal">
            {item}
          </Badge>
        </motion.li>
      ))}
    </ul>
  );
}
