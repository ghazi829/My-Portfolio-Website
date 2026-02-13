"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Github, Monitor, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Projects() {
    const [showAll, setShowAll] = useState(false);

    // Only slice if there are more than 6 projects
    const displayedProjects = PROJECTS.length > 6 && !showAll
        ? PROJECTS.slice(0, 6)
        : PROJECTS;

    return (
        <section id="projects" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground/50 mb-8 font-bold">
                    SELECTED WORKS
                </p>
                <div className="flex flex-col items-center overflow-visible">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white tracking-tighter leading-none px-4">
                        Code <span className="font-serif font-light italic gradient-text pr-2">Into Projects</span>
                    </h2>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <Card className="h-full flex flex-col group p-0 overflow-hidden border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                {/* Project Image Container */}
                                <div className="relative h-56 overflow-hidden bg-muted">
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-600/10">
                                            <Monitor className="w-12 h-12 text-primary/30" />
                                        </div>
                                    )}
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />

                                    {project.status === "in-progress" && (
                                        <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-md text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            In Progress
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors duration-300 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                        {project.tech.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 text-[10px] font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border/50"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors duration-300"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-white transition-colors duration-300"
                                            >
                                                <Github className="w-3.5 h-3.5 mr-1.5" />
                                                Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Show More/Less Button - Only if more than 6 projects exist */}
            {PROJECTS.length > 6 && (
                <div className="flex justify-center mt-16">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setShowAll(!showAll)}
                        className="group relative overflow-hidden transition-all duration-300 hover:border-primary/50 text-xs font-bold tracking-[0.2em] uppercase py-6 px-10 rounded-full glass-card hover:bg-primary/5 hover:text-neutral-900 dark:hover:text-white"
                    >
                        <span className="flex items-center gap-2 relative z-10 transition-transform duration-300 group-active:scale-95">
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                                </>
                            ) : (
                                <>
                                    Show More Work <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                                </>
                            )}
                        </span>
                    </Button>
                </div>
            )}
        </section>
    );
}
