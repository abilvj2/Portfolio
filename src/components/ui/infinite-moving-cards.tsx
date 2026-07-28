/**
 * Aceternity UI — Infinite Moving Cards
 * Duplicates its children once so the CSS scroll loops seamlessly.
 */
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    // Clone the list so the -50% translate lands on an identical frame.
    Array.from(scroller.children).forEach((child) => {
      const clone = child.cloneNode(true);
      if (clone instanceof Element) clone.setAttribute("aria-hidden", "true");
      scroller.appendChild(clone);
    });

    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
    container.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
    );
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl overflow-hidden fade-x", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            key={item.name + item.quote.slice(0, 12)}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 px-8 py-6 md:w-[450px]"
          >
            <blockquote>
              <span className="relative z-20 text-sm font-normal leading-[1.6] text-slate-300">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-medium leading-[1.6] text-slate-200">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-slate-500">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
