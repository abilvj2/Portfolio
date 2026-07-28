/**
 * Magic UI — Blur Fade
 * Generic scroll-in wrapper: fades, lifts and un-blurs its children.
 */
import { useRef, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
  once?: boolean;
}

export function BlurFade({
  children,
  className,
  duration = 0.45,
  delay = 0,
  yOffset = 12,
  inViewMargin = "-60px",
  blur = "6px",
  once = true,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    margin: inViewMargin as `${number}px`,
  });

  const variants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
        transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
