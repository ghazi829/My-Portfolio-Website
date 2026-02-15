"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    children: React.ReactNode;
    subtitle?: string;
    showLine?: boolean;
    className?: string;
}

export function SectionHeading({
    children,
    subtitle,
    showLine = true,
    className,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            {subtitle && (
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 font-medium">
                    {subtitle}
                </p>
            )}
            <h2
                className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4",
                    !className?.includes("gradient-text") && "gradient-text",
                    className
                )}
            >
                {children}
            </h2>
            {showLine && (
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            )}
        </motion.div>
    );
}
