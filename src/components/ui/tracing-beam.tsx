/**
 * Aceternity UI — Tracing Beam
 * A gradient beam draws down the left rail as the section scrolls.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function TracingBeam({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setSvgHeight(el.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 },
  );

  // Dot glows brighter while the user is actively scrolling.
  const velocity = useVelocity(scrollYProgress);
  const glow = useTransform(velocity, [-1, 0, 1], [1, 0.35, 1]);

  return (
    <motion.div ref={ref} className={cn("relative mx-auto w-full max-w-5xl", className)}>
      <div className="absolute -left-2 top-3 hidden md:block">
        <motion.div
          transition={{ duration: 0.2, delay: 0.4 }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-white/20 shadow-sm"
        >
          <motion.div
            style={{ opacity: glow }}
            className="h-2 w-2 rounded-full border border-accent bg-accent"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden
        >
          <motion.path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="#ffffff14"
            strokeWidth="1.25"
          />
          <motion.path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#beam-gradient)"
            strokeWidth="1.6"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#38bdf8" stopOpacity="0" />
              <stop stopColor="#38bdf8" />
              <stop offset="0.35" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="md:pl-16">
        {children}
      </div>
    </motion.div>
  );
}
