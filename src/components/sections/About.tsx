import { GraduationCap, MapPin, Radar, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { GridPattern } from "@/components/ui/dot-pattern";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <GridPattern className="[mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligence into"
          highlight="real systems"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* narrative */}
          <BlurFade className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-8 backdrop-blur-sm sm:p-10">
              <TextGenerateEffect
                words={profile.summary[0]}
                className="text-lg leading-relaxed text-slate-200"
              />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-400">
                {profile.summary.slice(1).map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <BorderBeam size={280} duration={16} delay={2} />
            </div>
          </BlurFade>

          {/* fact cards */}
          <div className="grid gap-6 lg:col-span-2">
            <BlurFade delay={0.1}>
              <CardSpotlight className="h-full">
                <Radar className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-semibold text-slate-100">
                  What I focus on
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {[
                    "LLM applications, RAG and generative AI agents",
                    "Production Python and C# services with REST APIs",
                    "Data pipelines and real-time analytics on Microsoft Fabric",
                    "HIPAA-aligned healthcare data and access control",
                    "Intelligent automation with Power Platform and UiPath",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardSpotlight>
            </BlurFade>

            <BlurFade delay={0.18}>
              <CardSpotlight className="h-full" color="rgba(167,139,250,0.14)">
                <GraduationCap className="h-5 w-5 text-violetish" />
                <h3 className="mt-4 font-semibold text-slate-100">Education</h3>
                <ul className="mt-3 space-y-3 text-sm">
                  {profile.education.map((ed) => (
                    <li key={ed.degree}>
                      <p className="font-medium text-slate-200">{ed.degree}</p>
                      <p className="text-slate-500">
                        {ed.school} · {ed.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardSpotlight>
            </BlurFade>

            <BlurFade delay={0.26}>
              <div className="grid grid-cols-2 gap-6">
                <CardSpotlight className="p-5">
                  <MapPin className="h-4 w-4 text-accent" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                    Based in
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    {profile.location}
                  </p>
                </CardSpotlight>
                <CardSpotlight className="p-5">
                  <Terminal className="h-4 w-4 text-accent" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                    Primary stack
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Python · Azure · LLMs
                  </p>
                </CardSpotlight>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
