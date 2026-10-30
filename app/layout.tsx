import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adonias Haile | Full-Stack Software Engineer & Mobile Specialist",
  description:
    "Portfolio of Adonias Haile - Software Engineer specializing in Mobile (Flutter, Kotlin, Swift), Backend (Java Spring Boot, WSO2 MI, ISO 8583, Fayda, IPS), and Modern Frontend (React, Next.js, TypeScript, Tailwind CSS). Based in Addis Ababa, Ethiopia.",
  keywords: [
    "Adonias Haile",
    "Full-Stack Developer",
    "Flutter Developer",
    "Java Spring Boot",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "Mobile Engineer",
    "Kotlin",
    "Swift",
    "Fintech Integration",
    "WSO2 Micro Integrator",
    "ISO 8583",
    "Software Engineer Ethiopia",
  ],
  authors: [{ name: "Adonias Haile", url: "https://adoniashaile.netlify.app" }],
  openGraph: {
    title: "Adonias Haile | Full-Stack Software Engineer & Mobile Specialist",
    description:
      "Full-stack & mobile software engineer with proven enterprise banking, fintech integration, and modern frontend experience.",
    url: "https://adoniashaile.netlify.app",
    siteName: "Adonias Haile Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/profile-img.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
