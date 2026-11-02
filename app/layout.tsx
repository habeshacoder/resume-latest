import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adonias Haile | Software Engineer & Flutter Specialist",
  description:
    "Portfolio of Adonias Haile - Software Engineer specializing in Mobile (Flutter), Backend (Java Spring Boot, WSO2 MI, ISO 8583, Fayda, IPS), and DevOps. Based in Addis Ababa, Ethiopia.",
  keywords: [
    "Adonias Haile",
    "Software Engineer",
    "Flutter Developer",
    "Java Spring Boot",
    "Mobile Engineer",
    "Fintech Integration",
    "WSO2 Micro Integrator",
    "ISO 8583",
    "Fayda National ID",
    "Instant Payment System",
    "Docker",
    "Software Engineer Ethiopia",
  ],
  authors: [{ name: "Adonias Haile", url: "https://adoniashaile.netlify.app" }],
  openGraph: {
    title: "Adonias Haile | Software Engineer & Flutter Specialist",
    description:
      "Software engineer specializing in Flutter mobile development, Java Spring Boot microservices, and fintech integrations.",
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
