"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap, MapPin, TrendingUp } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="section-container bg-muted/30">
            <SectionHeading>Education</SectionHeading>

            <div className="max-w-3xl mx-auto">
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="glass-card hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                                    <span className="flex items-center">
                                        <GraduationCap className="w-4 h-4 mr-2" />
                                        {edu.institution}
                                    </span>
                                    <span className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {edu.location}
                                    </span>
                                </div>
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary font-medium">
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    {edu.status}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
