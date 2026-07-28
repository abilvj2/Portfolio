import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 pb-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind
          and Framer Motion.
        </p>
        <p className="font-mono text-xs text-slate-600">
          Components from Aceternity UI &amp; Magic UI · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
