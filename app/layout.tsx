import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adonias Haile | Full-Stack Mobile & Fintech Engineer",
  description:
    "Production portfolio of Adonias Haile - Full-Stack Mobile & Fintech Engineer specializing in Flutter, Java Spring Boot microservices, WSO2 Micro Integrator, ISO 8583 banking switch rails, Fayda National ID, and Instant Payment Systems (IPS). Based in Addis Ababa, Ethiopia.",
  keywords: [
    "Adonias Haile",
    "Software Engineer",
    "Mobile Engineer",
    "Flutter Developer",
    "Fintech Engineer",
    "Java Spring Boot",
    "WSO2 Micro Integrator",
    "ISO 8583",
    "Fayda National ID",
    "Instant Payment System",
    "Sopra Banking DBS",
    "Eaglelion Systems",
    "Lion International Bank",
    "Bento Developer Portfolio",
  ],
  authors: [{ name: "Adonias Haile", url: "https://github.com/habeshacoder" }],
  openGraph: {
    title: "Adonias Haile | Full-Stack Mobile & Fintech Engineer",
    description:
      "Full-stack mobile & backend fintech software engineer. Building resilient banking platforms, digital wallets, and high-performance cross-platform applications.",
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="font-sans bg-[#FDFCF8] text-[#1C1917] antialiased selection:bg-[#1C1917] selection:text-white min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
