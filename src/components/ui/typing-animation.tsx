/**
 * Magic UI — Typing Animation (rotating word variant)
 * Types a word out, holds, deletes it, then moves to the next.
 */
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function RotatingTypewriter({
  words,
  className,
  typeSpeed = 70,
  deleteSpeed = 35,
  holdTime = 1600,
}: {
  words: readonly string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[2px] animate-caret-blink bg-accent align-middle"
      />
      {/* Screen readers get the stable role rather than the animation. */}
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
