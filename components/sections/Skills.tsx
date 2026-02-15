"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tabs = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend & Database" },
    { key: "realtime", label: "Real-time" },
    { key: "devops", label: "DevOps" },
    { key: "ai", label: "AI/ML" },
];

export function Skills() {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <section id="skills" className="py-24">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <p className="mb-6 text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.5em] text-zinc-500">
                    MY SKILLSET
                </p>
                <div className="flex flex-col items-center overflow-visible">
                    <h2 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 leading-[0.9] select-none text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
                        <span className="font-sans font-bold tracking-tight text-zinc-900 dark:text-white">
                            The Magic
                        </span>
                        <span className="font-serif italic font-light tracking-tight bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                            Behind
                        </span>
                    </h2>
                </div>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-20 px-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm font-medium transition-all duration-300
              ${activeTab === tab.key
                                ? "bg-[#0f172a] text-white shadow-xl scale-105"
                                : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Skills Container */}
            <div className="max-w-6xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap justify-center gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-10 max-w-3xl mx-auto"
                    >
                        {SKILLS[activeTab as keyof typeof SKILLS]?.map((skill) => {
                            const isInvertedInDark = ["Next.js", "Express.js", "Socket.io", "GitHub", "Vercel", "n8n"].includes(skill.name);
                            return (
                                <motion.div
                                    key={skill.name}
                                    className="group flex flex-col items-center justify-center gap-3 transition-all duration-300 w-24 md:w-32"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-transparent"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className={cn(
                                                "w-full h-full object-contain mx-auto transition-transform duration-300",
                                                isInvertedInDark && "dark:invert"
                                            )}
                                        />
                                    </motion.div>
                                    <p className="font-medium text-[9px] md:text-xs text-muted-foreground group-hover:text-foreground transition-all duration-300 text-center">
                                        {skill.name}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
