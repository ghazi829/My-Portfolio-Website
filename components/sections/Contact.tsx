"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Github, Linkedin, Globe, Instagram, Twitter, Send as Telegram } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form submitted:", formData);
            setSubmitStatus("success");

            setFormData({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => setSubmitStatus("idle"), 3000);
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const contactLinks = [
        { icon: Mail, label: "Email", href: `mailto:${PERSONAL_INFO.email}` },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pir-ghazi-shah" },
        { icon: Github, label: "GitHub", href: "https://github.com/ghazi829" },
        { icon: Twitter, label: "X (Twitter)", href: "#" },
        { icon: Instagram, label: "Instagram", href: "#" },
        { icon: Telegram, label: "Telegram", href: "#" },
    ];

    return (
        <section id="contact" className="section-container bg-muted/30">
            <SectionHeading>Contact Me</SectionHeading>

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side - Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 flex flex-col h-full"
                    >
                        <div>
                            <h3 className="text-xl font-serif mb-8">Details</h3>

                            {/* Contact Links */}
                            <div className="space-y-5">
                                {contactLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-center gap-4 text-foreground/70 hover:text-foreground transition-colors group"
                                    >
                                        <link.icon className="w-5 h-5 flex-shrink-0" />
                                        <span className="text-lg font-light">{link.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="mt-12 pt-8">
                            <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed">
                                Available for SaaS consulting & freelance<br />
                                Pakistan (UTC+5)
                            </p>

                            {/* Book Call Button */}
                            <a href="#" className="inline-block">
                                <button className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                                    Book a 30-min call
                                </button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Send a Message Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 h-full"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-xl font-serif mb-8">Send a message</h3>

                            {/* Name Field */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 font-light"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 font-light"
                                    placeholder="you@company.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/50 font-light"
                                    placeholder="Tell me what you're building..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-sm text-center"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 text-sm text-center"
                                >
                                    Failed to send message.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
