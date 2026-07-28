import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, MapPin, Sparkle } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  AnimatedGradientText,
  GradientText,
} from "@/components/ui/animated-gradient-text";
import { RotatingTypewriter } from "@/components/ui/typing-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative isolate">
      <AuroraBackground className="min-h-[100svh] w-full overflow-hidden px-5 py-24">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#7dd3fc" />

        {/* particle field */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <SparklesCore
            density={40}
            minSize={0.4}
            maxSize={1.3}
            particleColor="#bae6fd"
            className="h-full w-full [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedGradientText>
              <Sparkle className="mr-2 h-3.5 w-3.5 text-accent" />
              <span className="text-slate-200">Open to AI / ML engineering roles</span>
            </AnimatedGradientText>
          </motion.div>

          {/* avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-8 h-28 w-28 rounded-full p-[2px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-ink-800">
              <img
                src={profile.avatar}
                alt={profile.name}
                width={112}
                height={112}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <BorderBeam size={90} duration={9} borderWidth={2} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            {profile.name.split(" ").slice(0, 1).join(" ")}{" "}
            <GradientText>
              {profile.name.split(" ").slice(1).join(" ")}
            </GradientText>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 flex min-h-[2.5rem] items-center justify-center font-mono text-lg text-accent-soft sm:text-2xl"
          >
            <span className="text-slate-500">&gt;&nbsp;</span>
            <RotatingTypewriter words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-4 flex items-center gap-2 text-sm text-slate-500"
          >
            <MapPin className="h-4 w-4" />
            {profile.location}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <ShimmerButton href="#projects" className="px-7 py-3.5">
              <span className="z-10 font-semibold text-white">View my work</span>
            </ShimmerButton>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            {profile.links.resume && (
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
              >
                <FileText className="h-4 w-4" /> Résumé
              </a>
            )}
          </motion.div>

          {/* stats */}
          <motion.dl
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-4 py-5 text-center"
              >
                <dd className="text-3xl font-bold text-white">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </dd>
                <dt className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  {stat.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-accent"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </AuroraBackground>
    </section>
  );
}
