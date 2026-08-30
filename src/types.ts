export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
  featured?: boolean;
  highlights?: string[];
  domain?: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  category?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description?: string;
}
