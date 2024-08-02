import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "./provider"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sriram Rajagopalan | Fullstack Developer & AI Enthusiast",
    description:
        "Explore the portfolio of Sriram Rajagopalan, a skilled Fullstack Developer specializing in Python, Django, AI, and blockchain technologies. Discover projects, achievements, and skills that drive innovative solutions and continuous learning.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/SRINBG.png" sizes="any" />
                <meta
                    name="description"
                    content="Explore the portfolio of Sriram Rajagopalan, a skilled Fullstack Developer specializing in Python, Django, AI, and blockchain technologies. Discover projects, achievements, and skills that drive innovative solutions and continuous learning."
                />
                <meta
                    name="keywords"
                    content="Fullstack Developer, Python, Django, AI, Machine Learning, Blockchain, Next.js, React"
                />
                <meta
                    property="og:title"
                    content="Sriram Rajagopalan | Fullstack Developer & AI Enthusiast"
                />
                <meta
                    property="og:description"
                    content="Explore the portfolio of Sriram Rajagopalan, a skilled Fullstack Developer specializing in Python, Django, AI, and blockchain technologies. Discover projects, achievements, and skills that drive innovative solutions and continuous learning."
                />
                <meta property="og:image" content="/SRINBG.png" />
                <meta property="og:url" content="https://sriraj66.github.io" />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-DYVDS33J4H"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-DYVDS33J4H');
                    `}
                </Script>
            </body>
        </html>
    );
}
