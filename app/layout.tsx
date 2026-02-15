import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Pir Ghazi Shah | Full Stack Web Developer",
    description: "Full Stack Web Developer fluent in MERN Stack. Building fast, scalable web applications with clean code and modern best practices.",
    keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "Web Developer", "Pir Ghazi Shah"],
    authors: [{ name: "Pir Ghazi Shah" }],
    creator: "Pir Ghazi Shah",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ghazi829.github.io/My-Portfolio/",
        title: "Pir Ghazi Shah | Full Stack Web Developer",
        description: "Full Stack Web Developer fluent in MERN Stack. Building fast, scalable web applications.",
        siteName: "Pir Ghazi Shah Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pir Ghazi Shah | Full Stack Web Developer",
        description: "Full Stack Web Developer fluent in MERN Stack",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased pb-24 overflow-x-hidden w-full relative`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div className="relative w-full overflow-x-hidden">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
