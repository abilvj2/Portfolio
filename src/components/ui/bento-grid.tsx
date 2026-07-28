/**
 * Aceternity UI — Bento Grid
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[19rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-ink-900/60 p-4 shadow-none backdrop-blur-sm transition duration-200 hover:border-white/20 hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.35)]",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mb-2 mt-2 font-sans font-semibold text-slate-100">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
}
