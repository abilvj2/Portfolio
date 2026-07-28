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
    "I design intelligent, automated and scalable solutions across healthcare, enterprise and consulting domains. Much of that is robotic process automation — Robot Framework, UiPath and the Microsoft Power Platform — turning manual workflows into bots that run without human intervention.",
    "At Creative Solutions in Healthcare I build data pipelines, optimise SQL systems, and develop apps, business process flows and Azure AI tools that support critical decision-making. Earlier, at Infosys, I led end-to-end development of AI-enabled and cloud-native solutions for global clients, and at HP I built enterprise dashboards and data automation for operational visibility.",
    "I'm passionate about building smart systems that automate processes, enhance user experiences, and solve real-world problems through data and innovation.",
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Creative Solutions in HealthCare",
      period: "Jul 2024 — Present",
      location: "Fort Worth, TX",
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
      role: "Graduate Research Assistant — Cross-Platform Developer",
      company: "Computer Science & Engineering, UT Arlington",
      period: "Oct 2022 — May 2024",
      location: "Arlington, TX",
      description:
        "Research and development on robotic process automation for medical workflows, alongside community-facing web platforms.",
      highlights: [
        "Built robotic process automation with Robot Framework that achieved a 70x reduction in human input for medical form processing, integrating Google Cloud Document AI",
        "Created an interactive web portal in Django as the end-user platform for the automation, contributing to community projects",
        "Applied advanced image and sensory data interpretation in support of community-benefit research",
      ],
      tags: ["Robot Framework", "RPA", "Google Document AI", "Django", "TensorFlow"],
    },
    {
      role: "Automation & Data Visualization Architect (Intern)",
      company: "HP (Hewlett Packard)",
      period: "May 2023 — Aug 2023",
      location: "Houston, TX",
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
      period: "Oct 2019 — Jun 2022",
      location: "Mysuru, Karnataka, India",
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
    {
      role: "Full Stack Software Development Intern",
      company: "PixDynamics",
      period: "Jun 2018 — Aug 2018",
      location: "Kochi, India",
      description:
        "Company projects spanning MVP development, machine learning practice and digital marketing tooling.",
      highlights: [
        "Delivered against an MVP model across .NET and ASP.NET MVC projects",
        "Applied early machine learning practices in a commercial setting",
      ],
      tags: ["ASP.NET MVC", ".NET", "Machine Learning"],
    },
    {
      role: "Software Development Intern",
      company: "VIPoint",
      period: "Jun 2016 — Jul 2016",
      location: "Infopark, Kochi, India",
      description:
        "Server-side development and Linux fundamentals, covering the basics of web application development.",
      highlights: [
        "Server-side coding and Linux administration fundamentals",
        "Introduction to SQL and full web application development",
      ],
      tags: ["SQL", "Linux", "Web Development"],
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
      school: "Viswajyothi College of Engineering & Technology",
      period: "May 2019",
      note: "APJ Abdul Kalam Technological University · Kerala, India",
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
    { label: "Less manual input via RPA", value: 70, suffix: "×" },
    { label: "Employees served by AI agents", value: 500, suffix: "+" },
    { label: "Engineers trained", value: 30, suffix: "+" },
  ],

  projects: [
    {
      title: "Robot Framework Insurance Automation",
      blurb:
        "End-to-end insurance claim processing with no human intervention: the bot extracts insurance information from the web, performs the calculations, then fills clinic software and billing PDFs automatically.",
      tags: ["Robot Framework", "RPA", "Google Cloud", "Document AI"],
      href: "https://github.com/abilvj2/RoboCorp",
      featured: true,
      year: "2023",
      accent: "from-teal-500/25 to-emerald-500/10",
    },
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
      featured: false,
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
      title: "Emotional Analysis from Text",
      blurb:
        "An emotion detection system that processes free text and classifies the sentiment behind it — an early undergraduate dive into NLP.",
      tags: ["NLP", "Sentiment Analysis", "Python"],
      href: "https://github.com/abilvj2",
      featured: false,
      year: "2018",
      accent: "from-purple-500/20 to-violet-500/10",
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
      issuer: "Microsoft · Jun 2022",
    },
    {
      title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
      issuer: "Microsoft · Dec 2021",
    },
    {
      title: "Introduction to Artificial Intelligence with Python",
      issuer: "HarvardX CS50 · Aug 2020",
    },
    {
      title: "Introduction to TensorFlow for AI, ML and Deep Learning",
      issuer: "Coursera · May 2020",
    },
    {
      title: "Image Classification with CNNs using Keras",
      issuer: "Coursera · May 2020",
    },
  ],

  /** Talks and community work. */
  speaking: [
    {
      title: "Power Platform and Copilot Agents",
      event: "Arlington Microsoft Fabric User Group",
      date: "May 2026",
      blurb:
        "Invited speaker for a hands-on session on building Power Automate flows, and how the broader Power Platform serves as the action engine for custom Copilot Agents — plus an introduction to AI agents.",
    },
  ],

  volunteering: [
    {
      role: "Volunteer",
      org: "FIFA World Cup 2026",
      note: "Part of the volunteer team for the tournament.",
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
