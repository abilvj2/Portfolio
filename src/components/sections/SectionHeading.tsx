import type { ReactNode } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <BlurFade>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
          {eyebrow}
        </span>
      </BlurFade>
      <BlurFade delay={0.08}>
        <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title} {highlight && <GradientText>{highlight}</GradientText>}
        </h2>
      </BlurFade>
      {description && (
        <BlurFade delay={0.16}>
          <p className="mt-5 text-balance text-base leading-relaxed text-slate-400">
            {description}
          </p>
        </BlurFade>
      )}
    </div>
  );
}
