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
    category: "frontend" | "backend" | "database" | "tools";
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
