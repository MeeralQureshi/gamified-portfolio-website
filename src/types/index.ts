export interface InteractiveArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  position: string;
  route: string | null;
  type: 'bookshelf' | 'pc-terminal' | 'door' | 'tv-console';
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