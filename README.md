# Portfolio — Abil Varkichan Jose

An AI-engineer portfolio built with React, TypeScript, Tailwind CSS and Framer
Motion. It builds and deploys entirely on GitHub's runners — you never have to
install anything locally.

**Live site:** https://abilvj2.github.io/Portfolio/

---

## Turning the site on (one-time, ~30 seconds)

GitHub Pages has to be switched on by a human once — a workflow cannot do it,
because creating a Pages site needs repo-admin scope that the Actions token does
not carry.

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Go to the **Actions** tab, open *Build and deploy to GitHub Pages*, and click
   **Run workflow**.

After that, every push to `main` (or to the development branch) rebuilds and
redeploys automatically.

The repository must also be **public** — Pages on a private repo requires a paid
GitHub plan. Public repos get Pages and unlimited Actions minutes for free.

## Editing the content

Everything on the page — copy, projects, skills, links, stats — reads from a
single file:

```
src/data/profile.ts
```

Entries marked `TODO` are placeholders that could not be read automatically,
because LinkedIn blocks scripted access. Those are the ones worth filling in
first:

- `experience` — your roles, employers and dates
- `education` — degrees and institutions
- `testimonials` — LinkedIn recommendations (or delete `<Testimonials />` from
  `src/App.tsx` to remove the section)
- `links.resume` — drop a PDF into `public/` and set this to e.g. `"resume.pdf"`

You can edit that file directly in the GitHub web editor: open it, press
<kbd>.</kbd> or click the pencil icon, commit, and the site rebuilds itself.

Projects, skills, stats and the tech marquee are already populated from the
public GitHub profile.

## Components

Aceternity UI and Magic UI are distributed as copy-paste source rather than as
npm packages, so the components live in `src/components/ui/` with their origin
noted at the top of each file. There is no component CLI or registry to install.

**Aceternity UI:** Aurora Background · Spotlight · Meteors · Bento Grid · Text
Generate Effect · Card Hover Effect · Card Spotlight · Tracing Beam · 3D Card ·
Background Beams · Sparkles

**Magic UI:** Marquee · Border Beam · Shimmer Button · Number Ticker · Blur Fade
· Dock · Retro Grid · Dot &amp; Grid Pattern · Animated Gradient Text · Typing
Animation · Animated Beam · Shine Border

Sparkles is a small canvas implementation rather than the tsparticles-based
original, which keeps the bundle at ~116 kB gzipped.

## Structure

```
src/
├── App.tsx                  section order
├── data/profile.ts          ← all content lives here
├── components/
│   ├── ui/                  Aceternity + Magic UI primitives
│   └── sections/            Hero, About, Skills, Pipeline, Experience,
│                            Projects, Testimonials, Contact, Footer
└── index.css                Tailwind layers + base styles
.github/workflows/deploy.yml build + deploy to Pages
```

## Running it locally (optional)

Not required — the cloud build is the source of truth — but if you want to:

```bash
npm install
npm run dev
```

## Notes

- The site is served from `/Portfolio/`, set as `base` in `vite.config.ts`. If
  you move it to a custom domain or to `abilvj2.github.io`, build with
  `BASE_PATH=/` instead.
- Dark theme only, by design.
- Animations respect `prefers-reduced-motion`.
