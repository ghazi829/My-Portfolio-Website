export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    status?: "completed" | "in-progress";
}

export interface Skill {
    name: string;
    icon: string;
}

export interface SkillsData {
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    realtime: Skill[];
    devops: Skill[];
}

export interface Experience {
    id: number;
    position: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    location: string;
    status: string;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
