"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Testimonials() {
    return (
        <section id="testimonials" className="section-container py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium"
                >
                    Social Proof
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter"
                >
                    VOICES OF <span className="italic font-serif font-light gradient-text">Collaboration</span>
                </motion.h2>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {TESTIMONIALS.map((testimonial) => (
                    <motion.div
                        key={testimonial.id}
                        variants={item}
                        className="glass-card p-8 flex flex-col justify-between group hover:border-primary/30 transition-all duration-500"
                    >
                        <div>
                            <Quote className="w-10 h-10 text-muted-foreground/20 mb-6 group-hover:text-primary/20 transition-colors duration-500" />
                            <p className="text-sm md:text-base text-slate-900 dark:text-white/90 leading-relaxed mb-8 italic">
                                "{testimonial.text}"
                            </p>
                        </div>

                        <div className="pt-6 border-t border-border/50">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
                                ))}
                            </div>
                            <h4 className="text-xs font-bold tracking-tighter mb-1 uppercase">
                                {testimonial.author}
                            </h4>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                {testimonial.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
