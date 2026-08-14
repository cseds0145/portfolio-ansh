import { SkillCategory, Project, EducationItem, Achievement, ContactInfo } from '../types';

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
  { label: "Tailwind CSS", icon: "🎨", delay: 0.6 },
  { label: "Problem Solving", icon: "🧩", delay: 0.8 },
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
      { name: "C", tag: "Foundational", isPrimary: true },
      { name: "JavaScript", tag: "ES6+", isPrimary: true },
      { name: "HTML5", tag: "Semantic" },
      { name: "CSS3", tag: "Modern" },
      { name: "Python", tag: "Learning", isPrimary: false }
    ]
  },
  {
    title: "Frameworks & Styling",
    description: "Modern UI tooling for crafting responsive, reactive digital experiences.",
    icon: "Layout",
    skills: [
      { name: "Tailwind CSS", tag: "Utility First", isPrimary: true },
      { name: "Bootstrap", tag: "Component UI" },
      { name: "React", tag: "Components & State", isPrimary: true },
      { name: "Responsive UI", tag: "Mobile-First" }
    ]
  },
  {
    title: "Core Computer Science",
    description: "Algorithmic thinking, optimization, and software architecture principles.",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", tag: "Daily Practice", isPrimary: true },
      { name: "Object-Oriented Programming (OOP)", tag: "Design Principles", isPrimary: true },
      { name: "Problem Solving", tag: "Competitive Logic", isPrimary: true },
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
    title: "Emerging Technologies",
    description: "Pushing into machine intelligence, generative models, and automation.",
    icon: "Sparkles",
    skills: [
      { name: "Generative AI", tag: "Prompt & LLM Arch", isPrimary: true },
      { name: "Machine Learning", tag: "Fundamentals", isPrimary: true },
      { name: "AI Automation", tag: "Workflows" },
      { name: "Autonomous Agents", tag: "Exploration" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
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

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "codechef-bronze",
    title: "CodeChef Problem Solver — Bronze Badge",
    issuer: "CodeChef Competitive Programming Platform",
    badgeType: "Bronze Badge",
    description: "Recognized for consistent algorithmic problem-solving excellence, successfully solving over 50+ curated algorithm problems across 500 difficulty rating practice tracks.",
    metrics: "50+ Solved • 500 Rating Practice Series • Data Structures & Logic",
    verifyUrl: "https://www.codechef.com/users/anshprajapati",
    icon: "Award"
  },
  {
    id: "scaler-oop-java",
    title: "Object-Oriented Programming in Java",
    issuer: "Scaler Topics Certification",
    badgeType: "Professional Certificate",
    description: "Comprehensive certification covering Encapsulation, Polymorphism, Inheritance, Abstraction, SOLID principles, and clean class design in Java.",
    metrics: "Verified Credential • Scaler Topics • Core Java & Design Patterns",
    verifyUrl: "https://www.scaler.com/topics/",
    icon: "ShieldCheck"
  }
];
