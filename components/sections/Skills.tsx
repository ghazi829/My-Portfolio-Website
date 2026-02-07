"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/constants";

const categories = {
    frontend: { title: "Frontend", color: "from-blue-500 to-cyan-500" },
    backend: { title: "Backend", color: "from-green-500 to-emerald-500" },
    database: { title: "Database", color: "from-orange-500 to-red-500" },
    tools: { title: "Tools", color: "from-purple-500 to-pink-500" },
};

export function Skills() {
    return (
        <section id="skills" className="section-container">
            <SectionHeading>Skills & Technologies</SectionHeading>

            <div className="max-w-6xl mx-auto space-y-12">
                {Object.entries(categories).map(([key, { title, color }], catIndex) => {
                    const categorySkills = SKILLS.filter((skill) => skill.category === key);

                    return (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold mb-6 flex items-center">
                                <span className={`inline-block w-2 h-8 rounded-full bg-gradient-to-b ${color} mr-3`} />
                                {title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {categorySkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className={`px-5 py-3 rounded-lg glass-card font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent cursor-default`}
                                    >
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
