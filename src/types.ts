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

export interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  category: 'AI & Data Science' | 'Core CS & Java' | 'Languages' | 'Competitive Programming';
  skillsCovered: string[];
  curriculum?: string;
  signatory: string;
  verifyUrl?: string;
  badgeType: string;
  theme: 'scaler' | 'linkedin' | 'hackerrank' | 'codomax' | 'codechef';
  accentColor: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  badgeTier: string;
  metricNumber: string;
  metricLabel: string;
  description: string;
  category: string;
  skills: string[];
  verifyUrl?: string;
  accentColor: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  codechef: string;
}
