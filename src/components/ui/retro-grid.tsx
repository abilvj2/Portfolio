/**
 * Magic UI — Retro Grid
 */
import { cn } from "@/lib/utils";

export function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-40 [perspective:200px]",
        className,
      )}
      style={{ ["--grid-angle" as string]: `${angle}deg` }}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            "[background-image:linear-gradient(to_right,rgba(148,163,184,0.28)_1px,transparent_0),linear-gradient(to_bottom,rgba(148,163,184,0.28)_1px,transparent_0)]",
          )}
        />
      </div>
      {/* fade the horizon */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
    </div>
  );
}
