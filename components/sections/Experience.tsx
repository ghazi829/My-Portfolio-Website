"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/constants";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="section-container bg-muted/30">
            <SectionHeading>Work Experience</SectionHeading>

            <div className="max-w-4xl mx-auto">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative pl-8 pb-12 last:pb-0"
                    >
                        {/* Timeline line */}
                        {index !== EXPERIENCE.length - 1 && (
                            <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600" />
                        )}

                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-white" />
                        </div>

                        <div className="glass-card">
                            <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                            <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                                <span className="flex items-center">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    {exp.company}
                                </span>
                                <span className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {exp.location}
                                </span>
                                <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {exp.duration}
                                </span>
                            </div>

                            <ul className="space-y-2">
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-foreground/80">{responsibility}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
