"use client";

import { useEffect, useRef } from "react";

const COUNT = 880;
const GOLDEN = Math.PI * (3 - Math.sqrt(5));

const points = Array.from({ length: COUNT }, (_, index) => {
  const y = 1 - (index / (COUNT - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = GOLDEN * index;
  return {
    x: Math.cos(theta) * radius,
    y,
    z: Math.sin(theta) * radius,
  };
});

export function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);

      const rotation = motion.matches ? 0.4 : time * 0.00012;
      const tilt = 0.35;
      const centerX = width * 0.72;
      const centerY = height * 0.46;
      const radius = Math.min(width, height) * 0.42;

      for (const point of points) {
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);
        const x = point.x * cos + point.z * sin;
        const z = point.z * cos - point.x * sin;
        const y = point.y * Math.cos(tilt) - z * Math.sin(tilt);
        const depth = z * Math.cos(tilt) + point.y * Math.sin(tilt);
        const shade = (depth + 1) / 2;

        context.fillStyle = `rgba(236, 226, 204, ${0.05 + shade * 0.42})`;
        context.beginPath();
        context.arc(centerX + x * radius, centerY + y * radius, 0.7 + shade * 1.15, 0, Math.PI * 2);
        context.fill();
      }

      if (!motion.matches) frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-0" />;
}
