/**
 * Magic UI — Orbiting Circles
 * Children orbit a shared centre on a CSS-driven circular path.
 */
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: {
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}) {
  return (
    <>
      {path && (
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full [animation-delay:calc(var(--delay)*1000ms)]",
          reverse && "[animation-direction:reverse]",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
