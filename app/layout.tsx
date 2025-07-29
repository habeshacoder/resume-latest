import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adonias Haile - Flutter Developer Portfolio",
  description:
    "Professional Flutter developer specializing in mobile app development, UI/UX design, and backend integration. Based in Addis Ababa, Ethiopia.",
  keywords: "Flutter Developer, Mobile App Development, Dart, Firebase, UI/UX Design, Software Engineer, Ethiopia",
  authors: [{ name: "Adonias Haile" }],
  openGraph: {
    title: "Adonias Haile - Flutter Developer Portfolio",
    description: "Professional Flutter developer specializing in mobile app development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
