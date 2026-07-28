/**
 * Aceternity UI — Sparkles
 * Canvas particle field. Written without the tsparticles dependency so the
 * bundle stays small and the project has no heavy third-party engine.
 */
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkle: number;
}

export function SparklesCore({
  className,
  background = "transparent",
  minSize = 0.5,
  maxSize = 1.6,
  density = 90,
  particleColor = "#ffffff",
}: {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  density?: number;
  particleColor?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let frame = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seed = () => {
      const { width, height } = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale particle count with area so wide screens aren't sparse.
      const count = Math.round((width * height) / 12000) + density;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speed: Math.random() * 0.25 + 0.05,
        opacity: Math.random() * 0.7 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
      }

      for (const p of particles) {
        const alpha = reduceMotion
          ? p.opacity
          : p.opacity * (0.55 + 0.45 * Math.sin(p.twinkle + frame * 0.02));
        ctx.globalAlpha = Math.max(alpha, 0);
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (!reduceMotion) {
          p.y -= p.speed;
          if (p.y < -2) {
            p.y = height + 2;
            p.x = Math.random() * width;
          }
        }
      }
      ctx.globalAlpha = 1;
      frame += 1;
    };

    seed();
    draw();

    let raf = 0;
    if (!reduceMotion) {
      const loop = () => {
        draw();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const observer = new ResizeObserver(() => {
      seed();
      draw();
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [background, density, maxSize, minSize, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none h-full w-full", className)}
    />
  );
}
