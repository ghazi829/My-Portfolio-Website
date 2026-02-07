"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    children: React.ReactNode;
    className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2
                className={cn(
                    "text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4",
                    "gradient-text",
                    className
                )}
            >
                {children}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>
    );
}
