/**
 * Magic UI — Animated Gradient Text
 */
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/5 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#38bdf81f] backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#38bdf83f]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient-flow rounded-[inherit] bg-gradient-to-r from-accent/50 via-violetish/50 to-accent/50 bg-[length:var(--bg-size)_100%] p-px",
          "![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        )}
        style={{ ["--bg-size" as string]: "300%" } as CSSProperties}
      />
      {children}
    </div>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "animate-gradient-flow bg-gradient-to-r from-accent via-violetish to-cyan-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
        className,
      )}
      style={{ ["--bg-size" as string]: "300%" } as CSSProperties}
    >
      {children}
    </span>
  );
}
