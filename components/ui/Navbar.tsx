"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Home,
    User,
    Briefcase,
    Cpu,
    Monitor,
    GraduationCap,
    MessageSquare,
    BadgeCheck,
    Send
} from "lucide-react";

const NAV_ITEMS = [
    { name: "Hero", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Projects", href: "#projects", icon: Monitor },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: BadgeCheck },
    { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
    { name: "Contact", href: "#contact", icon: Send }

];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        // Scroll active detection
        const handleScroll = () => {
            const sections = NAV_ITEMS.map((item) => item.href.substring(1));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - 100, // Offset for top padding
                behavior: "smooth",
            });
            setActiveSection(href.substring(1));
        }
    };

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed bottom-8 inset-x-0 mx-auto z-50 w-fit"
        >
            <div className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full glass border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg ring-1 ring-border/20 max-w-[calc(100vw-2rem)] overflow-x-auto hide-scrollbar">

                {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    const isHovered = hoveredItem === item.name;

                    return (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-colors duration-300 group flex-shrink-0 z-10",
                                isActive || isHovered ? "text-white" : "text-muted-foreground hover:text-white"
                            )}
                            aria-label={item.name}
                        >
                            {/* Dark Circular Background */}
                            <AnimatePresence>
                                {(isActive || isHovered) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute inset-0 bg-[#1a1a1a] dark:bg-white/10 rounded-full -z-0"
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </AnimatePresence>

                            <item.icon className="w-5 h-5 relative z-10" />

                            {/* Bubble Tooltip */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                                        exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                                        className="hidden sm:flex absolute -top-14 left-1/2 flex-col items-center pointer-events-none z-[60]"
                                    >
                                        <div className="bg-white text-black px-4 py-1.5 rounded-2xl text-[10px] font-bold tracking-widest uppercase shadow-xl whitespace-nowrap">
                                            {item.name}
                                        </div>
                                        {/* Triangular Tail */}
                                        <div className="w-2.5 h-2.5 bg-white rotate-45 -mt-1.5 shadow-sm" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    );
                })}

                {/* Divider */}
                <div className="w-px h-6 bg-border mx-1 sm:mx-2 flex-shrink-0" />

                {/* Theme Toggle */}
                <div className="p-1 flex-shrink-0">
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    );
}
