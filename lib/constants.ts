import { Project, Skill, Experience, Education, Certification, SocialLink, Testimonial } from "@/types";

// Personal Information
export const PERSONAL_INFO = {
    name: "Pir Ghazi Shah",
    title: "Full Stack Web Developer",
    subtitle: "BS Computer Science Student",
    tagline: "Building fast, scalable web applications with the MERN stack",
    description: `Full Stack Web Developer fluent in MERN Stack (React, Node, Express, MongoDB).
Focused on building fast, scalable web applications with clean code, smooth UX, and modern best practices.`,
    email: "ghazipir1@gmail.com",
    resumeUrl: "https://ghazi829.github.io/Ghazi-Resume/",
};

// Skills
export const SKILLS = {
    frontend: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    ],

    backend: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],

    realtime: [
        { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "WebRTC", icon: "https://www.vectorlogo.zone/logos/webrtc/webrtc-icon.svg" },
    ],

    devops: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    ],

    ai: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
};

// Projects
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Responsive personal portfolio showcasing my work and skills",
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://ghazi829.github.io/My-Portfolio/",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2000",
        status: "completed",
    },
    {
        id: 2,
        title: "Modern PDF Merger",
        description: "Merge multiple PDFs quickly and easily with a clean interface",
        tech: ["React", "Tailwind CSS"],
        liveUrl: "https://mergeflow.netlify.app/",
        imageUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=2000",
        status: "completed",
    },
    {
        id: 3,
        title: "Restaurant Management System",
        description: "Full-stack MERN application with online table booking, admin dashboard, and real-time operations",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2070",
        status: "in-progress",
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
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    },
    {
        id: 2,
        name: "DIT",
        issuer: "GTVC Takht Bhai",
        date: "10/2024",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    },
    {
        id: 3,
        name: "Python",
        issuer: "ITSAWK IT Training Center",
        date: "09/2025",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070",
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
        name: "Email",
        url: `mailto:${PERSONAL_INFO.email}`,
        icon: "Mail",
    },
];

// Footer
export const FOOTER_TEXT = "Open to Full Stack Developer roles and opportunities";

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        text: "Ghazi's ability to bridge the gap between abstract design and high-performance engineering is unmatched. He didn't just build our platform; he architected a scalable future for our product.",
        author: "ALEX THOMPSON",
        role: "CEO, TECHFLOW SAAS",
        stars: 5,
    },
    {
        id: 2,
        text: "Working with Ghazi was a transformative experience for our engineering team. His focus on clean code and cinematic UX brought a level of polish we didn't think was possible.",
        author: "SARAH CHEN",
        role: "PRODUCT LEAD, RUNE AI",
        stars: 5,
    },
    {
        id: 3,
        text: "The attention to detail in the watch integration and bento layouts is just the tip of the iceberg. Ghazi is a senior engineer who truly understands premium digital craftsmanship.",
        author: "JAMES WILSON",
        role: "FOUNDER, ZENITH DIGITAL",
        stars: 5,
    },
];
