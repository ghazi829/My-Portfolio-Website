import { Project, Skill, Experience, Education, Certification, SocialLink } from "@/types";

// Personal Information
export const PERSONAL_INFO = {
    name: "Pir Ghazi Shah",
    title: "Full Stack Web Developer",
    subtitle: "BS Computer Science Student",
    tagline: "Building fast, scalable web applications with the MERN stack",
    description: `Full Stack Web Developer fluent in MERN Stack (React, Node, Express, MongoDB).
Focused on building fast, scalable web applications with clean code, smooth UX, and modern best practices.`,
    email: "ghazipir1@gmail.com",
    resumeUrl: "/resume.pdf",
};

// Skills
export const SKILLS: Skill[] = [
    // Frontend
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "UI/UX", category: "frontend" },
    { name: "Python", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "REST APIs", category: "backend" },

    // Database
    { name: "MongoDB", category: "database" },
    { name: "MySQL", category: "database" },

    // Tools
    { name: "Git & GitHub", category: "tools" },
    { name: "Debugging", category: "tools" },
    { name: "MS-Office", category: "tools" },
];

// Projects
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Responsive personal portfolio showcasing my work and skills",
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://ghazi829.github.io/My-Portfolio/",
        status: "completed",
    },
    {
        id: 2,
        title: "Modern PDF Merger",
        description: "Merge multiple PDFs quickly and easily with a clean interface",
        tech: ["React", "Tailwind CSS"],
        liveUrl: "https://mergeflow.netlify.app/",
        status: "completed",
    },
    {
        id: 3,
        title: "Restaurant Management System",
        description: "Full-stack MERN application with online table booking, admin dashboard, and real-time operations",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        status: "in-progress",
    },
];

// Experience
export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        position: "Freelancer",
        company: "Remote / Self-Employed",
        location: "Remote",
        duration: "2020",
        responsibilities: [
            "Developed custom websites for diverse clients",
            "Managed full project lifecycle from design to deployment",
            "Ensured responsive and cross-browser compatible designs",
            "Delivered high-quality solutions on time and budget",
        ],
    },
    {
        id: 2,
        position: "MERN Stack Intern",
        company: "DeviQo Software Options",
        location: "Peshawar",
        duration: "2021",
        responsibilities: [
            "Assisted in developing MERN stack applications",
            "Collaborated with senior developers on key features",
            "Learned modern React patterns and state management",
            "Participated in code reviews and team meetings",
        ],
    },
    {
        id: 3,
        position: "Software Engineer (MERN)",
        company: "DeviQo Software Options",
        location: "Peshawar",
        duration: "2022",
        responsibilities: [
            "Led development of core application modules",
            "Optimized database queries for better performance",
            "Implemented secure authentication flows",
            "Mentored new interns and junior developers",
        ],
    },
    {
        id: 4,
        position: "Software Engineer",
        company: "Afaq-Al-Bahr Shipping LLC UAE",
        location: "UAE (Remote)",
        duration: "2023",
        responsibilities: [
            "Developed logistics management systems",
            "Integrated third-party APIs for shipment tracking",
            "Improved application reliability and uptime",
            "Worked in an agile environment with international teams",
        ],
    },
    {
        id: 5,
        position: "Software Engineer",
        company: "Afaq-Al-Bahr Shipping LLC UAE",
        location: "UAE (Remote)",
        duration: "2024",
        responsibilities: [
            "Mentored junior developers and conducted code reviews",
            "Architected scalable backend solutions",
            "Automated deployment pipelines using CI/CD",
            "Enhanced system security and data protection",
        ],
    },
    {
        id: 6,
        position: "Associate Software Engineer",
        company: "Tech Emulsion",
        location: "Peshawar",
        duration: "2025",
        responsibilities: [
            "Developing enterprise-level software solutions",
            "Collaborating with cross-functional teams",
            "Implementing best practices for code quality",
            " contributing to the company's technical growth",
        ],
    },
];

// Education
export const EDUCATION: Education[] = [
    {
        id: 1,
        degree: "BS Computer Science",
        institution: "NUML University",
        location: "Pakistan",
        status: "Ongoing",
    },
];

// Certifications
export const CERTIFICATIONS: Certification[] = [
    {
        id: 1,
        name: "Web Development",
        issuer: "ITSAWK IT Training Center",
        date: "04/2025",
    },
    {
        id: 2,
        name: "DIT",
        issuer: "GTVC Takht Bhai",
        date: "10/2024",
    },
    {
        id: 3,
        name: "Python",
        issuer: "ITSAWK IT Training Center",
        date: "09/2025",
    },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/ghazi829",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pir-ghazi-shah",
        icon: "linkedin",
    },
    {
        name: "Portfolio",
        url: "https://ghazi829.github.io/My-Portfolio/",
        icon: "globe",
    },
];

// Footer
export const FOOTER_TEXT = "Open to Full Stack Developer roles and opportunities";
