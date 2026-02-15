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
                    className="mb-6 text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.5em] text-zinc-500"
                >
                    SOCIAL PROOF
                </motion.p>
                <h2 className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 leading-[0.9] select-none text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem]">
                    <span className="font-sans font-black uppercase tracking-[-0.04em] text-zinc-900 dark:text-white">
                        Voices of
                    </span>
                    <span className="font-serif italic font-light tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                        Collaboration
                    </span>
                </h2>
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
                                &quot;{testimonial.text}&quot;
                            </p>
                        </div>

                        <div className="pt-6 border-t border-border/50">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
                                ))}
                            </div>
                            <h4 className="text-xs font-bold tracking-tighter mb-1 uppercase text-neutral-900 dark:text-white">
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
