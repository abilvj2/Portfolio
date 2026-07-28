import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Pipeline } from "@/components/sections/Pipeline";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      {/* Ambient orbs sitting behind every section */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] animate-float rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-40 top-2/3 h-[460px] w-[460px] animate-float rounded-full bg-violetish/10 blur-[130px] [animation-delay:-6s]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Pipeline />
        <Experience />
        <Projects />
        {/*
          Testimonials currently render placeholder quotes from
          src/data/profile.ts — swap in real LinkedIn recommendations, or
          delete this line to drop the section entirely.
        */}
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
