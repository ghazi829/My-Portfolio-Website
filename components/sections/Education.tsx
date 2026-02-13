"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap, MapPin, TrendingUp } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground/50 mb-8 font-bold">
                    ACADEMIC JOURNEY
                </p>
                <div className="flex flex-col items-center overflow-visible">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white tracking-tighter leading-none px-4">
                        Educational <span className="font-serif font-light italic bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent pr-2">Background</span>
                    </h2>
                </div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4">
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group mb-6 last:mb-0"
                    >
                        {/* Card Container - Removed heavy black tint */}
                        <div className="glass-card rounded-[2.5rem] p-6 sm:p-8 transition-all duration-500 hover:bg-background/40 shadow-2xl overflow-hidden">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">

                                {/* Logo Wrapper - Blue/Indigo Gradient to match Certifications */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-white/10">
                                        <GraduationCap className="w-10 h-10 text-white" />
                                    </div>
                                </div>

                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                                        {edu.degree}
                                    </h3>

                                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-muted-foreground/80 font-medium mb-6">
                                        <div className="flex items-center">
                                            <GraduationCap className="w-4 h-4 mr-2 text-primary/70" />
                                            {edu.institution}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-primary/70" />
                                            {edu.location}
                                        </div>
                                    </div>

                                    {/* Status Pill - Matching Blue Theme */}
                                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-900/40 border border-blue-500/20 text-blue-400 font-bold text-sm tracking-wide">
                                        <TrendingUp className="w-4 h-4 mr-2" />
                                        {edu.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
