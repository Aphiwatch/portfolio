// types/portfolio.d.ts
interface Language {
  id: number;
  language: string;
  level: string;
}

interface Skill {
  id: number;
  name: string;
  icon: string; // ชื่อ icon เช่น "FaGolang"
}

interface Education {
  id: number;
  degree: string;
  institute: string;
  duration: string;
}

interface WorkExperience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  subdescription: string;
}

interface ProjectStack {
  iconName: string;
  name: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  duration: string;
  stack: ProjectStack[];
  preview_image: string[];
  repository: string;
  demo: string;
}

export interface PortfolioData {
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
  militaryStatus: string;
  language: Language[];
  skill: Skill[];
  education: Education[];
  workExperience: WorkExperience[];
  project: Project[];
}