"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Github, Clock } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="section-container">
            <SectionHeading>Featured Projects</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col group">
                            {/* Project Status Badge */}
                            {project.status && (
                                <div className="mb-4">
                                    <span
                                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.status === "completed"
                                            ? "bg-green-500/20 text-green-600 dark:text-green-400"
                                            : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                                            }`}
                                    >
                                        {project.status === "completed" ? (
                                            "✓ Completed"
                                        ) : (
                                            <>
                                                <Clock className="w-4 h-4 mr-1" />
                                                In Progress
                                            </>
                                        )}
                                    </span>
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground mb-4 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-auto">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        Live Demo
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                                    >
                                        <Github className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
