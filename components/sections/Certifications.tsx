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
            <SectionHeading>Certifications</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <Card className="h-full">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Avatar
                                        className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
                                        sx={{ width: 48, height: 48, borderRadius: "12px" }}
                                    >
                                        <BadgeCheck className="w-6 h-6 text-white" />
                                    </Avatar>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                        {cert.date}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
