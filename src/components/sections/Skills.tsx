import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Meteors } from "@/components/ui/meteors";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const ICONS = [Brain, Layers, Code2, Cloud, Database];

// Bento layout: first tile is wide, fourth is wide — keeps the grid from
// looking like a plain 3-column list.
const SPANS = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-3",
];

const ACCENTS = [
  "from-sky-500/20 via-cyan-500/10",
  "from-violet-500/20 via-fuchsia-500/10",
  "from-emerald-500/20 via-teal-500/10",
  "from-amber-500/20 via-orange-500/10",
  "from-rose-500/20 via-pink-500/10",
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <DotPattern className="[mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Capabilities"
          title="The stack I build"
          highlight="intelligent systems with"
          description="From research notebooks through to deployed inference — the tools I reach for most, grouped by where they sit in the workflow."
        />

        <BentoGrid className="mt-16 md:auto-rows-[16rem]">
          {profile.skills.map((skill, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <BentoGridItem
                key={skill.group}
                className={cn("relative overflow-hidden", SPANS[i % SPANS.length])}
                header={
                  <div
                    className={cn(
                      "relative flex w-full flex-1 items-end overflow-hidden rounded-xl bg-gradient-to-br to-transparent p-4",
                      ACCENTS[i % ACCENTS.length],
                    )}
                  >
                    {i === 0 && <Meteors number={10} />}
                    <div className="relative flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                }
                icon={<Icon className="h-4 w-4 text-accent" />}
                title={skill.group}
                description={`${skill.items.length} tools and techniques`}
              />
            );
          })}
        </BentoGrid>

        {/* proficiency meters */}
        <div className="mx-auto mt-20 grid max-w-4xl gap-6 sm:grid-cols-2">
          {profile.proficiency.map((item, i) => (
            <BlurFade key={item.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-slate-200">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-accent-soft">
                    {item.value}%
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent via-violetish to-cyan-300"
                  />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
