/**
 * Aceternity UI — Card Hover Effect
 * A shared highlight pill slides between cards using a layoutId transition.
 */
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HoverEffect({
  items,
  className,
}: {
  items: { title: string; description: string; link?: string; footer?: ReactNode }[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    // Flex-wrap rather than a fixed grid: a trailing partial row centres
    // itself instead of leaving a hole on one side, so the layout stays
    // balanced whatever number of projects it is given.
    <div
      className={cn(
        "flex flex-wrap justify-center gap-2 py-6 [--card:100%] sm:[--card:calc(50%-0.5rem)] lg:[--card:calc(33.333%-0.667rem)] xl:[--card:calc(25%-0.75rem)]",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Wrapper = item.link ? "a" : "div";
        return (
          <Wrapper
            key={item.title}
            {...(item.link
              ? { href: item.link, target: "_blank", rel: "noreferrer noopener" }
              : {})}
            className="group relative block w-[var(--card)] p-2"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-accent/10"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10 h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-5 transition-colors duration-300 group-hover:border-accent/40">
              <h4 className="font-semibold tracking-tight text-slate-100">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              {item.footer}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
