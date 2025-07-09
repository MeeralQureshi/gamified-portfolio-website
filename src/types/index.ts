export interface InteractiveArea {
  id: string;
  title: string;
  sprite: string;
  route: string | null;
  disabled?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planning';
  color: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
} 