import { ArrowUpRight, Github, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Projects() {
  const featured = profile.projects.filter((p) => p.featured);
  const rest = profile.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Selected work"
          title="Models, pipelines and"
          highlight="things that ship"
          description="A sample of what I've built — every card links to the source on GitHub."
        />

        {/* featured — Aceternity 3D cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <BlurFade key={project.title} delay={i * 0.1}>
              <CardContainer containerClassName="py-0 h-full" className="h-full w-full">
                <CardBody className="group/card relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-6">
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-70",
                      project.accent,
                    )}
                  />
                  {i === 0 && <Meteors number={12} />}

                  <div className="relative">
                    <CardItem translateZ={40} className="flex w-full items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-soft">
                        <Star className="h-3 w-3" /> Featured
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        {project.year}
                      </span>
                    </CardItem>

                    <CardItem
                      as="h3"
                      translateZ={55}
                      className="mt-5 text-xl font-semibold leading-snug text-white"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ={35}
                      className="mt-3 text-sm leading-relaxed text-slate-400"
                    >
                      {project.blurb}
                    </CardItem>

                    <CardItem translateZ={30} className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-ink-950/70 px-2 py-1 font-mono text-[11px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>

                    <CardItem
                      as="a"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      translateZ={60}
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-accent/50 hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      View source
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </CardItem>
                  </div>

                  <BorderBeam
                    size={160}
                    duration={12}
                    delay={i * 3}
                    className="opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  />
                </CardBody>
              </CardContainer>
            </BlurFade>
          ))}
        </div>

        {/* the rest — Aceternity hover effect grid */}
        <BlurFade delay={0.1}>
          <h3 className="mt-24 text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            More on GitHub
          </h3>
          <HoverEffect
            className="mt-4 lg:grid-cols-4"
            items={rest.map((p) => ({
              title: p.title,
              description: p.blurb,
              link: p.href,
              footer: (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ),
            }))}
          />
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
            >
              <Github className="h-4 w-4" />
              See all repositories
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
