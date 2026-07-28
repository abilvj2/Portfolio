/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO UPDATE THE WHOLE SITE.
 *
 *  Everything rendered on the portfolio reads from here — no component needs to
 *  be touched to change copy, projects, skills or links.
 *
 *  Contact details are deliberately limited to LinkedIn, GitHub and the Google
 *  Form. The email address and phone number from the résumé are NOT published
 *  here, so they cannot be scraped off the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Abil Varkichan Jose",
  shortName: "Abil",
  role: "AI Engineer",
  roles: [
    "AI Engineer",
    "Intelligent Automation Engineer",
    "RPA Developer",
    "LLM & RAG Developer",
    "Software Engineer",
  ],
  location: "Dallas, TX",
  avatar: "https://avatars.githubusercontent.com/u/37629877?v=4",

  tagline:
    "Software engineer with 7+ years building production Python applications, intelligent automation and AI-powered solutions across healthcare and enterprise environments.",

  summary: [
    "Much of my work is intelligent automation: robotic process automation with UiPath, Robot Framework and the Microsoft Power Platform, taking manual enterprise workflows and turning them into attended and unattended bots that run unsupervised.",
    "That now runs on top of the full AI development lifecycle — data ingestion through deployment and monitoring — building Large Language Model applications, Retrieval-Augmented Generation systems and generative AI agents on Azure and Microsoft Copilot Studio.",
    "That sits on a foundation of traditional machine learning with TensorFlow, PyTorch and Scikit-learn, plus the engineering around it: RESTful APIs, containerised deployment with Docker and Kubernetes, and CI/CD.",
    "Most of my recent work is HIPAA-aligned healthcare data serving 500+ users, where correctness and access control matter as much as model quality.",
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Creative Solutions in HealthCare",
      period: "Jul 2024 — Present",
      location: "Texas",
      description:
        "Building AI agents and data infrastructure over enterprise healthcare data, with HIPAA-aligned handling of PHI throughout.",
      highlights: [
        "Engineered and deployed AI-powered agents on Microsoft Copilot Studio and Azure OpenAI, applying retrieval-augmented generation over enterprise healthcare data to automate knowledge workflows for 500+ employees",
        "Designed and maintained data pipelines on Microsoft Fabric for ingestion, processing and transformation of large healthcare datasets, delivering real-time analytics and cutting turnaround time by 5 hours",
        "Built Python and C# services with RESTful API integrations connecting Power Platform applications, SharePoint and SQL Server, and monitored performance and reliability of deployed APIs and pipelines in production",
        "Designed and optimised 3+ SQL databases with role-based access control via Azure Entra ID, ensuring HIPAA-aligned handling of PHI while improving query performance for high-volume applications",
      ],
      tags: ["Azure OpenAI", "RAG", "Copilot Studio", "Microsoft Fabric", "C#", "Python"],
    },
    {
      role: "Intelligent Automation & Data Visualization Architect (Intern)",
      company: "HP (Hewlett Packard)",
      period: "May 2023 — Aug 2023",
      location: "United States",
      description:
        "Enterprise analytics and reporting governance across Finance and IT, alongside an S/4HANA deployment.",
      highlights: [
        "Built enterprise Power BI dashboards for business analytics, operational metrics and platform performance, delivering real-time visibility to 100+ stakeholders",
        "Spearheaded a reporting roadmap and governance process with IT, Finance and data partners, aligning with S/4HANA deployment and stabilisation",
        "Engineered analytics metrics and KPIs using generative AI (GPT, Power Virtual Agents), mining AR, AP, T&E and Payroll data via Webi, Celonis, SQL and Teradata",
      ],
      tags: ["Power BI", "Generative AI", "Celonis", "Teradata", "S/4HANA"],
    },
    {
      role: "Senior Software Engineer",
      company: "Infosys Ltd",
      period: "Oct 2019 — May 2022",
      location: "Mysuru, India",
      description:
        "Led automation and full-stack delivery for financial-services clients, and mentored the wider practice.",
      highlights: [
        "Led a team developing AI-enabled automation solutions and bots for financial-services clients, improving production efficiency by 50%+ in the client business environment",
        "Developed full-stack applications in React.js, Redux and Python; built computer vision and deep learning backends with Python and OpenCV, deploying on Azure App Service",
        "Built desktop and web automation integrating Google Drive APIs with end-to-end testing, reducing processing time from 60 to 5 minutes; automated Oracle Cloud journal creation and optimised SQL calls for 5x faster execution",
        "Trained 30+ associates on Power Platform; served as Scrum Master and Business Analyst, driving Canvas and Model-Driven app development",
      ],
      tags: ["React.js", "Python", "OpenCV", "Azure", "Power Platform", "RPA"],
    },
  ],

  education: [
    {
      degree: "M.S. Computer Science",
      school: "University of Texas at Arlington",
      period: "May 2024",
      note: "Arlington, TX",
    },
    {
      degree: "B.Tech Computer Science",
      school: "APJ Abdul Kalam Technological University",
      period: "May 2019",
      note: "India",
    },
  ],

  skills: [
    {
      group: "Generative AI & LLM",
      items: [
        "Large Language Models",
        "Retrieval-Augmented Generation",
        "Generative AI Agents",
        "LangChain",
        "Pydantic AI",
        "Microsoft Copilot Studio",
        "Agent Orchestration",
        "Prompt Engineering",
        "OpenAI / Azure OpenAI API",
        "Function Calling / Tool Use",
      ],
    },
    {
      group: "ML & Deep Learning",
      items: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "NLP",
        "Computer Vision",
        "CNNs",
        "Neural Networks",
      ],
    },
    {
      group: "Intelligent Automation & RPA",
      items: [
        "UiPath",
        "Robot Framework",
        "Power Automate",
        "Power Apps (Canvas & Model-Driven)",
        "Power Virtual Agents",
        "Attended & Unattended Bots",
        "Desktop & Web Automation",
        "API-Driven Automation",
        "Document Processing (Textract, Document AI)",
        "Process Mining (Celonis)",
        "End-to-End Test Automation",
      ],
    },
    {
      group: "Cloud & DevOps",
      items: [
        "Azure OpenAI",
        "Azure Entra ID",
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "CI/CD",
      ],
    },
    {
      group: "APIs & Web",
      items: [
        "RESTful APIs",
        "FastAPI",
        "Flask",
        "Django",
        "Node.js",
        "React",
        "Angular",
        "Spring Boot",
        "MERN",
      ],
    },
    {
      group: "Data & Big Data",
      items: [
        "Data Pipelines / ETL",
        "Microsoft Fabric",
        "Power BI",
        "Apache Spark",
        "Hadoop",
        "Kafka",
        "Scala",
        "Tableau",
        "Alteryx",
      ],
    },
    {
      group: "Databases & Methods",
      items: [
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Agile",
        "Scrum",
        "Kanban (Jira)",
      ],
    },
    {
      group: "Languages",
      items: [
        "Python",
        "C# / .NET",
        "JavaScript",
        "TypeScript",
        "Java",
        "C / C++",
        "SQL",
        "VBA",
        "HTML/CSS",
      ],
    },
  ],

  proficiency: [
    { label: "Intelligent automation & RPA", value: 94 },
    { label: "Python & production services", value: 94 },
    { label: "LLM apps, RAG & AI agents", value: 90 },
    { label: "Power Platform & workflow orchestration", value: 92 },
    { label: "Data pipelines & SQL", value: 88 },
    { label: "Cloud (Azure / AWS / GCP)", value: 86 },
  ],

  stats: [
    { label: "Years of experience", value: 7, suffix: "+" },
    { label: "Employees served by AI agents", value: 500, suffix: "+" },
    { label: "Efficiency gain delivered", value: 50, suffix: "%" },
    { label: "Engineers trained", value: 30, suffix: "+" },
  ],

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
      title: "GCP Traffic Sign Classifier",
      blurb:
        "A convolutional neural network in Keras/TensorFlow that classifies traffic sign images with high accuracy, deployed on Google Cloud Platform for real-time recognition.",
      tags: ["TensorFlow", "Keras", "CNN", "GCP"],
      href: "https://github.com/abilvj2/GCP-Traffic-Signal-Classifier",
      featured: true,
      year: "2020",
      accent: "from-sky-500/25 to-cyan-500/10",
    },
    {
      title: "Face Recognition Browser",
      blurb:
        "A privacy-focused browser gated by real-time face recognition — continuously verifies the operator with OpenCV and locks the session the moment an unrecognised face appears.",
      tags: ["OpenCV", "Face Recognition", "Python", "Security"],
      href: "https://github.com/abilvj2/Face-enabled-Browser",
      featured: true,
      year: "2019",
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

  awards: [
    {
      title: "Best People's Choice Intern Award",
      issuer: "HP (Hewlett Packard)",
      year: "2023",
      note: "Business impact across global HP interns.",
    },
    {
      title: "Project Excellence Award",
      issuer: "Infosys — Microsoft Business Application Practice",
      year: "",
      note: "Recognised for innovative solutions.",
    },
  ],

  certifications: [
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
    },
    {
      title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
      issuer: "Microsoft",
    },
    {
      title: "AI with Python",
      issuer: "Harvard",
    },
  ],

  stack: [
    "UiPath",
    "Robot Framework",
    "Power Automate",
    "Power Apps",
    "Python",
    "Azure OpenAI",
    "LangChain",
    "Copilot Studio",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "OpenCV",
    "FastAPI",
    "C# / .NET",
    "React",
    "TypeScript",
    "Microsoft Fabric",
    "Power BI",
    "Docker",
    "Kubernetes",
    "SQL Server",
    "PostgreSQL",
    "Apache Spark",
    "Kafka",
    "AWS",
    "Google Cloud",
    "Celonis",
    "Git",
  ],

  links: {
    github: "https://github.com/abilvj2",
    linkedin: "https://www.linkedin.com/in/abilvjose/",

    /**
     * Google Form used as the contact channel, so the email address is never
     * published on the page for scrapers to harvest.
     *
     * Remember to switch on Responses → ⋮ → "Get email notifications for new
     * responses" in the form itself — that is what delivers submissions to the
     * inbox. Short forms.gle links cannot be embedded; use the long
     * docs.google.com/forms/.../viewform URL.
     */
    contactForm:
      "https://docs.google.com/forms/d/e/1FAIpQLScP-yHy__3dF0or8dHzjW3o5vf984x_JTHXwAWlf4Xmzu0JnQ/viewform",

    /** Set false to show a button instead of embedding the form inline. */
    contactFormEmbed: true,

    resume: "", // Drop a PDF in /public and set e.g. "resume.pdf"
  },
} as const;

export type Profile = typeof profile;
