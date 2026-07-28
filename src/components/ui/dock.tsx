/**
 * Magic UI — Dock
 * macOS-style magnifying dock. Icons scale based on pointer distance.
 */
import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export function Dock({
  className,
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}: {
  className?: string;
  children: ReactNode;
  magnification?: number;
  distance?: number;
}) {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () =>
    Children.map(children, (child) => {
      if (!isValidElement<DockIconProps>(child)) return child;
      return cloneElement(child, { mouseX, magnification, distance });
    });

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-[58px] w-max items-end gap-2 rounded-2xl border border-white/10 bg-ink-900/70 p-2 backdrop-blur-xl",
        className,
      )}
    >
      {renderChildren()}
    </motion.div>
  );
}

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  label?: string;
}

export function DockIcon({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  onClick,
  label,
}: DockIconProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const fallback = useMotionValue(Infinity);
  const x = mouseX ?? fallback;

  const distanceCalc = useTransform(x, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [DEFAULT_SIZE, magnification, DEFAULT_SIZE],
  );
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      style={{ width, height: width }}
      className={cn(
        "group/dock relative flex aspect-square cursor-pointer items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-accent/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
        className,
      )}
    >
      {children}
      {label && (
        <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-white/10 bg-ink-800 px-2 py-1 text-[11px] text-slate-200 opacity-0 transition-opacity duration-150 group-hover/dock:opacity-100">
          {label}
        </span>
      )}
    </motion.button>
  );
}
