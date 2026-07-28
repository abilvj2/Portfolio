import { forwardRef, useRef, type ReactNode } from "react";
import {
  Boxes,
  BrainCircuit,
  Database,
  GitBranch,
  Gauge,
  Rocket,
  Server,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { SectionHeading } from "./SectionHeading";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

const Node = forwardRef<
  HTMLDivElement,
  { className?: string; children: ReactNode; label: string }
>(({ className, children, label }, ref) => (
  <div className="flex flex-col items-center gap-2">
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-white/15 bg-ink-800 p-3 text-accent shadow-[0_0_24px_-6px_rgba(56,189,248,0.5)]",
        className,
      )}
    >
      {children}
    </div>
    <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-slate-500">
      {label}
    </span>
  </div>
));
Node.displayName = "Node";

/**
 * An MLOps flow rendered with Magic UI's AnimatedBeam — data sources fan into
 * training, which fans out to serving.
 */
export function Pipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const versionRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const evalRef = useRef<HTMLDivElement>(null);
  const serveRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="How I work"
          title="From raw data to"
          highlight="deployed inference"
          description="Every project follows the same spine: understand the data, train something honest, measure it properly, then ship it where it can be monitored."
        />

        <BlurFade delay={0.1}>
          <div
            ref={containerRef}
            className="relative mx-auto mt-16 flex h-[340px] w-full max-w-4xl items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 p-8 backdrop-blur-sm sm:p-12"
          >
            {/* column 1 — inputs */}
            <div className="flex h-full flex-col items-center justify-center gap-10">
              <Node ref={dataRef} label="Data">
                <Database className="h-full w-full" />
              </Node>
              <Node ref={featuresRef} label="Features">
                <Boxes className="h-full w-full" />
              </Node>
              <Node ref={versionRef} label="Versioning">
                <GitBranch className="h-full w-full" />
              </Node>
            </div>

            {/* column 2 — model */}
            <div className="flex h-full flex-col items-center justify-center">
              <Node
                ref={modelRef}
                label="Model"
                className="size-16 border-accent/40 bg-ink-800 text-accent"
              >
                <BrainCircuit className="h-full w-full" />
              </Node>
            </div>

            {/* column 3 — outputs */}
            <div className="flex h-full flex-col items-center justify-center gap-10">
              <Node ref={evalRef} label="Evaluation">
                <Gauge className="h-full w-full" />
              </Node>
              <Node ref={serveRef} label="Serving">
                <Server className="h-full w-full" />
              </Node>
              <Node ref={shipRef} label="Production">
                <Rocket className="h-full w-full" />
              </Node>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={dataRef} toRef={modelRef} curvature={-70} />
            <AnimatedBeam containerRef={containerRef} fromRef={featuresRef} toRef={modelRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={versionRef} toRef={modelRef} curvature={70} />
            <AnimatedBeam containerRef={containerRef} fromRef={modelRef} toRef={evalRef} curvature={-70} />
            <AnimatedBeam containerRef={containerRef} fromRef={modelRef} toRef={serveRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={modelRef} toRef={shipRef} curvature={70} />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
