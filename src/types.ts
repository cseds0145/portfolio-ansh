export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
    isPrimary?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  features: string[];
  status: 'Completed' | 'In Progress' | 'Conceptual';
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string;
  accentColor?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  current: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  badgeType: string;
  description: string;
  metrics: string;
  verifyUrl?: string;
  icon: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  codechef: string;
}
