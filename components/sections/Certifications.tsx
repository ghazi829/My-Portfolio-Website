"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CERTIFICATIONS } from "@/lib/constants";
import { BadgeCheck, Calendar } from "lucide-react";
import { Avatar } from "@mui/material";

export function Certifications() {
    return (
        <section id="certifications" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground/50 mb-8 font-bold">
                    OFFICIAL RECOGNITION
                </p>
                <div className="flex flex-col items-center overflow-visible">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white tracking-tighter leading-none px-4">
                        Verified <span className="font-extralight italic bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent pr-2">Achievements</span>
                    </h2>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full overflow-hidden flex flex-col p-0 group border-border/40 hover:border-primary/40 transition-all duration-500">
                            {/* Certificate Image Container */}
                            <div className="relative h-48 overflow-hidden bg-muted">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-indigo-600/20">
                                        <BadgeCheck className="w-12 h-12 text-primary/40" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <BadgeCheck className="w-10 h-10 text-white scale-75 group-hover:scale-100 transition-transform duration-500" />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <Avatar
                                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 shadow-xl"
                                        sx={{ width: 40, height: 40, borderRadius: "10px" }}
                                    >
                                        <BadgeCheck className="w-5 h-5 text-white" />
                                    </Avatar>
                                    <div>
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight group-hover:text-primary transition-colors duration-300">
                                            {cert.name}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/40">
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                        {cert.date}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View Certificate
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
