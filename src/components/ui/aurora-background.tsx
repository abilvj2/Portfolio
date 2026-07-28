/**
 * Aceternity UI — Aurora Background
 * Vendored (copy-paste distribution) so the project has no registry/CLI dependency.
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-ink-950 text-slate-100",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] opacity-40 blur-[10px] will-change-transform
             [--aurora:repeating-linear-gradient(100deg,#0284c7_10%,#7dd3fc_15%,#38bdf8_20%,#a78bfa_25%,#22d3ee_30%)]
             [--dark-gradient:repeating-linear-gradient(100deg,#04060d_0%,#04060d_7%,transparent_10%,transparent_12%,#04060d_16%)]
             [background-image:var(--dark-gradient),var(--aurora)]
             [background-size:300%,_200%]
             [background-position:50%_50%,50%_50%]
             after:absolute after:inset-0 after:content-[""]
             after:[background-image:var(--dark-gradient),var(--aurora)]
             after:[background-size:200%,_100%]
             after:mix-blend-difference
             after:animate-aurora`,
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
          )}
        />
      </div>
      {children}
    </div>
  );
}
