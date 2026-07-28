import { Marquee } from "@/components/ui/marquee";
import { profile } from "@/data/profile";

export function TechMarquee() {
  const half = Math.ceil(profile.stack.length / 2);
  const rowOne = profile.stack.slice(0, half);
  const rowTwo = profile.stack.slice(half);

  return (
    <section className="relative border-y border-white/5 bg-ink-900/30 py-14">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
        Tools I work with
      </p>

      <div className="relative fade-x">
        <Marquee pauseOnHover className="[--duration:38s]">
          {rowOne.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:44s]">
          {rowTwo.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <div className="mx-1 flex items-center gap-2 rounded-xl border border-white/10 bg-ink-900/70 px-5 py-3 transition-colors hover:border-accent/40">
      <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
      <span className="whitespace-nowrap text-sm font-medium text-slate-300">
        {label}
      </span>
    </div>
  );
}
