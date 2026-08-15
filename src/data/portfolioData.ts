import { SkillCategory, Project, EducationItem, CertificateItem, AchievementItem, ContactInfo } from '../types';

export const PERSONAL_INFO = {
  name: "Ansh Prajapati",
  role: "Computer Science Engineering Student & Aspiring AI/Software Developer",
  institution: "ABES Engineering College",
  tagline: "Crafting responsive digital experiences, mastering algorithms, and exploring the frontiers of Generative AI.",
  bio: "I am a Computer Science undergraduate at ABES Engineering College, dedicated to building high-performance software, mastering core data structures, and architecting intelligent AI systems. As an active researcher & technical contributor at the ABES Applied AI Innovation Cell (AAIIC), I combine foundational computer science rigor with modern web engineering.",
  statusText: "Open to Collaborations & Software Engineering Internships",
  resumeDownloadUrl: "#resume-modal",
};

export const CONTACT_DATA: ContactInfo = {
  location: "Banda, Uttar Pradesh, India",
  email: "prajapatiansh6300@gmail.com",
  phone: "+91 6390024309",
  github: "https://github.com/prajapatiansh6300",
  linkedin: "https://www.linkedin.com/in/ansh-prajapati-dev",
  codechef: "https://www.codechef.com/users/anshprajapati",
};

export const HERO_FLOATING_TAGS = [
  { label: "Java", icon: "☕", delay: 0 },
  { label: "DSA", icon: "⚡", delay: 0.2 },
  { label: "GenAI", icon: "✨", delay: 0.4 },
  { label: "Python", icon: "🐍", delay: 0.6 },
  { label: "Tailwind CSS", icon: "🎨", delay: 0.8 },
  { label: "Problem Solving", icon: "🧩", delay: 1.0 },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "ABES Engineering College",
    duration: "2025 – 2029",
    location: "Ghaziabad, Uttar Pradesh, India",
    current: true,
    description: "Building strong foundations in computational theory, data structures, algorithm design, computer systems, and modern AI development frameworks.",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, and Object-Oriented System Architecture.",
      "Active participant in technical symposiums, hackathons, and algorithm problem-solving sprints.",
      "Dedicated member of the ABES Applied AI Innovation Cell (AAIIC)."
    ]
  },
  {
    degree: "Applied AI Research & Technical Contributor",
    institution: "ABES Applied AI Innovation Cell (AAIIC)",
    duration: "2025 – Present",
    location: "ABES Engineering College",
    current: true,
    description: "Contributing to cutting-edge AI initiatives, technical documentation, algorithm benchmarking, and generative AI research papers.",
    highlights: [
      "Authoring technical documentation and reference architectures for AI model experimentation.",
      "Collaborating on agentic workflows and intelligent software integrations.",
      "Organizing internal peer reviews and knowledge sharing on emerging AI tools."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, algorithm design, and application logic.",
    icon: "Code2",
    skills: [
      { name: "Java", tag: "Primary", isPrimary: true },
      { name: "Python", tag: "Certified", isPrimary: true },
      { name: "C", tag: "Foundational", isPrimary: true },
      { name: "JavaScript", tag: "ES6+", isPrimary: true },
      { name: "HTML5", tag: "Semantic" },
      { name: "CSS3", tag: "Modern" }
    ]
  },
  {
    title: "Frameworks & Styling",
    description: "Modern UI tooling for crafting responsive, reactive digital experiences.",
    icon: "Layout",
    skills: [
      { name: "Tailwind CSS", tag: "Utility First", isPrimary: true },
      { name: "React", tag: "Components & State", isPrimary: true },
      { name: "Bootstrap", tag: "Component UI" },
      { name: "Three.js", tag: "3D & WebGL", isPrimary: true }
    ]
  },
  {
    title: "Core Computer Science",
    description: "Algorithmic thinking, optimization, and software architecture principles.",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", tag: "250+ Solved", isPrimary: true },
      { name: "Object-Oriented Programming (OOP)", tag: "Certified Scaler", isPrimary: true },
      { name: "Problem Solving (Basic)", tag: "Certified HackerRank", isPrimary: true },
      { name: "Algorithm Analysis (Big-O)", tag: "Optimization" }
    ]
  },
  {
    title: "Developer Tools & Workflow",
    description: "Version control, development environments, and collaborative engineering.",
    icon: "Terminal",
    skills: [
      { name: "Git", tag: "VCS", isPrimary: true },
      { name: "GitHub", tag: "Collaboration", isPrimary: true },
      { name: "VS Code", tag: "IDE Setup", isPrimary: true },
      { name: "Vite", tag: "Build Tooling" }
    ]
  },
  {
    title: "Emerging Tech & Data Science",
    description: "Machine learning, generative AI tools, and industrial data science practice.",
    icon: "Sparkles",
    skills: [
      { name: "Generative AI Tools", tag: "Certified LinkedIn", isPrimary: true },
      { name: "Data Science", tag: "Internship Codomax", isPrimary: true },
      { name: "Machine Learning", tag: "Foundations", isPrimary: true },
      { name: "Agentic Workflows", tag: "Research" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "hinglish-translator",
    title: "Hinglish Translator Web App",
    subtitle: "Conversational Hindi-English Bilingual Translation Engine",
    description: "An intelligent bilingual translation platform designed to translate seamlessly between standard English, Hindi script, and conversational Romanized Hinglish with real-time UI synchronization.",
    longDescription: "Engineered to bridge the language gap for Indian digital internet users. Features instant language swapping, clean text transformation algorithms, responsive typography, and single-click copy functionality.",
    tags: ["JavaScript", "HTML5", "CSS3", "NLP & Translation", "Bilingual UI"],
    features: [
      "Real-time bidirectional translation between English, Hindi, and Romanized Hinglish.",
      "Instant clipboard copy and responsive text expansion area.",
      "Clean modern glassmorphic interface with low latency input processing.",
      "Mobile-first adaptive layout for fluid mobile keyboard typing."
    ],
    status: "Completed",
    demoUrl: "https://hinglishtranslater.netlify.app/",
    githubUrl: "https://github.com/cseds0145/HinglishTranslator",
    metrics: "Live on Netlify • Zero Latency • Responsive Web App",
    accentColor: "#38BDF8"
  },
  {
    id: "vintage-library",
    title: "Vintage Library Management",
    subtitle: "Interactive Book Cataloging & Inventory Tracking Platform",
    description: "A comprehensive, beautifully styled vintage-themed library management web system featuring live book search, category filtering, inventory status tracking, and book issue/return management.",
    longDescription: "Built with a rich aesthetic and modular architecture to manage collections of books, reader records, and borrowing histories. Includes dynamic DOM state updates, interactive book card views, and clean navigation.",
    tags: ["JavaScript", "HTML5", "CSS3", "Inventory System", "Responsive UI"],
    features: [
      "Comprehensive book cataloging with real-time title and author search.",
      "Dynamic issue/return workflow with status indicators.",
      "Aesthetic vintage-inspired UI styling with responsive layouts.",
      "Zero-dependency performant vanilla web engineering."
    ],
    status: "Completed",
    demoUrl: "https://vintagee-library.netlify.app/",
    githubUrl: "https://github.com/cseds0145/LibraryManagement",
    metrics: "Live on Netlify • Catalog Management • Full UI Workflow",
    accentColor: "#EAB308"
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone Website",
    subtitle: "Responsive Full E-Commerce Client Architecture",
    description: "A feature-complete, pixel-precise responsive e-commerce web platform engineered with vanilla web technologies, showcasing dynamic product carousels, responsive navigation, submenus, and interactive cart calculations.",
    longDescription: "Engineered from scratch to master DOM manipulation, modular CSS layout architecture, and fluid cross-device responsiveness. Features product catalog filtration, dynamic price tallying, interactive banner carousels, and an authentic checkout flow simulation.",
    tags: ["HTML5", "CSS3", "JavaScript", "E-Commerce", "Responsive Design"],
    features: [
      "Dynamic product grid with responsive flexbox & CSS grid layout.",
      "Interactive cart with local storage persistence and live subtotal calculator.",
      "Multi-tier Amazon navigation bar with dropdown menus and search input simulation.",
      "High performance 60fps animations and lightweight zero-dependency structure."
    ],
    status: "Completed",
    demoUrl: "https://prajapatiansh6300.github.io/Amazon-Clone/",
    githubUrl: "https://github.com/prajapatiansh6300/Amazon-Clone",
    metrics: "100% Responsive • Zero Dependencies • Vanilla JS DOM",
    accentColor: "#38BDF8"
  },
  {
    id: "nexus-ai-agents",
    title: "NexusAI Agent Workflow Studio",
    subtitle: "Multi-Agent Generative AI Canvas & Orchestrator",
    description: "An upcoming interactive visual node-based studio for orchestrating multi-agent LLM systems, chaining reasoning workflows, and inspecting live context graphs in real-time.",
    longDescription: "Designed for modern AI engineers to experiment with agent memory, tools execution, and autonomous decision loops. Built on top of React, WebGL visualizers, and stateful agent dispatchers.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Generative AI", "Agentic Systems"],
    features: [
      "Visual drag-and-drop agent pipeline builder with real-time token telemetry.",
      "Zero-latency streaming interface for agent thoughts and tool executions.",
      "Configurable memory models (Episodic, Semantic, and Working Memory).",
      "Exportable agent recipes compatible with modern AI orchestration frameworks."
    ],
    status: "In Progress",
    metrics: "In Active Development • Q3 2026",
    accentColor: "#60A5FA"
  },
  {
    id: "algomatrix-3d",
    title: "AlgoMatrix 3D — Anti-Gravity Visualizer",
    subtitle: "3D Zero-Gravity Data Structures & Algorithm Playground",
    description: "An immersive 3D interactive learning simulator that visualizes complex graph traversals, binary search tree balancings, and sorting algorithms in a zero-gravity spatial environment.",
    longDescription: "Transforms abstract computer science algorithms into intuitive spatial 3D physics simulations. Users can step through BFS, DFS, Dijkstra, and QuickSort with real-time memory and complexity visual feedback.",
    tags: ["Three.js", "React", "WebGL", "DSA", "Algorithms"],
    features: [
      "Spatial 3D particle nodes representing memory pointers and array indices.",
      "Step-by-step interactive time machine debugger for algorithm iterations.",
      "Visual Big-O runtime comparisons with concurrent algorithm racing.",
      "Zero-gravity physics mode where nodes float and tether dynamically."
    ],
    status: "In Progress",
    metrics: "Research & Prototype Stage • 2026",
    accentColor: "#818CF8"
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "scaler-python",
    title: "Python Course for Beginners: Mastering the Essentials",
    subtitle: "Comprehensive Python Programming & Computational Problem Solving",
    issuer: "Scaler Topics",
    issueDate: "11 August 2026",
    category: "Languages",
    skillsCovered: ["Python Core", "Data Structures", "Control Flow", "Functions & Modules", "Algorithms"],
    curriculum: "121 Video Tutorials • 16 Modules • 10 Challenges",
    signatory: "Anshuman Singh (Co-founder SCALER)",
    verifyUrl: "https://www.scaler.com/topics/",
    badgeType: "Certificate of Excellence",
    theme: "scaler",
    accentColor: "#38BDF8"
  },
  {
    id: "linkedin-genai",
    title: "What Is Generative AI?",
    subtitle: "Frontier Artificial Intelligence & Generative Model Foundations",
    issuer: "LinkedIn Learning",
    issueDate: "11 August 2026",
    credentialId: "0dffcfc3dacbdc0d189ea35eec847f7654fe2c0b79d4536dac2535fdbf383ce6",
    category: "AI & Data Science",
    skillsCovered: ["Generative AI Tools", "Artificial Intelligence (AI)", "LLM Architectures", "Prompt Engineering"],
    curriculum: "Course Completion • 1 hour 3 minutes (07:24 AM UTC)",
    signatory: "Shea Hanson (Head of Learning Content Strategy)",
    verifyUrl: "https://www.linkedin.com/learning/certificates/0dffcfc3dacbdc0d189ea35eec847f7654fe2c0b79d4536dac2535fdbf383ce6",
    badgeType: "Verified Professional Credential",
    theme: "linkedin",
    accentColor: "#0A66C2"
  },
  {
    id: "scaler-java-oop",
    title: "Object Oriented Programming in Java Course",
    subtitle: "Enterprise Class Hierarchies, Abstraction, Polymorphism & Design Principles",
    issuer: "Scaler Topics",
    issueDate: "17 May 2026",
    category: "Core CS & Java",
    skillsCovered: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "Interface Design", "Java Memory"],
    curriculum: "16 Video Tutorials • 4 Modules • 4 Challenges",
    signatory: "Anshuman Singh (Co-founder SCALER)",
    verifyUrl: "https://www.scaler.com/topics/",
    badgeType: "Certificate of Excellence",
    theme: "scaler",
    accentColor: "#38BDF8"
  },
  {
    id: "hackerrank-problem-solving",
    title: "Problem Solving (Basic)",
    subtitle: "HackerRank Standardized Algorithmic Competency Certification",
    issuer: "HackerRank",
    issueDate: "19 March 2026",
    credentialId: "9BAE4D89CFD9",
    category: "Competitive Programming",
    skillsCovered: ["Algorithmic Logic", "Data Structures", "Time Complexity", "Array Manipulation", "String Parsing"],
    curriculum: "Passed HackerRank Skill Certification Assessment",
    signatory: "Harishankaran K (CTO, HackerRank)",
    verifyUrl: "https://www.hackerrank.com/certificates/9BAE4D89CFD9",
    badgeType: "Certificate of Accomplishment",
    theme: "hackerrank",
    accentColor: "#00EA64"
  },
  {
    id: "codomax-data-science",
    title: "Data Science Internship",
    subtitle: "Industrial Practical Experience & Applied Analytics",
    issuer: "Codomax Digital Solutions (MSME Certified)",
    issueDate: "09 August 2026",
    credentialId: "CDM/CERT/475013",
    category: "AI & Data Science",
    skillsCovered: ["Data Science Pipelines", "Statistical Modeling", "Applied Analytics", "Data Preprocessing", "Machine Learning"],
    curriculum: "Industrial Internship & Project Completion with Technical Distinction",
    signatory: "Nishanthi (Program Coordinator)",
    verifyUrl: "https://codomax.com/verify",
    badgeType: "Certificate of Completion",
    theme: "codomax",
    accentColor: "#E11D48"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "codechef-silver-250",
    title: "CodeChef Problem Solver — Silver Badge",
    issuer: "CodeChef Competitive Programming Platform",
    badgeTier: "Silver Badge",
    metricNumber: "250+",
    metricLabel: "Algorithmic Problems Solved",
    description: "Awarded for outstanding problem-solving consistency, solving over 250+ algorithm challenges across data structures, sorting, number theory, and search optimization on CodeChef.",
    category: "Competitive Programming",
    skills: ["Data Structures", "Dynamic Programming", "Two Pointers", "Sorting & Searching", "Mathematical Logic"],
    verifyUrl: "https://www.codechef.com/users/anshprajapati",
    accentColor: "#C0C0C0"
  },
  {
    id: "hackerrank-problem-solver",
    title: "HackerRank Certified Problem Solver",
    issuer: "HackerRank Skill Test",
    badgeTier: "Skill Certified",
    metricNumber: "100%",
    metricLabel: "Assessment Score (Certificate ID: 9BAE4D89CFD9)",
    description: "Successfully validated foundational computational problem-solving and algorithmic logic through HackerRank's industry-standard certification examination.",
    category: "Algorithms & Logic",
    skills: ["Logic Formulation", "Edge Case Handling", "Time Complexity Optimization", "Arrays & Hashes"],
    verifyUrl: "https://www.hackerrank.com/certificates/9BAE4D89CFD9",
    accentColor: "#00EA64"
  },
  {
    id: "scaler-dual-excellence",
    title: "Dual Scaler Excellence Awards",
    issuer: "Scaler Topics Academic Tracks",
    badgeTier: "Excellence Honors",
    metricNumber: "137+",
    metricLabel: "Video Modules & Engineering Challenges Completed",
    description: "Earned dual Certificates of Excellence in Python and Object-Oriented Java with 14 comprehensive challenges solved.",
    category: "Software Engineering",
    skills: ["Java OOP Architecture", "Python Core Mastery", "Modular Code Design"],
    verifyUrl: "https://www.scaler.com/topics/",
    accentColor: "#38BDF8"
  }
];
