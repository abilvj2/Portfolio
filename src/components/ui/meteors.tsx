/**
 * Aceternity UI — Meteors
 */
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export function Meteors({
  number = 18,
  className,
}: {
  number?: number;
  className?: string;
}) {
  // Positions are randomised once per mount so they don't jump on re-render.
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, (_, i) => ({
        id: i,
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: `${(Math.random() * 3).toFixed(2)}s`,
        duration: `${(Math.random() * 6 + 4).toFixed(2)}s`,
      })),
    [number],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m) => (
        <span
          key={m.id}
          className={cn(
            "absolute top-0 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-300 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-slate-300 before:to-transparent before:content-['']",
            className,
          )}
          style={{
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  );
}
