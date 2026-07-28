/**
 * Magic UI — Shine Border
 */
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ShineBorder({
  borderRadius = 16,
  borderWidth = 1,
  duration = 14,
  color = ["#38bdf8", "#a78bfa", "#22d3ee"],
  className,
  children,
}: {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as CSSProperties
      }
      className={cn(
        "relative min-h-[60px] w-fit rounded-[--border-radius] bg-ink-900 p-3",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--shine-duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent, transparent, ${
              Array.isArray(color) ? color.join(",") : color
            }, transparent, transparent)`,
          } as CSSProperties
        }
        className={
          "pointer-events-none before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine"
        }
      />
      {children}
    </div>
  );
}
