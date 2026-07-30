import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Renders an image from /public when one is supplied, and a designed
 * placeholder when it isn't — so a section that expects a photo still looks
 * deliberate before the file has been added.
 */
export function MediaFrame({
  src,
  alt,
  className,
  placeholder,
  ratio = "aspect-[4/3]",
}: {
  src?: string;
  alt: string;
  className?: string;
  placeholder?: ReactNode;
  ratio?: string;
}) {
  const resolved = src ? `${import.meta.env.BASE_URL}${src}` : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-ink-950/60",
        ratio,
        className,
      )}
    >
      {resolved ? (
        <img
          src={resolved}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 via-violetish/10 to-transparent p-6 text-center">
          {placeholder}
        </div>
      )}
      {/* Subtle sheen so the frame reads as a photograph slot either way. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
    </motion.div>
  );
}
