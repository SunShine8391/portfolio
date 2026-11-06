"use client";

import { useEffect, useRef, useState } from "react";

export function ExpandableText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || expanded) return;

    const measure = () => {
      setOverflows(element.scrollHeight > element.clientHeight + 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [expanded, text]);

  return (
    <div className="mt-2">
      <p
        ref={ref}
        className={
          expanded
            ? "text-sm leading-6 text-muted-foreground"
            : "line-clamp-3 text-sm leading-6 text-muted-foreground"
        }
      >
        {text}
      </p>
      {overflows || expanded ? (
        <button
          type="button"
          className="mt-2 font-mono text-xs tracking-wide text-primary transition-colors hover:text-foreground"
          aria-expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      ) : null}
    </div>
  );
}
