"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/constants";

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
                <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground/50 mb-8 font-bold">
                    MY SKILLSET
                </p>
                <div className="flex flex-col items-center overflow-visible">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-none px-4">
                        The Magic <span className="font-extralight italic bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent pr-2">Behind</span>
                    </h2>
                </div>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-20 px-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
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
                        {SKILLS[activeTab as keyof typeof SKILLS]?.map((skill) => (
                            <motion.div
                                key={skill.name}
                                className="group flex flex-col items-center justify-center gap-3 transition-all duration-300 w-20 md:w-24"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative w-8 h-8 md:w-11 md:h-11 flex items-center justify-center bg-transparent"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain mx-auto transition-transform duration-300"
                                    />
                                </motion.div>
                                <p className="font-medium text-[9px] md:text-xs text-muted-foreground group-hover:text-foreground transition-all duration-300 text-center">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
