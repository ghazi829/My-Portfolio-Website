"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/constants";

const tabs = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend & API" },
    { key: "database", label: "Database" },
    { key: "realtime", label: "Real-time" },
    { key: "devops", label: "DevOps" },
];

export function Skills() {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <section id="skills" className="py-24">
            {/* Heading */}
            <div className="text-center mb-14">
                <p className="text-sm tracking-widest text-gray-400 uppercase">
                    My Skillset
                </p>
                <h2 className="text-5xl font-bold">
                    The Magic <span className="text-pink-500 italic">Behind</span>
                </h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-3 mb-16">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all
              ${activeTab === tab.key
                                ? "bg-black text-white shadow-md"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
                    >
                        {SKILLS[activeTab as keyof typeof SKILLS].map((skill) => (
                            <motion.div
                                key={skill.name}
                                className="flex flex-col items-center gap-4 p-4 transition-all duration-300 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.25, y: -10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-transparent group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.3)] dark:group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain grayscale-[0.6] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </motion.div>
                                <p className="font-medium text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors text-center">
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
