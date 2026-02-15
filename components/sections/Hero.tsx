"use client";

import { motion } from "framer-motion";
import { Download, Eye, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

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

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    globe: Globe,
};

export function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-bounce-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-bounce-slow delay-1000" />
            </div>

            <div className="section-container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-muted-foreground mb-4"
                    >
                        Hi there! 👋 I&apos;m
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={item}
                        className="text-6xl sm:text-7xl lg:text-8xl font-bold font-poppins mb-4"
                    >
                        <span className="gradient-text">{PERSONAL_INFO.name}</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        variants={item}
                        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-3"
                    >
                        {PERSONAL_INFO.title}
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="text-lg sm:text-xl text-muted-foreground mb-6"
                    >
                        {PERSONAL_INFO.subtitle}
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        variants={item}
                        className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
                    >
                        {PERSONAL_INFO.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-full sm:w-auto">
                                <Eye className="w-5 h-5 mr-2" />
                                View Resume
                            </Button>
                        </a>
                        <a href="#projects">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                <Eye className="w-5 h-5 mr-2" />
                                See our work
                            </Button>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    {/* <motion.div
                        variants={item}
                        className="flex justify-center gap-6"
                    >
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = iconMap[link.icon as keyof typeof iconMap];
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full glass hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            );
                        })}
                    </motion.div> */}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
