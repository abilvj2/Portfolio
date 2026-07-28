import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { CardSpotlight } from "@/components/ui/card-spotlight";

import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="Five years of building"
          highlight="in production"
          description="Roles where I've owned systems end to end — from the data layer through to what users actually touch."
        />

        <div className="mt-16">
          <TracingBeam>
            <div className="space-y-6">
              {profile.experience.map((job, i) => (
                <BlurFade key={`${job.company}-${job.role}`} delay={i * 0.08}>
                  <CardSpotlight className="p-7 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-accent">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-xs font-medium uppercase tracking-wider">
                            {job.company}
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-white">
                          {job.role}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                          {job.period}
                        </span>
                        <p className="mt-2 flex items-center justify-end gap-1 text-xs text-slate-500">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-slate-400">
                      {job.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-ink-950/60 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardSpotlight>
                </BlurFade>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </section>
  );
}
