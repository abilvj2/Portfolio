/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO UPDATE THE WHOLE SITE.
 *
 *  Everything rendered on the portfolio reads from here — no component needs to
 *  be touched to change copy, projects, skills or links. Values sourced from the
 *  public GitHub profile (github.com/abilvj2) are marked GITHUB. Values marked
 *  TODO are placeholders that could not be read from LinkedIn (it blocks
 *  automated access) — replace them with the real details.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  // GITHUB
  name: "Abil Varkichan Jose",
  shortName: "Abil",
  role: "AI Engineer",
  // Rotating words in the hero headline.
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision Developer",
    "Data Science Practitioner",
    "Automation Engineer",
  ],
  location: "Dallas, TX",
  avatar: "https://avatars.githubusercontent.com/u/37629877?v=4",

  // GITHUB — from the profile README / bio
  tagline:
    "Computer Science graduate with five years of industrial experience, building intelligent systems across artificial intelligence, machine learning, robotic automation and data science.",

  summary: [
    "I design and ship machine learning systems end to end — from framing the problem and preparing the data, through model training and evaluation, to deploying something that holds up under real traffic.",
    "My work spans deep learning for computer vision, generative models, natural language systems and robotic process automation, with cloud deployments on Google Cloud Platform.",
    "I care about the unglamorous parts: reproducible training runs, honest evaluation, and models that stay maintainable after the demo is over.",
  ],

  // TODO — replace with your real LinkedIn experience entries.
  experience: [
    {
      role: "AI / Machine Learning Engineer",
      company: "Add your current employer",
      period: "TODO — e.g. 2023 — Present",
      location: "Dallas, TX",
      description:
        "Placeholder entry. Replace with your LinkedIn role: what you built, the models and stack you used, and the measurable outcome.",
      highlights: [
        "Describe a system you designed or shipped",
        "Name the stack (PyTorch / TensorFlow / GCP / etc.)",
        "Quantify the impact — accuracy, latency, cost or hours saved",
      ],
      tags: ["Machine Learning", "Python", "Cloud"],
    },
    {
      role: "Software Engineer",
      company: "Add a previous employer",
      period: "TODO — e.g. 2020 — 2023",
      location: "TODO",
      description:
        "Placeholder entry. Replace with the earlier role from your LinkedIn profile.",
      highlights: [
        "Systems or services you owned",
        "Automation or data pipeline work",
        "Collaboration and scale of the team",
      ],
      tags: ["Software Development", "Automation", "Data"],
    },
  ],

  // TODO — replace with your real degree(s) and dates.
  education: [
    {
      degree: "M.S. Computer Science",
      school: "Add your university",
      period: "TODO",
      note: "Focus: artificial intelligence and machine learning.",
    },
    {
      degree: "B.Tech / B.E. Computer Science",
      school: "Add your university",
      period: "TODO",
      note: "",
    },
  ],

  // Skill groups rendered as a bento grid + progress meters.
  skills: [
    {
      group: "Machine Learning & AI",
      items: [
        "Deep Learning",
        "Computer Vision",
        "Generative Models / GANs",
        "Natural Language Processing",
        "CNNs",
        "Search & Planning",
        "Model Evaluation",
      ],
    },
    {
      group: "Frameworks & Libraries",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "OpenCV",
        "NumPy",
        "Pandas",
      ],
    },
    {
      group: "Languages",
      items: ["Python", "SQL", "JavaScript", "Java", "Bash"],
    },
    {
      group: "Cloud & Platform",
      items: [
        "Google Cloud Platform",
        "Vertex AI",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "REST APIs",
      ],
    },
    {
      group: "Data & Automation",
      items: [
        "Data Engineering",
        "ETL Pipelines",
        "Robotic Process Automation",
        "Form / Document Processing",
        "Analytics",
      ],
    },
  ],

  // Proficiency meters — tweak the values to match how you'd rate yourself.
  proficiency: [
    { label: "Python & ML tooling", value: 92 },
    { label: "Deep learning (CV / NLP)", value: 88 },
    { label: "Cloud deployment (GCP)", value: 80 },
    { label: "Data engineering & SQL", value: 84 },
    { label: "Automation & scripting", value: 86 },
  ],

  // Headline numbers in the hero.
  stats: [
    { label: "Years of experience", value: 5, suffix: "+" },
    { label: "Projects shipped", value: 15, suffix: "+" },
    { label: "AI/ML repositories", value: 8, suffix: "" },
    { label: "Domains worked in", value: 4, suffix: "" },
  ],

  // GITHUB — real repositories from github.com/abilvj2.
  projects: [
    {
      title: "Face-to-Sketch CycleGAN",
      blurb:
        "A CycleGAN that translates real face photographs into artistic pencil sketches — unpaired image-to-image translation with adversarial and cycle-consistency losses.",
      tags: ["PyTorch", "GANs", "Computer Vision", "Generative AI"],
      href: "https://github.com/abilvj2/Face-to-Sketch-Cycle-GAN",
      featured: true,
      year: "2023",
      accent: "from-fuchsia-500/25 to-violet-500/10",
    },
    {
      title: "GCP Traffic Signal Classifier",
      blurb:
        "A convolutional neural network in Keras/TensorFlow that classifies traffic sign images with high accuracy, deployed on Google Cloud Platform for real-time recognition.",
      tags: ["TensorFlow", "Keras", "CNN", "GCP"],
      href: "https://github.com/abilvj2/GCP-Traffic-Signal-Classifier",
      featured: true,
      year: "2024",
      accent: "from-sky-500/25 to-cyan-500/10",
    },
    {
      title: "Face-Enabled Secure Browser",
      blurb:
        "A security browser gated by real-time face recognition — continuously verifies the operator and locks the session the moment an unrecognised face appears.",
      tags: ["OpenCV", "Face Recognition", "Python", "Security"],
      href: "https://github.com/abilvj2/Face-enabled-Browser",
      featured: true,
      year: "2023",
      accent: "from-emerald-500/25 to-teal-500/10",
    },
    {
      title: "Question Answering AI",
      blurb:
        "An information-retrieval question answering system that ranks documents by tf-idf and extracts the best-matching sentence for a natural language query.",
      tags: ["NLP", "Information Retrieval", "Python"],
      href: "https://github.com/abilvj2/Questions",
      featured: false,
      year: "2022",
      accent: "from-amber-500/25 to-orange-500/10",
    },
    {
      title: "Crossword Constraint Solver",
      blurb:
        "A crossword generator solved as a constraint satisfaction problem — node and arc consistency with backtracking search and heuristic ordering.",
      tags: ["CSP", "Search", "AI", "Python"],
      href: "https://github.com/abilvj2/Crosswords",
      featured: false,
      year: "2022",
      accent: "from-indigo-500/25 to-blue-500/10",
    },
    {
      title: "Degrees of Separation",
      blurb:
        "Breadth-first search over a movie/actor graph to find the shortest chain connecting any two actors — classic search applied to a large real dataset.",
      tags: ["BFS", "Graph Search", "Python"],
      href: "https://github.com/abilvj2/degrees",
      featured: false,
      year: "2020",
      accent: "from-rose-500/25 to-pink-500/10",
    },
    {
      title: "Coding Problems",
      blurb:
        "An ongoing collection of algorithm and data-structure challenges solved across multiple platforms, kept as a training log.",
      tags: ["Algorithms", "Data Structures", "Python"],
      href: "https://github.com/abilvj2/Coding-Problems",
      featured: false,
      year: "2024",
      accent: "from-slate-400/20 to-slate-500/10",
    },
    {
      title: "SQL 50",
      blurb:
        "Solutions to the LeetCode SQL 50 set — window functions, joins, aggregation and query optimisation patterns.",
      tags: ["SQL", "Analytics", "Databases"],
      href: "https://github.com/abilvj2/SQL50",
      featured: false,
      year: "2024",
      accent: "from-cyan-500/20 to-sky-500/10",
    },
  ],

  // Logos rendered in the scrolling tech marquee (text-based, no image deps).
  stack: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "scikit-learn",
    "OpenCV",
    "NumPy",
    "Pandas",
    "Hugging Face",
    "LangChain",
    "SQL",
    "Docker",
    "Google Cloud",
    "Vertex AI",
    "GitHub Actions",
    "FastAPI",
    "Jupyter",
    "Git",
  ],

  // What people say — TODO, replace or delete the section in App.tsx.
  testimonials: [
    {
      quote:
        "Placeholder testimonial. Replace with a real recommendation from your LinkedIn profile, or remove the Testimonials section from src/App.tsx.",
      name: "Add a colleague",
      title: "Their role, Their company",
    },
    {
      quote:
        "Placeholder testimonial. LinkedIn recommendations translate well here — keep them to two or three sentences.",
      name: "Add a manager",
      title: "Their role, Their company",
    },
    {
      quote:
        "Placeholder testimonial. A short line about how you work is more convincing than a long one about what you know.",
      name: "Add a client",
      title: "Their role, Their company",
    },
  ],

  // GITHUB / TODO for email.
  links: {
    github: "https://github.com/abilvj2",
    linkedin: "https://www.linkedin.com/in/abilvjose/",
    email: "abilvj2@gmail.com",
    resume: "", // Drop a PDF in /public and set e.g. "resume.pdf"
  },
} as const;

export type Profile = typeof profile;
