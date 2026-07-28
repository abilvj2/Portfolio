import { Award, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { BlurFade } from "@/components/ui/blur-fade";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { profile } from "@/data/profile";

export function Credentials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards and"
          highlight="certifications"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Awards */}
          <BlurFade>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-accent">
                <Award className="h-5 w-5" />
                <h3 className="text-sm font-medium uppercase tracking-wider">
                  Awards
                </h3>
              </div>

              <ul className="mt-6 space-y-6">
                {profile.awards.map((award) => (
                  <li key={award.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-semibold text-white">{award.title}</p>
                      {award.year && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-400">
                          {award.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-accent-soft">{award.issuer}</p>
                    {award.note && (
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {award.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>

              <BorderBeam size={260} duration={15} />
            </div>
          </BlurFade>

          {/* Certifications */}
          <BlurFade delay={0.1}>
            <CardSpotlight
              className="h-full p-8"
              color="rgba(167,139,250,0.14)"
            >
              <div className="flex items-center gap-2 text-violetish">
                <BadgeCheck className="h-5 w-5" />
                <h3 className="text-sm font-medium uppercase tracking-wider">
                  Certifications
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {profile.certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3"
                  >
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-violetish" />
                    <span>
                      <span className="block text-sm font-medium text-slate-100">
                        {cert.title}
                      </span>
                      <span className="block text-xs text-slate-500">
                        {cert.issuer}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </CardSpotlight>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
