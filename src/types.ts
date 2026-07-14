export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Web" | "Mobile" | "AI/Cloud";
  imageUrl: string;
  imageUrls?: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  technologies: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & Devops" | "Soft Skills";
  level: number; // percentage (0-100)
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}
