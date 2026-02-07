"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/lib/constants";
import { Code, Rocket, Sparkles } from "lucide-react";

const features = [
    {
        icon: Code,
        title: "Clean Code",
        description: "Writing maintainable and scalable code",
    },
    {
        icon: Rocket,
        title: "Fast Performance",
        description: "Optimized for speed and efficiency",
    },
    {
        icon: Sparkles,
        title: "Modern Design",
        description: "Beautiful UX with best practices",
    },
];

export function About() {
    return (
        <section id="about" className="section-container bg-muted/30">
            <SectionHeading>About Me</SectionHeading>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card mb-12"
                >
                    <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
                        {PERSONAL_INFO.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card text-center hover:scale-105 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
