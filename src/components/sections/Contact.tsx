import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/animated-gradient-text";
import { profile } from "@/data/profile";

const CHANNELS = [
  {
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/abilvjose",
    href: profile.links.linkedin,
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@abilvj2",
    href: profile.links.github,
    Icon: Github,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-32"
    >
      <RetroGrid />
      <BackgroundBeams className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <BlurFade>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
            Contact
          </span>
        </BlurFade>

        <BlurFade delay={0.08}>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let's build something <GradientText>intelligent</GradientText>
          </h2>
        </BlurFade>

        <BlurFade delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-slate-400">
            I'm open to AI and machine learning engineering roles, and to
            collaborating on projects where the modelling actually matters. The
            fastest way to reach me is email.
          </p>
        </BlurFade>

        <BlurFade delay={0.24}>
          <div className="mt-10 flex justify-center">
            <ShimmerButton
              href={`mailto:${profile.links.email}`}
              className="px-8 py-4"
            >
              <span className="z-10 flex items-center gap-2 font-semibold text-white">
                <Mail className="h-4 w-4" />
                {profile.links.email}
              </span>
            </ShimmerButton>
          </div>
        </BlurFade>

        <BlurFade delay={0.32}>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {CHANNELS.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="glass group flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-colors hover:border-accent/40"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-accent" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-slate-200">
                      {value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition-colors group-hover:text-accent" />
              </a>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
