// "use client";

// import { motion } from "framer-motion";
// import { PERSONAL_INFO } from "@/lib/constants";
// import { useState, useEffect } from "react";
// import { ArrowUp, Cat } from "lucide-react";

// export function Footer() {
//     const [showScrollTop, setShowScrollTop] = useState(false);
//     const currentYear = new Date().getFullYear();

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowScrollTop(window.scrollY > 500);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return (
//         <footer className="relative py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
//             <div className="section-container flex flex-col items-center justify-center gap-6">

//                 {/* Animated Profile Image */}
//                 <motion.div
//                     animate={{
//                         y: [0, -10, 0],
//                     }}
//                     transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                     }}
//                     className="relative w-16 h-16 flex items-center justify-center rounded-full overflow-hidden border-2 border-primary/20"
//                 >
//                     <img
//                         src="/profile.jpg"
//                         alt={PERSONAL_INFO.name}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                             e.currentTarget.src = "https://github.com/ghazi829.png";
//                         }}
//                     />
//                 </motion.div>

//                 {/* Copyright */}
//                 <p className="text-center text-sm text-muted-foreground font-light">
//                     © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
//                 </p>

//             </div>

//             {/* Scroll to Top Button */}
//             {showScrollTop && (
//                 <button
//                     onClick={scrollToTop}
//                     className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 z-40 backdrop-blur-sm"
//                     aria-label="Scroll to top"
//                 >
//                     <ArrowUp className="w-5 h-5" />
//                 </button>
//             )}
//         </footer>
//     );
// }

"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "@/lib/animations/flying skatboard.json";


export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full border-t bg-background pb-10 pt-6">
            <div className="mx-auto overflow-visible pointer-events-none absolute left-1/2 top-0 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background ring-1 ring-border sm:h-24 sm:w-24" aria-hidden="true">
                <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 origin-center flex items-center justify-center">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="w-[80%] h-[80%]"
                    />
                </div>
            </div>
            <div className="container mx-auto flex h-full flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                <p className="text-sm text-muted-foreground leading-none font-light">
                    © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                </p>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 z-40 backdrop-blur-sm"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}
        </footer>
    );
}
