import { ArrowUpRight, Github, Linkedin, MessageSquare } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/animated-gradient-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { profile } from "@/data/profile";

const CHANNELS = [
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

/**
 * Turns a Google Form share URL into its embeddable form. Short forms.gle
 * links cannot be embedded, so those fall back to a plain button.
 */
function toEmbedUrl(url: string): string | null {
  if (!url.includes("docs.google.com/forms")) return null;
  const base = url.split("?")[0].replace(/\/(edit|viewform)?$/, "");
  return `${base}/viewform?embedded=true`;
}

export function Contact() {
  const formUrl = profile.links.contactForm;
  const embedUrl =
    formUrl && profile.links.contactFormEmbed ? toEmbedUrl(formUrl) : null;

  return (
    <section id="contact" className="relative isolate overflow-hidden py-32">
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
            collaborating on projects where the modelling actually matters. Drop
            me a message below and it lands straight in my inbox.
          </p>
        </BlurFade>

        {embedUrl ? (
          <BlurFade delay={0.24}>
            <div className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 p-2 backdrop-blur-sm">
              <iframe
                src={embedUrl}
                title="Contact form"
                className="h-[620px] w-full rounded-2xl bg-white"
                loading="lazy"
              >
                Loading…
              </iframe>
              <BorderBeam size={300} duration={16} />
            </div>
            <a
              href={formUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-accent"
            >
              Trouble with the form? Open it in a new tab
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </BlurFade>
        ) : (
          <BlurFade delay={0.24}>
            <div className="mt-10 flex justify-center">
              <ShimmerButton
                href={formUrl || profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="px-8 py-4"
              >
                <span className="z-10 flex items-center gap-2 font-semibold text-white">
                  <MessageSquare className="h-4 w-4" />
                  {formUrl ? "Open the contact form" : "Message me on LinkedIn"}
                </span>
              </ShimmerButton>
            </div>
          </BlurFade>
        )}

        <BlurFade delay={0.32}>
          <div className="mx-auto mt-14 grid max-w-xl gap-4 sm:grid-cols-2">
            {CHANNELS.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
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
