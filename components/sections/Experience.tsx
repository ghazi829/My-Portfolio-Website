"use client";

import { motion } from "framer-motion";

import { EXPERIENCE } from "@/lib/constants";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="section-container relative">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <p className="mb-6 text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.5em] text-zinc-500">
                    MY JOURNEY
                </p>
                <div className="flex flex-col items-center overflow-visible">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white tracking-tighter leading-none px-4">
                        Professional <span className="font-serif font-light italic bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-transparent pr-2">Experience</span>
                    </h2>
                </div>
            </motion.div>

            <div className="max-w-4xl mx-auto mt-16 px-4">
                <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 pb-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[9px] top-0 flex items-center justify-center w-5 h-5 rounded-full ring-4 ring-background bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                                <Briefcase className="w-3 h-3 text-primary-foreground" />
                            </span>

                            <div className="glass-card p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">
                                {/* Gradient Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {exp.position}
                                        </h3>
                                        <a
                                            href="#" // If there was a company URL
                                            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {exp.company}
                                        </a>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
                                        <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                            <Calendar className="w-3.5 h-3.5 text-primary" />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-1">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground/90 text-sm md:text-base leading-relaxed group/item">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
