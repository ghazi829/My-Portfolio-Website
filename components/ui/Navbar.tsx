"use client";

import { motion } from "framer-motion";
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
    { name: "Home", href: "#hero", icon: Home },
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
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={cn(
                                "relative p-2 sm:p-3 rounded-full transition-all duration-300 group hover:bg-muted/50 flex-shrink-0",
                                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                            )}
                            aria-label={item.name}
                        >
                            <item.icon className={cn("w-4 h-4 sm:w-5 sm:h-5", isActive && "stroke-[2.5px]")} />

                            {/* Tooltip - Hidden on mobile, visible on group hover for desktop */}
                            <span className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm border border-border/50">
                                {item.name}
                            </span>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeDot"
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                />
                            )}
                        </a>
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
