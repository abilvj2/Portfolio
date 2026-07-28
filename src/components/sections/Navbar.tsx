import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Cpu,
  Github,
  Home,
  Linkedin,
  Mail,
  User,
  Workflow,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { profile } from "@/data/profile";

const NAV = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Skills", Icon: Cpu },
  { id: "experience", label: "Experience", Icon: Workflow },
  { id: "projects", label: "Projects", Icon: Braces },
] as const;

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
      aria-label="Section navigation"
    >
      <Dock className="shadow-2xl shadow-black/60">
        {NAV.map(({ id, label, Icon }) => (
          <DockIcon
            key={id}
            label={label}
            onClick={() => go(id)}
            className={
              active === id ? "bg-accent/25 text-white ring-1 ring-accent/40" : ""
            }
          >
            <Icon className="h-[45%] w-[45%]" strokeWidth={1.75} />
          </DockIcon>
        ))}

        <span className="mx-1 h-8 w-px self-center bg-white/10" aria-hidden />

        <DockIcon
          label="GitHub"
          onClick={() => window.open(profile.links.github, "_blank", "noopener")}
        >
          <Github className="h-[45%] w-[45%]" strokeWidth={1.75} />
        </DockIcon>
        <DockIcon
          label="LinkedIn"
          onClick={() => window.open(profile.links.linkedin, "_blank", "noopener")}
        >
          <Linkedin className="h-[45%] w-[45%]" strokeWidth={1.75} />
        </DockIcon>
        <DockIcon label="Email" onClick={() => go("contact")}>
          <Mail className="h-[45%] w-[45%]" strokeWidth={1.75} />
        </DockIcon>
      </Dock>
    </motion.nav>
  );
}
