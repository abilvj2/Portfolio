import { Award, BadgeCheck, HeartHandshake, Mic } from "lucide-react";
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
          title="Speaking, awards and"
          highlight="certifications"
        />

        {/* Speaking — most recent community work leads the section. */}
        <div className="mt-16 grid gap-6">
          {profile.speaking.map((talk) => (
            <BlurFade key={talk.title}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-8 backdrop-blur-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Mic className="h-5 w-5" />
                    <span className="text-xs font-medium uppercase tracking-wider">
                      Invited speaker
                    </span>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                    {talk.date}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {talk.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-soft">
                  {talk.event}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">
                  {talk.blurb}
                </p>

                <BorderBeam size={320} duration={14} />
              </div>
            </BlurFade>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
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

              {/* Volunteering shares the awards card — same "outside the
                  day job" story, and it is too short to justify its own. */}
              {profile.volunteering.length > 0 && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-violetish">
                    <HeartHandshake className="h-4 w-4" />
                    <h4 className="text-xs font-medium uppercase tracking-wider">
                      Volunteering
                    </h4>
                  </div>
                  {profile.volunteering.map((v) => (
                    <div key={v.org} className="mt-3">
                      <p className="text-sm font-medium text-slate-200">
                        {v.role} · {v.org}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-400">{v.note}</p>
                    </div>
                  ))}
                </div>
              )}

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
