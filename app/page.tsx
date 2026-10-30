"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileText,
  Figma,
  ChevronDown,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Layers,
  Globe,
  Smartphone,
  Server,
  Code,
  Download,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  HtmlCssIcon,
  KotlinIcon,
  SwiftIcon,
  FlutterIcon,
  JavaIcon,
  SpringIcon,
  DockerIcon,
  RedisIcon,
  FigmaIcon,
  GooglePlayIcon,
  AppleIcon,
} from "@/components/icons";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");
  const [selectedProjectCategory, setSelectedProjectCategory] = useState("all");

  // All Recommendations from colleagues, leaders, and clients
  const testimonials = [
    {
      name: "Qemer Software Technology",
      role: "Software Development Company",
      image: "/testimonials/qemer tech logo.png",
      content:
        "Adonias is a skilled Full-Stack Mobile Developer, a true all-rounder in the world of mobile applications. He possesses the unique ability to handle every aspect of mobile development, from crafting intuitive user interfaces to building robust server-side infrastructure.",
      url: "https://www.qemertech.com/team/adonias-haile/",
    },
    {
      name: "Addisu Thomas",
      role: "Director, Digital Technology Banking C&P at Lion International Bank",
      initials: "AT",
      avatarBg: "bg-blue-600",
      content:
        "Adonias demonstrated sharp analytical skills and a solid grasp of backend development. Responsible for developing and integrating APIs, writing clean code in Java, and troubleshooting financial platforms. In addition he worked on front-end projects on Android and iOS app upgrades. A fast learner who quickly adapts to new tools and frameworks.",
    },
    {
      name: "Kinfe Guesh",
      role: "Infrastructure Lead and DevSecOps | Platform Engineering | AWS",
      initials: "KG",
      avatarBg: "bg-purple-600",
      content:
        "I've had the pleasure of working closely with Adonias on integration and infrastructure initiatives. He is a strong problem solver who quickly understands concepts beyond development, with a good understanding of the broader IT environment. Combines technical skills with a strong sense of ownership.",
      url: "https://linkedin.com/in/adonias-haile-668312322",
    },
    {
      name: "Natnael Mahetem",
      role: "CTO, Cofounder at Ewenet Communication PLC",
      image: "/testimonials/testi_natan.jpeg",
      content:
        "Adonias consistently impressed me with his exceptional problem-solving, coding skills, and communication abilities throughout his internship and work at Ewenet Communication under my supervision.",
    },
    {
      name: "Mrs. Shwaga Abay (M.Sc.)",
      role: "Lecturer & Project Advisor, BIT Faculty of Computing",
      initials: "SA",
      avatarBg: "bg-amber-600",
      content:
        "He has been my student while pursuing his Bachelor degree in Software Engineering at Bahir Dar Institute of Technology. He has developed his software engineering knowledge and skills to the highest requirements. Enthusiastic, socially matured, and an excellent performer on project work.",
    },
    {
      name: "Ezedin Wangoria",
      role: "Project Manager at EthioClicks",
      initials: "EW",
      avatarBg: "bg-emerald-600",
      content:
        "Adonias worked as a Flutter Mobile Application Developer, key contributor to developing responsive, high-performance apps on Android and iOS. Demonstrated excellent technical expertise, strong problem-solving abilities, and collaborative attitude under tight deadlines.",
    },
    {
      name: "ab-majid-mohaqiq",
      role: "Software Engineer",
      image: "/testimonials/testimonial-abi_majid.jpeg",
      content:
        "Adonias is a resourceful and hardworking person. His ability to speak and express himself in English was excellent. I felt very comfortable when we cooperated together.",
    },
    {
      name: "Amedee Erns Baptiste",
      role: "Bachelor's in Economics | Front-end Dev | AI Enthusiast",
      image: "/testimonials/testi_amedee.jpeg",
      content:
        "Adonias is a good solution thinker. His capacity of analysis to come with a solution is incredible. We worked together on a project and I will totally recommend him to anyone.",
    },
  ];

  // Comprehensive Skills covering Front-End, Mobile, Backend & Fintech, DevOps
  const skills = [
    // FRONT-END & WEB SKILLS (Newly researched and integrated)
    {
      name: "React.js",
      category: "frontend",
      level: "Proficient",
      description: "Component architecture, React Hooks, virtual DOM, built financial loan calculator app at Lion International Bank.",
      icon: <ReactIcon className="w-8 h-8" />,
      tag: "Web Frontend",
    },
    {
      name: "Next.js",
      category: "frontend",
      level: "Proficient",
      description: "Modern SSR/SSG web development, App Router, responsive performance, SEO-optimized interactive web applications.",
      icon: <NextjsIcon className="w-8 h-8" />,
      tag: "Framework",
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: "Advanced",
      description: "Type safety, robust interface modeling, generic types, enterprise maintainability across front-end applications.",
      icon: <TypeScriptIcon className="w-8 h-8" />,
      tag: "Language",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      level: "Advanced",
      description: "Modern asynchronous JavaScript, Promises, DOM APIs, event-driven reactive architectures and web integrations.",
      icon: <JavaScriptIcon className="w-8 h-8" />,
      tag: "Core Web",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Advanced",
      description: "Utility-first modern styling, responsive layouts, dark/light themes, accessible micro-interactions, CSS Grid & Flexbox.",
      icon: <TailwindIcon className="w-8 h-8" />,
      tag: "Styling",
    },
    {
      name: "HTML5 & Semantic Web",
      category: "frontend",
      level: "Advanced",
      description: "Semantic DOM architecture, web accessibility (WCAG a11y), clean structure, modern browser APIs and SEO metadata.",
      icon: <HtmlCssIcon className="w-8 h-8" />,
      tag: "Core Web",
    },
    {
      name: "State Management",
      category: "frontend",
      level: "Advanced",
      description: "Predictable application state flow using Redux Toolkit, React Context, Zustand, BLoC, and Riverpod patterns.",
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      tag: "Architecture",
    },
    {
      name: "Flutter for Web",
      category: "frontend",
      level: "Advanced",
      description: "Unified cross-platform development delivering high-fidelity web apps from a single codebase (e.g. resuCV platform).",
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      tag: "Web / Cross-Platform",
    },

    // MOBILE SKILLS
    {
      name: "Flutter & Dart",
      category: "mobile",
      level: "Expert",
      description: "Production mobile apps across Android & iOS, clean architecture, custom animations, BLoC/Riverpod, banking integrations.",
      icon: <FlutterIcon className="w-8 h-8" />,
      tag: "Cross-Platform",
    },
    {
      name: "Kotlin (Android)",
      category: "mobile",
      level: "Advanced",
      description: "Native Android development, Sopra Banking Software SDK integration, In-App Update API, Anbesa Plus banking app.",
      icon: <KotlinIcon className="w-8 h-8" />,
      tag: "Native Mobile",
    },
    {
      name: "Swift (iOS)",
      category: "mobile",
      level: "Advanced",
      description: "Native iOS development, Sopra DBS banking SDK, MinIO TLS certificate pinning, LibPhoneNumberParser, App Store releases.",
      icon: <SwiftIcon className="w-8 h-8" />,
      tag: "Native Mobile",
    },
    {
      name: "Firebase & FCM",
      category: "mobile",
      level: "Advanced",
      description: "Push notification campaigns across multiple package names, real-time database, analytics, cloud storage.",
      icon: <Smartphone className="w-8 h-8 text-amber-400" />,
      tag: "Mobile Cloud",
    },

    // BACKEND & FINTECH INTEGRATION
    {
      name: "Java",
      category: "backend",
      level: "Advanced",
      description: "Enterprise backend development, object-oriented design, multithreaded services, banking-grade security and reliability.",
      icon: <JavaIcon className="w-8 h-8" />,
      tag: "Backend",
    },
    {
      name: "Spring Boot",
      category: "backend",
      level: "Advanced",
      description: "RESTful microservices, Spring Security, hexagonal architecture, Keycloak JWT, enterprise banking integration APIs.",
      icon: <SpringIcon className="w-8 h-8" />,
      tag: "Backend Framework",
    },
    {
      name: "WSO2 Micro Integrator",
      category: "backend",
      level: "Advanced",
      description: "Middleware integration connecting core banking platforms, digital channels, and external national financial switches.",
      icon: <Server className="w-8 h-8 text-blue-400" />,
      tag: "Enterprise Middleware",
    },
    {
      name: "ISO 8583 / Switch",
      category: "backend",
      level: "Specialist",
      description: "Financial transaction message protocol, TCP socket connectivity with national payment switches and core card systems.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      tag: "Fintech Protocols",
    },
    {
      name: "Fayda National ID & IPS",
      category: "backend",
      level: "Specialist",
      description: "Ethiopian National ID (Fayda) integration and Instant Payment System (IPS) interoperability for banking transactions.",
      icon: <Building2 className="w-8 h-8 text-indigo-400" />,
      tag: "Fintech Integrations",
    },
    {
      name: "Redis",
      category: "backend",
      level: "Proficient",
      description: "High-speed caching, distributed session state, asynchronous message queues for banking SMS services.",
      icon: <RedisIcon className="w-8 h-8" />,
      tag: "In-Memory Store",
    },
    {
      name: "Python & Django",
      category: "backend",
      level: "Proficient",
      description: "Django REST Framework, relational data modeling, backend API services, rapid prototyping and tooling.",
      icon: <Code className="w-8 h-8 text-green-400" />,
      tag: "Backend / Scripts",
    },

    // DEVOPS & TOOLS
    {
      name: "Docker",
      category: "devops",
      level: "Advanced",
      description: "Containerization of microservices and applications, multi-stage builds, container isolation for scalable deployments.",
      icon: <DockerIcon className="w-8 h-8" />,
      tag: "Containers",
    },
    {
      name: "CI/CD & GitHub Actions",
      category: "devops",
      level: "Advanced",
      description: "Automated pipelines, static analysis, unit test automation, and continuous delivery to deployment environments.",
      icon: <Github className="w-8 h-8 text-orange-400" />,
      tag: "Automation",
    },
    {
      name: "Figma (UI/UX)",
      category: "frontend",
      level: "Advanced",
      description: "Full UI/UX design, interactive wireframing, component libraries; designed Alibo Market and Akababi apps.",
      icon: <FigmaIcon className="w-8 h-8" />,
      tag: "UI/UX Design",
    },
    {
      name: "App Store & Play Console",
      category: "devops",
      level: "Expert",
      description: "Over 1 year owning release management, submissions, compliance, phased rollouts, and in-app update APIs for live banking apps.",
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      tag: "Release Management",
    },
  ];

  // Work Experience updated with Lion Bank, Eaglelion, resuCV, Qemer, EthioClicks, Ewenet
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Eaglelion Systems Technology",
      period: "Aug 2026 – Present",
      type: "Full-time",
      location: "Addis Ababa, Ethiopia",
      url: "https://eaglelionsystems.com",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      achievements: [
        "Deliver feature increments, mobile UI enhancements, and defect resolution on the CBE Connect Flutter mobile banking app for Commercial Bank of Ethiopia.",
        "Contribute to Star Pay fintech mobile payment app, building seamless digital wallet interactions and payment flows.",
        "Collaborate on the Dashen Bank paperless digital banking transformation project built with Flutter.",
        "Implement clean architecture, rigorous state management, and optimized rendering performance for high-traffic mobile users.",
      ],
      technologies: ["Flutter", "Dart", "CBE Connect", "Star Pay", "REST APIs", "Clean Architecture", "Git"],
    },
    {
      title: "Software Engineer (Spring Boot | Kotlin | Swift | React)",
      company: "Lion International Bank S.C. (Anbesa Bank)",
      period: "May 2025 – Aug 2026",
      type: "Full-time, Onsite",
      location: "Addis Ababa, Ethiopia",
      url: "https://anbesabank.com",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      achievements: [
        "Built and supported core APIs, middleware integrations, and the production Anbesa Plus mobile banking app (Android & iOS) on Sopra Banking Software (DBS) platform.",
        "Engineered REST APIs and integration services with Java Spring Boot and WSO2 Micro Integrator (MI) for digital banking channels and core banking backbones.",
        "Built the bank's Fayda (Ethiopian National ID) integration and IPS (Instant Payment System) real-time interbank funds transfer rails.",
        "Diagnosed and resolved a critical TCP socket / ISO 8583 payment-switch connection defect in a Spring Boot client.",
        "Integrated Sopra Banking Software SDK in Android (Kotlin) and iOS (Swift); executed SDK upgrades from hotfix.9 to hotfix.12 and resolved iOS TLS certificate pinning failures.",
        "Built responsive loan calculator web frontend using React, and ported transaction receipt logic across Kotlin and Swift with custom iOS LibPhoneNumberParser.",
        "Owned release management on Google Play Console and App Store Connect for over a year, managing submissions, compliance checks, and FCM push notifications.",
      ],
      technologies: [
        "Java Spring Boot",
        "WSO2 MI",
        "Kotlin",
        "Swift",
        "React",
        "ISO 8583",
        "Fayda National ID",
        "IPS",
        "Redis",
        "Keycloak",
        "Docker",
      ],
    },
    {
      title: "Full-Stack Developer (Spring Boot | Flutter | Web)",
      company: "resuCV (Personal Project)",
      period: "2024 – Present",
      type: "Creator & Lead Engineer",
      location: "Remote / Global",
      url: "https://www.resucv.com",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      achievements: [
        "Architected and deployed an end-to-end resume and career document builder platform, live at resucv.com.",
        "Developed a robust Java Spring Boot backend utilizing hexagonal architecture, clean domain boundaries, and dynamic PDF generation.",
        "Engineered responsive multiplatform web, Android, and iOS client apps from a unified Flutter codebase with smooth cross-screen adaptation.",
        "Configured automated containerized deployment pipelines, Docker environments, and cloud hosting.",
      ],
      technologies: ["Flutter Web", "Java Spring Boot", "Hexagonal Architecture", "Docker", "REST APIs", "Tailwind/UI"],
    },
    {
      title: "Flutter Developer and Trainer",
      company: "Qemer Software Technology",
      period: "August 2024 – December 2024",
      type: "Contract",
      location: "Addis Ababa, Ethiopia",
      url: "https://www.qemertech.com",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      achievements: [
        "Developed Mood Ride User App with cloud services, backend REST APIs, Google Maps APIs, and WebSockets.",
        "Integrated secure payment gateways with Chapa and Campay for in-app mobile transactions.",
        "Designed comprehensive UI/UX for Alibo Market using Figma, transforming wireframes into production Flutter interfaces.",
        "Maintained Swift Ride user and driver applications with real-time ride tracking and driver dispatch.",
        "Mentored and trained junior developers in mobile software engineering fundamentals and clean Flutter architecture.",
      ],
      technologies: ["Flutter", "Figma", "WebSockets", "Chapa", "Campay", "Google Maps", "Firebase"],
    },
    {
      title: "Flutter Developer",
      company: "EthioClicks",
      period: "August 2022 – December 2024",
      type: "Part-Time, Remote",
      location: "Remote",
      url: "https://ethioclicks.com",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      achievements: [
        "Developed Swift Delivery mobile application for Android and iOS with live route tracking and package management.",
        "Designed the Akababi application UI from scratch in Figma according to user-centered design principles.",
        "Integrated Firebase real-time database, authentication, cloud storage, and push notifications.",
        "Collaborated in daily agile stand-ups, sprint retrospectives, and peer code reviews in a distributed engineering team.",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps", "Figma", "RESTful APIs", "Git"],
    },
    {
      title: "Flutter Developer",
      company: "Ewenet Communication",
      period: "August 2023 – November 2023",
      type: "Freelance",
      location: "Addis Ababa, Ethiopia",
      url: "https://ewenet.net",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      achievements: [
        "Developed the Arat Killo mobile application integrated with cloud backend APIs and Google services.",
        "Worked closely with backend engineers to define API contracts, payload validations, and error-handling specs.",
        "Implemented clean state management and responsive screen scaling for various Android and iOS screen sizes.",
      ],
      technologies: ["Flutter", "Dart", "REST APIs", "Cloud Services", "Agile Collaboration"],
    },
    {
      title: "Flutter Developer",
      company: "MelaFi Tech",
      period: "August 2024",
      type: "Task-based, One-time",
      location: "Addis Ababa, Ethiopia",
      url: "#",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      achievements: [
        "Maintained legacy mobile app codebase and performed complete architectural refactoring into clean architecture.",
        "Conducted comprehensive code reviews and mentored team on Flutter best practices, memory management, and widget lifecycle.",
        "Employed Scrum methodology using Jira to track sprints and milestone deliverables.",
      ],
      technologies: ["Flutter", "Architecture Refactoring", "Code Reviews", "Jira", "Scrum"],
    },
  ];

  // Featured Projects with all links from project_links.md and resume
  const projects = [
    {
      title: "Anbesa Plus Mobile Banking",
      subtitle: "Lion International Bank Official Banking App",
      category: "mobile",
      description:
        "Flagship mobile banking application for Lion International Bank S.C., powered by Sopra Banking Software (DBS platform). Supports biometric authentication, Ethiopian National ID (Fayda) onboarding, Instant Payment System (IPS), utility bill payments, QR payments, fund transfers, and transaction receipt generation.",
      image: "/project_thumbnails/alibo market.png",
      androidUrl: "https://play.google.com/store/apps/details?id=com.anbesabank.anbesa_plus&pcampaignid=web_share",
      iosUrl: "https://apps.apple.com/us/app/anbesa-plus/id6758233243",
      tags: ["Kotlin", "Swift", "Flutter", "Spring Boot", "WSO2 MI", "ISO 8583", "Fayda ID", "IPS", "Sopra DBS"],
      highlights: "500K+ Downloads • Live on Play Store & App Store • Banking Grade Security",
    },
    {
      title: "CBE Connect",
      subtitle: "Commercial Bank of Ethiopia Mobile Platform",
      category: "mobile",
      description:
        "Strategic mobile banking and customer connectivity application developed at Eaglelion Systems Technology for Commercial Bank of Ethiopia (CBE), delivering seamless financial interaction, account management, and real-time updates.",
      image: "/project_thumbnails/swift delivery.png",
      androidUrl: "https://play.google.com/store/apps/details?id=com.eaglelionsystems.connectethiopia&pcampaignid=web_share",
      tags: ["Flutter", "Dart", "CBE Banking", "REST APIs", "Clean Architecture", "Eaglelion Systems"],
      highlights: "Production Banking App • Active Feature Increments • Enterprise Scale",
    },
    {
      title: "Star Pay",
      subtitle: "Next-Gen Fintech Digital Wallet & Payment Platform",
      category: "mobile",
      description:
        "Modern digital payment solution enabling quick peer-to-peer money transfers, merchant QR payments, airtime purchases, and automated utility settlements with real-time transaction processing.",
      image: "/project_thumbnails/swift ride.png",
      androidUrl: "https://play.google.com/store/apps/details?id=com.eaglelionsystems.starpay&pcampaignid=web_share",
      tags: ["Flutter", "Dart", "Fintech", "Mobile Wallet", "QR Payments", "Eaglelion Systems"],
      highlights: "High-Volume Payments • Secure Gateway • Instant Settlement",
    },
    {
      title: "resuCV Platform",
      subtitle: "Intelligent Resume & Career Platform (Personal SaaS)",
      category: "fullstack",
      description:
        "Full-stack SaaS application built and deployed live at resucv.com. Built with a Java Spring Boot backend using hexagonal architecture and a responsive multiplatform frontend (Web, Android, iOS) engineered from a single Flutter codebase with dynamic PDF generation.",
      image: "/project_thumbnails/alibo market.png",
      liveUrl: "https://www.resucv.com",
      tags: ["Flutter Web", "Java Spring Boot", "Hexagonal Architecture", "Docker", "Cloud", "SaaS"],
      highlights: "Live at resucv.com • Web/Android/iOS from 1 Codebase • PDF Engine",
    },
    {
      title: "GoSkyHy Mobile App",
      subtitle: "Flight, Hotel & Travel Booking Solution",
      category: "mobile",
      description:
        "Feature-rich travel booking mobile application offering travelers real-time flight search, hotel reservations, interactive booking schedules, and cloud service integrations with smooth user journeys.",
      image: "/project_thumbnails/swift ride driverr.png",
      androidUrl: "https://play.google.com/store/apps/details?id=com.goskyhy.mobile&pcampaignid=web_share",
      tags: ["Flutter", "Dart", "Travel Tech", "REST APIs", "State Management"],
      highlights: "Live on Play Store • Seamless Booking UI • Real-time APIs",
    },
    {
      title: "Swift Delivery",
      subtitle: "On-Demand Package Dispatch & Live Courier Tracking",
      category: "mobile",
      description:
        "Delivery service mobile application connecting senders, drivers, and recipients. Built at EthioClicks, featuring real-time GPS tracking on Google Maps, dispatch management, push notifications, and Firebase backend.",
      image: "/project_thumbnails/swift delivery.png",
      androidUrl: "https://play.google.com/store/apps/details?id=com.ecleul.swiftdelivery",
      tags: ["Flutter", "Google Maps SDK", "Real-Time Tracking", "Firebase", "EthioClicks"],
      highlights: "Live GPS Tracking • Real-time Map Updates • Firebase Push",
    },
    {
      title: "Alibo Market",
      subtitle: "E-Commerce Mobile Marketplace & Figma UI/UX",
      category: "mobile",
      description:
        "Comprehensive mobile marketplace with product catalogs, shopping cart, and multi-gateway payment integration (Chapa and Campay). Features a complete custom design system created in Figma and implemented in Flutter.",
      image: "/project_thumbnails/alibo market.png",
      androidUrl: "https://play.google.com/store/apps/details?id=com.aliboMarket.alibo",
      designUrl: "https://www.figma.com/design/XQCmuvZWGZX70BLxMihXgU/Alibo-Market",
      tags: ["Flutter", "Firebase", "Chapa Gateway", "Campay", "Figma UI/UX", "Qemer Tech"],
      highlights: "Figma Design System • Dual Payment Gateways • Clean Architecture",
    },
    {
      title: "Swift Ride & Swift Ride Driver",
      subtitle: "Dual Passenger & Driver Ride-Hailing Platform",
      category: "mobile",
      description:
        "Complete ride-hailing suite comprising separate rider and driver applications. Features real-time driver matching over WebSockets, interactive route navigation, automated fare calculation, and driver earnings dashboard.",
      image: "/project_thumbnails/swift ride.png",
      androidUrl: "https://play.google.com/store/apps/details?id=com.swiftrideuser.flutter",
      driverUrl: "https://play.google.com/store/apps/details?id=com.swiftridedriver.flutter",
      tags: ["Flutter", "WebSockets", "Google Maps SDK", "Driver Fleet", "Real-Time"],
      highlights: "Rider & Driver Apps • WebSocket Dispatch • Turn-by-Turn Navigation",
    },
  ];

  const filteredSkills =
    selectedSkillCategory === "all"
      ? skills
      : skills.filter((s) => s.category === selectedSkillCategory);

  const filteredProjects =
    selectedProjectCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedProjectCategory);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800/80 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left group flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                AH
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Adonias Haile
                </span>
                <span className="hidden sm:block text-[11px] text-gray-400 font-mono tracking-tight">
                  Full-Stack Software Engineer
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "testimonials", label: "Recommendations" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-500/10 shadow-sm"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 bg-gray-900/60 text-gray-200 hover:bg-gray-800 hover:text-white text-xs sm:text-sm font-medium"
                onClick={() =>
                  window.open("/documents/Adonias_Haile_J_Resume-latest.pdf", "_blank")
                }
              >
                <FileText className="w-4 h-4 mr-1.5 text-blue-400" />
                Resume
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 text-xs sm:text-sm"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-800 bg-gray-950/98 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills & Tech" },
                  { id: "experience", label: "Work Experience" },
                  { id: "projects", label: "Featured Projects" },
                  { id: "testimonials", label: "Recommendations" },
                  { id: "contact", label: "Get In Touch" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-gray-300 hover:bg-gray-800/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="pt-4 mt-2 border-t border-gray-800 flex gap-2">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs"
                  size="sm"
                  onClick={() =>
                    window.open("/documents/Adonias_Haile_J_Resume-latest.pdf", "_blank")
                  }
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5" />
                  View Resume
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-200 text-xs"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-6 lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium w-fit mx-auto lg:mx-0 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Software Engineering Roles
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-white">Adonias Haile</span>
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Full-Stack Software Engineer
                  </span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-blue-200/90 font-mono">
                  Fintech Integration • Java Spring Boot • Flutter & Cross-Platform • Modern Frontend
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Software engineer with proven banking and fintech experience. Building secure enterprise{" "}
                <span className="text-white font-medium">Java Spring Boot</span> microservices,{" "}
                <span className="text-white font-medium">WSO2 Micro Integrator</span> middleware,{" "}
                <span className="text-white font-medium">ISO 8583</span> payment switch connectivity, and shipping production{" "}
                <span className="text-white font-medium">Flutter, Kotlin, Swift, & React</span> applications end to end.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 text-base font-semibold shadow-lg shadow-blue-600/30"
                  size="lg"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Featured Work
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-900/60 text-gray-100 hover:bg-gray-800 hover:border-gray-600 px-6 py-2.5 text-base font-medium"
                  size="lg"
                  onClick={() =>
                    window.open("/documents/Adonias_Haile_J_Resume-latest.pdf", "_blank")
                  }
                >
                  <Download className="w-4 h-4 mr-2 text-blue-400" />
                  Latest Resume (PDF)
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/60 px-4 py-2.5 text-base font-medium"
                  size="lg"
                  onClick={() => scrollToSection("testimonials")}
                >
                  <Award className="w-4 h-4 mr-2 text-amber-400" />
                  8 Recommendations
                </Button>
              </div>

              {/* Social Links & Direct Contacts */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 flex-wrap">
                <a
                  href="https://github.com/habeshacoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/adonias-haile-668312322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:adoniashaile1@gmail.com"
                  className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-red-400 hover:border-red-500/50 transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/251989858377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                  title="WhatsApp: +251989858377"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://www.resucv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 text-xs font-medium text-emerald-400 hover:border-emerald-500/50 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  resucv.com (Live SaaS)
                </a>
              </div>
            </div>

            {/* Right Column - Profile & Highlights */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md">
                {/* Decorative glow rings */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl transform -rotate-3" />

                <div className="relative bg-gray-900/90 border border-gray-800 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
                  {/* Photo container */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full overflow-hidden border-4 border-blue-500/40 shadow-xl shadow-blue-500/10 mb-6">
                    <Image
                      src="/profile-img.jpg"
                      alt="Adonias Haile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Profile info caption */}
                  <div className="text-center space-y-1 mb-6">
                    <h3 className="text-xl font-bold text-white">Adonias Haile</h3>
                    <p className="text-sm text-gray-400">Software Engineer & Mobile Specialist</p>
                    <p className="text-xs text-blue-400 flex items-center justify-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Addis Ababa, Ethiopia
                    </p>
                  </div>

                  {/* Mini metrics in hero card */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800/80 text-center">
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-white">3+ Years</div>
                      <div className="text-[11px] text-gray-400">Engineering Exp</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-blue-400">10+ Apps</div>
                      <div className="text-[11px] text-gray-400">Shipped to Stores</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-emerald-400">500K+</div>
                      <div className="text-[11px] text-gray-400">Users Impacted</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-purple-400">3.86 / 4.0</div>
                      <div className="text-[11px] text-gray-400">B.Sc. Degree CGPA</div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg shadow-blue-600/40 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-yellow-300" /> Fintech Certified
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-800/60">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">Banking & Fintech</div>
                <div className="text-xs text-gray-400">Lion Bank • CBE Connect • Star Pay</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">Store Release Lead</div>
                <div className="text-xs text-gray-400">Google Play & App Store Management</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">Full-Stack & Web</div>
                <div className="text-xs text-gray-400">React • Next.js • Spring Boot • Flutter</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">8 Endorsements</div>
                <div className="text-xs text-gray-400">Directors • CTOs • PMs • Academia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-500 hover:text-blue-400 transition-colors animate-bounce p-2"
            aria-label="Scroll to About"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-gray-900/40 border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Background & Expertise
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">About Me</h3>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base">
              <div className="bg-gray-900/60 p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  Engineering Across the Full Spectrum
                </h4>
                <p>
                  I am a Software Engineer holding a Bachelor's Degree in Software Engineering from{" "}
                  <strong className="text-white">Bahir Dar University (BIT Poly Campus)</strong>, graduating with a high distinction{" "}
                  <strong className="text-blue-400">CGPA of 3.86/4.00</strong>. My career spans hands-on enterprise banking platforms, high-traffic consumer mobile apps, and robust web applications.
                </p>
                <p>
                  At <strong className="text-white">Lion International Bank</strong> and <strong className="text-white">Eaglelion Systems Technology</strong>, I architected and integrated mission-critical fintech solutions. This includes integrating the{" "}
                  <strong className="text-white">Ethiopian National ID (Fayda)</strong>, the{" "}
                  <strong className="text-white">Instant Payment System (IPS)</strong>, and diagnosing complex{" "}
                  <strong className="text-white">TCP socket / ISO 8583</strong> payment-switch connection flows.
                </p>
                <p>
                  On the frontend and mobile tier, I specialize in crafting intuitive, accessible, and high-performance interfaces using{" "}
                  <strong className="text-white">React, Next.js, TypeScript, Tailwind CSS, Flutter, Kotlin, and Swift</strong>. I am comfortable bridging the gap between Figma design prototypes and production code, maintaining state with BLoC, Riverpod, and Redux, and managing end-to-end store releases on Google Play and the App Store.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h5 className="font-semibold text-white text-sm">Fintech & Banking Protocols</h5>
                  <p className="text-xs text-gray-400">
                    Hands-on experience with WSO2 Micro Integrator, ISO 8583 switch sockets, Fayda ID validation, IPS real-time transfers, and Sopra DBS Banking SDK.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h5 className="font-semibold text-white text-sm">Cross-Platform & Native Mobile</h5>
                  <p className="text-xs text-gray-400">
                    Production Flutter, native Android (Kotlin), and iOS (Swift) delivery with App Store Connect and Play Console submission ownership.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h5 className="font-semibold text-white text-sm">Modern Frontend Architecture</h5>
                  <p className="text-xs text-gray-400">
                    Responsive, component-driven development with React, Next.js, TypeScript, Tailwind CSS, and Figma UI/UX prototyping.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h5 className="font-semibold text-white text-sm">Clean Architecture & DevOps</h5>
                  <p className="text-xs text-gray-400">
                    Hexagonal architecture, SOLID design principles, Docker containerization, CI/CD with GitHub Actions, and incident debugging.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Credentials Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Education Card */}
              <Card className="bg-gray-900/60 border-gray-800 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Academic Education</h4>
                      <p className="text-xs text-gray-400">Bahir Dar University - BIT</p>
                    </div>
                  </div>

                  <div className="space-y-2 border-l-2 border-blue-500/40 pl-4 ml-2">
                    <h5 className="font-semibold text-white text-sm">
                      B.Sc. in Software Engineering
                    </h5>
                    <p className="text-xs text-gray-400">
                      Faculty of Computing, Bahir Dar Institute of Technology (BIT Poly Campus), Bahir Dar, Ethiopia
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Badge className="bg-blue-900/40 text-blue-300 border-blue-700/50 text-xs">
                        2019 – 2024
                      </Badge>
                      <Badge className="bg-emerald-900/40 text-emerald-300 border-emerald-700/50 text-xs">
                        CGPA: 3.86 / 4.00 (High Distinction)
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Contact Details */}
              <Card className="bg-gray-900/60 border-gray-800 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                    Contact & Professional Details
                  </h4>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-800/40 border border-gray-700/40">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-400" /> Email:
                      </span>
                      <a
                        href="mailto:adoniashaile1@gmail.com"
                        className="text-white hover:text-blue-400 font-mono transition-colors"
                      >
                        adoniashaile1@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-800/40 border border-gray-700/40">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-400" /> Phone & WhatsApp:
                      </span>
                      <a
                        href="https://wa.me/251989858377"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-emerald-400 font-mono transition-colors"
                      >
                        +251 989 858 377
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-800/40 border border-gray-700/40">
                      <span className="text-gray-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" /> Location:
                      </span>
                      <span className="text-white">Addis Ababa, Ethiopia</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-800/40 border border-gray-700/40">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-400" /> Languages:
                      </span>
                      <span className="text-white">English (Fluent), Amharic (Native)</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-800/40 border border-gray-700/40">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Github className="w-4 h-4 text-blue-400" /> GitHub:
                      </span>
                      <a
                        href="https://github.com/habeshacoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline font-mono"
                      >
                        github.com/habeshacoder
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm"
                      onClick={() =>
                        window.open("/documents/Adonias_Haile_J_Resume-latest.pdf", "_blank")
                      }
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Adonias Haile's Resume (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Technical Stack & Competencies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Skills & Technologies
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Comprehensive front-end engineering, cross-platform mobile development, enterprise backend integrations, and DevOps workflows.
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend & Web" },
              { id: "mobile", label: "Mobile (Flutter / Native)" },
              { id: "backend", label: "Backend & Fintech" },
              { id: "devops", label: "DevOps & Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSkillCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedSkillCategory === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900/60 border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-200 group"
              >
                <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-gray-800/80 border border-gray-700/60 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 border-gray-700 text-[10px] px-2 py-0.5"
                      >
                        {skill.level}
                      </Badge>
                    </div>

                    <div className="mb-2">
                      <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-blue-400/80">
                        {skill.tag}
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 sm:py-24 bg-gray-900/40 border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Career Trajectory
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Work Experience</h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Proven track record in enterprise banking software, fintech middleware, and high-impact mobile solutions.
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative border-l-2 border-gray-800 pl-4 sm:pl-8 ml-2 sm:ml-6 space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-900 border-2 border-blue-500 group-hover:scale-125 group-hover:bg-blue-500 transition-all shadow-md shadow-blue-500/30" />

                <Card className="bg-gray-900/80 border-gray-800 hover:border-blue-500/40 transition-all shadow-lg">
                  <CardContent className="p-5 sm:p-7">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap mt-1">
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-400 hover:underline flex items-center gap-1"
                          >
                            <Building2 className="w-3.5 h-3.5" />
                            {exp.company}
                          </a>
                          <span className="text-gray-600">•</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="secondary"
                          className="bg-gray-800/80 text-gray-300 border-gray-700 text-xs px-2.5 py-1"
                        >
                          <Calendar className="w-3 h-3 mr-1 text-gray-400" />
                          {exp.period}
                        </Badge>
                        <Badge className={`${exp.badgeColor} border text-xs px-2.5 py-1 font-medium`}>
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-2.5 my-4">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/80">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:text-white text-[11px] px-2 py-0.5 border border-gray-700/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Shipped & Production Work
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Mobile banking apps, fintech integrations, SaaS solutions, and design systems with direct store and web links.
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Project Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "all", label: "All Projects (8)" },
              { id: "mobile", label: "Mobile Apps (7)" },
              { id: "fullstack", label: "Fullstack & Web (1)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedProjectCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedProjectCategory === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Thumbnail / Header */}
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-800">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-gray-900/90 text-blue-400 border border-blue-500/30 backdrop-blur-md">
                        {project.subtitle}
                      </span>
                    </div>

                    {project.highlights && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-[11px] font-medium text-emerald-400 bg-gray-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30 backdrop-blur-sm inline-block">
                          ★ {project.highlights}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5 sm:p-6 space-y-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-blue-950/40 text-blue-300 border-blue-800/40 text-[11px] px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Actions Footer */}
                <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-2">
                  {project.androidUrl && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium"
                      onClick={() => window.open(project.androidUrl, "_blank")}
                    >
                      <GooglePlayIcon className="w-4 h-4 mr-1.5" />
                      Google Play
                    </Button>
                  )}

                  {project.iosUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 bg-gray-800/60 text-white hover:bg-gray-700 text-xs font-medium"
                      onClick={() => window.open(project.iosUrl, "_blank")}
                    >
                      <AppleIcon className="w-4 h-4 mr-1.5" />
                      App Store
                    </Button>
                  )}

                  {project.driverUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 bg-gray-800/60 text-white hover:bg-gray-700 text-xs font-medium"
                      onClick={() => window.open(project.driverUrl, "_blank")}
                    >
                      <GooglePlayIcon className="w-4 h-4 mr-1.5" />
                      Driver App
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <Globe className="w-4 h-4 mr-1.5" />
                      Visit Live Site
                    </Button>
                  )}

                  {project.designUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-600/40 bg-purple-950/20 text-purple-300 hover:bg-purple-900/30 text-xs font-medium"
                      onClick={() => window.open(project.designUrl, "_blank")}
                    >
                      <Figma className="w-4 h-4 mr-1.5 text-purple-400" />
                      Figma Design
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-24 bg-gray-900/40 border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
              What People Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Feedback from colleagues, leaders, and clients I&apos;ve worked with
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors flex flex-col justify-between"
              >
                <CardContent className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full flex-shrink-0 w-11 h-11 object-cover"
                      />
                    ) : (
                      <div
                        className={`w-11 h-11 rounded-full ${testimonial.avatarBg || "bg-blue-600"} text-white font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-inner`}
                      >
                        {testimonial.initials ||
                          testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-white text-xs sm:text-sm break-words">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2 break-words">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed italic text-xs sm:text-sm break-words">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </CardContent>

                {testimonial.url && (
                  <div className="p-4 sm:p-5 pt-0">
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-xs break-words"
                    >
                      View Source
                      <ExternalLink className="w-3 h-3 ml-1 flex-shrink-0" />
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Let's Connect
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Available for full-time software engineering roles, mobile contract projects, and fintech integrations.
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <Card className="bg-gray-900/70 border-gray-800 text-center hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">Direct Email</h4>
                  <a
                    href="mailto:adoniashaile1@gmail.com"
                    className="text-xs text-gray-300 hover:text-blue-400 break-all transition-colors font-mono"
                  >
                    adoniashaile1@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/70 border-gray-800 text-center hover:border-emerald-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">WhatsApp & Phone</h4>
                  <a
                    href="https://wa.me/251989858377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-300 hover:text-emerald-400 transition-colors font-mono"
                  >
                    +251 989 858 377
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/70 border-gray-800 text-center hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">Location</h4>
                  <p className="text-xs text-gray-300">
                    Addis Ababa, Ethiopia (Open to Remote Globally & Relocation)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Resume & Portfolio Action Box */}
            <div className="bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
              <h4 className="text-xl font-bold text-white">
                Looking for a full-stack engineer who ships end-to-end?
              </h4>
              <p className="text-sm text-gray-300 max-w-xl mx-auto">
                Download my up-to-date resume, review my code repositories on GitHub, or test my live SaaS at resucv.com.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 text-sm"
                  onClick={() =>
                    window.open("/documents/Adonias_Haile_J_Resume-latest.pdf", "_blank")
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 bg-gray-900/80 text-white hover:bg-gray-800 text-sm"
                  onClick={() =>
                    window.open("https://github.com/habeshacoder", "_blank")
                  }
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Repositories
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 bg-gray-900/80 text-white hover:bg-gray-800 text-sm"
                  onClick={() =>
                    window.open("https://linkedin.com/in/adonias-haile-668312322", "_blank")
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2 text-blue-400" />
                  LinkedIn Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/80 bg-gray-950 text-gray-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="font-medium text-white">Adonias Haile</p>
              <p className="text-xs text-gray-500">
                Full-Stack Software Engineer • Flutter & Mobile Specialist • Java Spring Boot
              </p>
              <p className="text-[11px] text-gray-600 mt-1">
                © {new Date().getFullYear()} Adonias Haile. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/habeshacoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/adonias-haile-668312322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:adoniashaile1@gmail.com"
                className="text-gray-400 hover:text-red-400 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/251989858377"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.resucv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                title="resucv.com"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}