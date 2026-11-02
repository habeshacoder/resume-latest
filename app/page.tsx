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
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Search,
} from "lucide-react";
import {
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
  const [skillSearchQuery, setSkillSearchQuery] = useState("");

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialAutoPlay, setIsTestimonialAutoPlay] = useState(true);
  const [testimonialViewMode, setTestimonialViewMode] = useState<"carousel" | "grid">("carousel");

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

  // Comprehensive Skills covering Mobile (Flutter), Backend & Fintech, and DevOps & Tools
  const skills = [
    // MOBILE SKILLS (Flutter & Mobile Architecture)
    {
      name: "Flutter & Dart",
      category: "mobile",
      level: "Expert",
      description:
        "Production mobile apps across Android & iOS, clean architecture, custom animations, BLoC/Riverpod, banking integrations.",
      icon: <FlutterIcon className="w-8 h-8" />,
      tag: "Cross-Platform",
      competencies: [
        "Clean Architecture",
        "Method Channels",
        "Custom Animations",
        "Responsive Scaling",
      ],
    },
    {
      name: "State Management",
      category: "mobile",
      level: "Expert",
      description:
        "Predictable application state flow using BLoC, Riverpod, and Provider patterns with clean reactive streams.",
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      tag: "Architecture Pattern",
      competencies: [
        "BLoC Pattern",
        "Riverpod",
        "Reactive Streams",
        "Immutable State Flow",
      ],
    },
    {
      name: "Firebase & FCM",
      category: "mobile",
      level: "Advanced",
      description:
        "Push notification campaigns across multiple package names, real-time database, analytics, cloud storage.",
      icon: <Smartphone className="w-8 h-8 text-amber-400" />,
      tag: "Push & Cloud",
      competencies: [
        "FCM Multicast",
        "Deep Linking",
        "Crashlytics",
        "Remote Config",
      ],
    },
    {
      name: "Real-Time & WebSockets",
      category: "mobile",
      level: "Advanced",
      description:
        "Live driver tracking, bidirectional WebSocket channels, location services, and Google Maps SDK integrations.",
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      tag: "Real-Time Systems",
      competencies: [
        "WebSockets",
        "Google Maps SDK",
        "Live GPS Tracking",
        "Driver Dispatch",
      ],
    },
    {
      name: "App Store & Play Console",
      category: "mobile",
      level: "Expert",
      description:
        "Over 1 year owning release management, submissions, compliance, phased rollouts, and in-app update APIs for live banking apps.",
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      tag: "Release Engineering",
      competencies: [
        "Store Compliance",
        "Phased Rollouts",
        "In-App Updates",
        "App Signing & Keystores",
      ],
    },

    // BACKEND & FINTECH INTEGRATION
    {
      name: "Java",
      category: "backend",
      level: "Advanced",
      description:
        "Enterprise backend development, object-oriented design, multithreaded services, banking-grade security and reliability.",
      icon: <JavaIcon className="w-8 h-8" />,
      tag: "Enterprise Backend",
      competencies: [
        "Multithreading",
        "OOP Design Patterns",
        "Thread Concurrency",
        "High-Throughput APIs",
      ],
    },
    {
      name: "Spring Boot",
      category: "backend",
      level: "Advanced",
      description:
        "RESTful microservices, Spring Security, hexagonal architecture, Keycloak JWT, enterprise banking integration APIs.",
      icon: <SpringIcon className="w-8 h-8" />,
      tag: "Microservices",
      competencies: [
        "Spring Security",
        "Hexagonal Design",
        "Keycloak JWT",
        "RESTful APIs",
      ],
    },
    {
      name: "WSO2 Micro Integrator",
      category: "backend",
      level: "Advanced",
      description:
        "Middleware integration connecting core banking platforms, digital channels, and external national financial switches.",
      icon: <Server className="w-8 h-8 text-blue-400" />,
      tag: "Enterprise Middleware",
      competencies: [
        "ESB Integration",
        "Payload Mediation",
        "National Switch",
        "Fault Tolerance",
      ],
    },
    {
      name: "Redis",
      category: "backend",
      level: "Proficient",
      description:
        "High-speed caching, distributed session state, asynchronous message queues for banking SMS services.",
      icon: <RedisIcon className="w-8 h-8" />,
      tag: "Cache & Queue",
      competencies: [
        "Distributed Caching",
        "Async SMS Queues",
        "Session State",
        "Key-Value Store",
      ],
    },
    {
      name: "Python",
      category: "backend",
      level: "Proficient",
      description:
        "Backend API services, automated scripting, relational data handling, and rapid prototyping tooling.",
      icon: <Code className="w-8 h-8 text-green-400" />,
      tag: "Automation & APIs",
      competencies: [
        "Automation Scripting",
        "Data Transformation",
        "FastAPI Prototyping",
        "CLI Utilities",
      ],
    },

    // DEVOPS & TOOLS
    {
      name: "Docker",
      category: "devops",
      level: "Advanced",
      description:
        "Containerization of microservices and applications, multi-stage builds, container isolation for scalable deployments.",
      icon: <DockerIcon className="w-8 h-8" />,
      tag: "Containers",
      competencies: [
        "Multi-Stage Builds",
        "Docker Compose",
        "Container Isolation",
        "Environment Parity",
      ],
    },
    {
      name: "CI/CD & GitHub Actions",
      category: "devops",
      level: "Advanced",
      description:
        "Automated pipelines, static analysis, unit test automation, and continuous delivery to deployment environments.",
      icon: <Github className="w-8 h-8 text-orange-400" />,
      tag: "Automation",
      competencies: [
        "Automated Workflows",
        "Linting & Testing",
        "Artifact Building",
        "Continuous Delivery",
      ],
    },
    {
      name: "Figma (UI/UX)",
      category: "devops",
      level: "Advanced",
      description:
        "Full UI/UX design, interactive wireframing, component libraries; designed Alibo Market and Akababi apps.",
      icon: <FigmaIcon className="w-8 h-8" />,
      tag: "UI/UX Design",
      competencies: [
        "Component Libraries",
        "Interactive Wireframes",
        "Design Tokens",
        "Dev Handoff",
      ],
    },
    {
      name: "Clean Architecture & Git",
      category: "devops",
      level: "Expert",
      description:
        "Domain-driven boundaries, SOLID design principles, hexagonal modular structure, agile Git workflows and code reviews.",
      icon: <CheckCircle2 className="w-8 h-8 text-teal-400" />,
      tag: "Engineering Standards",
      competencies: [
        "Domain-Driven Design",
        "SOLID Principles",
        "Peer Code Reviews",
        "Git Workflows",
      ],
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
        "Implement clean architecture, rigorous state management, and optimized rendering performance for high-traffic mobile users.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "REST APIs",
        "Flutter Security",
        "Clean Architecture",
        "Git",
      ],
    },
    {
      title: "Software Engineer (Spring Boot | Fintech Integration)",
      company: "Lion International Bank S.C. (Anbesa Bank)",
      period: "May 2025 – Aug 2026",
      type: "Full-time, Onsite",
      location: "Addis Ababa, Ethiopia",
      url: "https://anbesabank.com",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      achievements: [
        "Built and supported core APIs, middleware integrations, and the production Anbesa Plus mobile banking app on Sopra Banking Software (DBS) platform.",
        "Engineered REST APIs and integration services with Java Spring Boot and WSO2 Micro Integrator (MI) for digital banking channels and core banking backbones.",
        "Built the bank's Fayda (Ethiopian National ID) integration and IPS (Instant Payment System) real-time interbank funds transfer rails.",
        "Integrated Sopra Banking Software SDK across Android and iOS platforms; executed SDK upgrades from hotfix.9 to hotfix.12 and resolved mobile TLS certificate pinning failures.",
        "Owned release management on Google Play Console and App Store Connect for over a year, managing submissions, compliance checks, and FCM push notifications.",
      ],
      technologies: [
        "Java Spring Boot",
        "WSO2 MI",
        "Redis",
        "Keycloak",
        "Docker",
        "REST APIs",
        "Microservices",
      ],
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
      ],
      technologies: [
        "Flutter",
        "Figma",
        "WebSockets",
        "Chapa",
        "Campay",
        "Google Maps",
        "Firebase",
      ],
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
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Google Maps",
        "Figma",
        "RESTful APIs",
        "Git",
      ],
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
      technologies: [
        "Flutter",
        "Dart",
        "REST APIs",
        "Cloud Services",
        "Agile Collaboration",
      ],
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
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.anbesabank.anbesa_plus&pcampaignid=web_share",
      iosUrl: "https://apps.apple.com/us/app/anbesa-plus/id6758233243",
      tags: [
        "Flutter",
        "Spring Boot",
        "WSO2 MI",
        "Fayda ID",
        "IPS",
        "Sopra DBS",
        "Banking Security",
      ],
      highlights:
        "500K+ Downloads • Live on Play Store & App Store • Banking Grade Security",
    },
    {
      title: "CBE Connect",
      subtitle: "Commercial Bank of Ethiopia Mobile Platform",
      category: "mobile",
      description:
        "Strategic mobile banking and customer connectivity application developed at Eaglelion Systems Technology for Commercial Bank of Ethiopia (CBE), delivering seamless financial interaction, account management, and real-time updates.",
      image: "/project_thumbnails/swift delivery.png",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.eaglelionsystems.connectethiopia&pcampaignid=web_share",
      tags: [
        "Flutter",
        "Dart",
        "CBE Banking",
        "REST APIs",
        "Clean Architecture",
        "Eaglelion Systems",
      ],
      highlights:
        "Production Banking App • Active Feature Increments • Enterprise Scale",
    },
    {
      title: "Star Pay",
      subtitle: "Modern Fintech Digital Wallet & Payment Platform",
      category: "mobile",
      description:
        "Modern digital payment solution developed at Eaglelion Systems Technology, enabling quick peer-to-peer money transfers, merchant QR payments, airtime purchases, and automated utility settlements with real-time transaction processing.",
      image: "/project_thumbnails/swift ride.png",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.eaglelionsystems.starpay&pcampaignid=web_share",
      tags: [
        "Flutter",
        "Dart",
        "Fintech",
        "Mobile Wallet",
        "QR Payments",
        "Eaglelion Systems",
      ],
      highlights: "High-Volume Payments • Secure Gateway • Instant Settlement",
    },
    {
      title: "GoSkyHy Mobile App",
      subtitle: "Flight, Hotel & Travel Booking Solution",
      category: "mobile",
      description:
        "Feature-rich travel booking mobile application offering travelers real-time flight search, hotel reservations, interactive booking schedules, and cloud service integrations with smooth user journeys.",
      image: "/project_thumbnails/swift ride driverr.png",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.goskyhy.mobile&pcampaignid=web_share",
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
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.ecleul.swiftdelivery",
      tags: [
        "Flutter",
        "Google Maps SDK",
        "Real-Time Tracking",
        "Firebase",
        "EthioClicks",
      ],
      highlights: "Live GPS Tracking • Real-time Map Updates • Firebase Push",
    },
    {
      title: "Alibo Market",
      subtitle: "E-Commerce Mobile Marketplace & Figma UI/UX",
      category: "mobile",
      description:
        "Comprehensive mobile marketplace developed at Qemer Technology Plc, Supporting product catalogs, shopping cart, and multi-gateway payment integration (Chapa and Campay). Features a complete custom design system created in Figma and implemented in Flutter.",
      image: "/project_thumbnails/alibo market.png",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.aliboMarket.alibo",
      tags: [
        "Flutter",
        "Firebase",
        "Chapa Gateway",
        "Campay",
        "Figma UI/UX",
        "Qemer Tech",
      ],
      highlights:
        "Figma Design System • Dual Payment Gateways • Clean Architecture",
    },
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory =
      selectedSkillCategory === "all" || skill.category === selectedSkillCategory;
    const query = skillSearchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      skill.name.toLowerCase().includes(query) ||
      skill.description.toLowerCase().includes(query) ||
      skill.tag.toLowerCase().includes(query) ||
      (skill.competencies &&
        skill.competencies.some((c) => c.toLowerCase().includes(query)));
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    if (!isTestimonialAutoPlay || testimonialViewMode !== "carousel") return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isTestimonialAutoPlay, testimonialViewMode, testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
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
                  window.open(
                    "/documents/Adonias_Haile_J_Resume-latest.pdf",
                    "_blank",
                  )
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
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-800 bg-gray-950/98 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1">
                {[
                  { id: "home", label: "Home" },
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
                    window.open(
                      "/documents/Adonias_Haile_J_Resume-latest.pdf",
                      "_blank",
                    )
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
                    Software Engineer
                  </span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-blue-200/90 font-mono">
                  Fintech Integration • Java Spring Boot • Flutter Mobile •
                  Enterprise APIs
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Software engineer with proven banking and fintech experience.
                Building secure enterprise{" "}
                <span className="text-white font-medium">Java Spring Boot</span>{" "}
                microservices,{" "}
                <span className="text-white font-medium">
                  WSO2 Micro Integrator
                </span>{" "}
                middleware, payment switch connectivity, and shipping production{" "}
                <span className="text-white font-medium">Flutter mobile</span>{" "}
                applications end to end.
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
                    window.open(
                      "/documents/Adonias_Haile_J_Resume-latest.pdf",
                      "_blank",
                    )
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
                  <Award className="w-4 h-4 mr-2 text-amber-400" />8
                  Recommendations
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
                    <h3 className="text-xl font-bold text-white">
                      Adonias Haile
                    </h3>
                    <p className="text-sm text-gray-400">
                      Software Engineer & Mobile Specialist
                    </p>
                    <p className="text-xs text-blue-400 flex items-center justify-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Addis Ababa, Ethiopia
                    </p>
                  </div>

                  {/* Mini metrics in hero card */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800/80 text-center">
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-white">
                        3+ Years
                      </div>
                      <div className="text-[11px] text-gray-400">
                        Engineering Exp
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-blue-400">
                        7+ Apps
                      </div>
                      <div className="text-[11px] text-gray-400">
                        Contributions.
                      </div>
                    </div>
                  </div>

                  {/* Academic Education spanning end-to-end of profile container */}
                  <div className="mt-5 pt-4 border-t border-gray-800/80 -mx-6 sm:-mx-8 px-6 sm:px-8 bg-gray-950/40 rounded-b-3xl">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                          Academic Education
                        </h4>
                        <p className="text-xs text-gray-200 font-semibold">
                          Bahir Dar University - BIT
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 pl-3 border-l-2 border-blue-500/40 ml-1">
                      <h5 className="font-semibold text-white text-xs sm:text-sm">
                        B.Sc. in Software Engineering
                      </h5>
                      <p className="text-[11px] text-gray-400 leading-snug">
                        Faculty of Computing, Bahir Dar Institute of Technology
                        (BIT Poly Campus), Bahir Dar, Ethiopia
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1 pb-1">
                        <Badge className="bg-blue-900/40 text-blue-300 border-blue-700/50 text-[10px] px-2 py-0.5">
                          2019 – 2024
                        </Badge>
                        <Badge className="bg-emerald-900/40 text-emerald-300 border-emerald-700/50 text-[10px] px-2 py-0.5">
                          CGPA: 3.86 / 4.00 (High Distinction)
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Floating metric badge */}
                  <div className="absolute -top-3 -right-3 p-2.5 rounded-xl bg-gray-900 border border-gray-700/80 shadow-xl shadow-emerald-500/10 text-center">
                    <div className="text-lg font-bold text-emerald-400">
                      500K+
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Users Impacted
                    </div>
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
                <div className="text-lg sm:text-xl font-bold text-white">
                  Banking & Fintech
                </div>
                <div className="text-xs text-gray-400">
                  Lion Bank • CBE Connect • Star Pay
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  Store Release Lead
                </div>
                <div className="text-xs text-gray-400">
                  Google Play & App Store Management
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  Backend & APIs
                </div>
                <div className="text-xs text-gray-400">
                  Spring Boot • WSO2 MI
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  8 Endorsements
                </div>
                <div className="text-xs text-gray-400">
                  Directors • CTOs • PMs • Academia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-500 hover:text-blue-400 transition-colors animate-bounce p-2"
            aria-label="Scroll to Skills"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Technical Stack & Competencies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Skills & Technologies
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Cross-platform mobile development with Flutter, enterprise backend
              integrations with Java Spring Boot, and DevOps workflows.
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Controls: Category Filter Tabs & Live Search Input */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                { id: "all", label: `All Skills (${skills.length})` },
                { id: "mobile", label: "Mobile (Flutter)" },
                { id: "backend", label: "Backend & Fintech" },
                { id: "devops", label: "DevOps & Tools" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSkillCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedSkillCategory === tab.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                      : "bg-gray-900/80 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Quick Live Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills, tools, or concepts..."
                value={skillSearchQuery}
                onChange={(e) => setSkillSearchQuery(e.target.value)}
                className="w-full pl-9 pr-7 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/80 transition-colors shadow-inner"
              />
              {skillSearchQuery && (
                <button
                  onClick={() => setSkillSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Skills Grid with Concrete Competencies & Production Application (no arbitrary % bar) */}
          {filteredSkills.length === 0 ? (
            <div className="text-center py-16 bg-gray-900/30 rounded-2xl border border-gray-800">
              <p className="text-gray-400 text-sm">No technologies match &ldquo;{skillSearchQuery}&rdquo;.</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 border-gray-700 text-xs text-gray-300"
                onClick={() => {
                  setSkillSearchQuery("");
                  setSelectedSkillCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/60 border-gray-800/80 hover:border-blue-500/60 hover:bg-gray-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Ambient subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full relative z-10 space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-gray-800/80 border border-gray-700/60 group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-300">
                          {skill.icon}
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gray-800/90 text-gray-300 border-gray-700 text-[10px] px-2 py-0.5 font-mono"
                        >
                          {skill.tag}
                        </Badge>
                      </div>

                      <div className="mb-2">
                        <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                      </div>

                      <p className="text-gray-400 text-xs leading-relaxed mb-3">
                        {skill.description}
                      </p>

                      {/* Concrete Competencies */}
                      {skill.competencies && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skill.competencies.map((comp, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/60 group-hover:border-gray-600 transition-colors"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-24 bg-gray-900/40 border-t border-gray-800/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Career Trajectory
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Work Experience
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Proven track record in enterprise banking software, fintech
              middleware, and high-impact mobile solutions.
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
                        <Badge
                          className={`${exp.badgeColor} border text-xs px-2.5 py-1 font-medium`}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-2.5 my-4">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed"
                        >
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
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Projects
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Mobile banking apps, fintech integrations, and design systems
              I&apos;ve contributed to.
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <CardContent className="p-5 sm:p-6 space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {project.subtitle}
                        </span>
                        {project.highlights && (
                          <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                            ★ {project.highlights}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors pt-1">
                        {project.title}
                      </h4>
                    </div>

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
      <section
        id="testimonials"
        className="py-16 sm:py-24 bg-gray-900/40 border-t border-gray-800/80 relative overflow-hidden"
      >
        {/* Subtle decorative glow in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Peer & Leadership Recommendations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-white">
              What People Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Endorsements and feedback from colleagues, engineering leaders, and clients I&apos;ve collaborated with
            </p>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />

            {/* View Mode & Autoplay Toolbar */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {/* Mode Switcher */}
              <div className="inline-flex items-center p-1 rounded-xl bg-gray-800/90 border border-gray-700/80 shadow-inner">
                <button
                  type="button"
                  onClick={() => setTestimonialViewMode("carousel")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    testimonialViewMode === "carousel"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Spotlight View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTestimonialViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    testimonialViewMode === "grid"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>All ({testimonials.length})</span>
                </button>
              </div>

              {/* Autoplay Play/Pause Button (active in Carousel mode) */}
              {testimonialViewMode === "carousel" && (
                <button
                  type="button"
                  onClick={() => setIsTestimonialAutoPlay(!isTestimonialAutoPlay)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                    isTestimonialAutoPlay
                      ? "bg-gray-800/80 border-emerald-500/30 text-emerald-400 hover:bg-gray-700/80"
                      : "bg-gray-800/80 border-gray-700 text-gray-400 hover:text-white"
                  }`}
                  title={isTestimonialAutoPlay ? "Pause Auto-rotation" : "Resume Auto-rotation"}
                >
                  {isTestimonialAutoPlay ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <Pause className="w-3.5 h-3.5" />
                      <span>Auto-Playing</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Paused</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Carousel / Spotlight Mode */}
          {testimonialViewMode === "carousel" && (
            <div className="space-y-8">
              {/* Main Featured Spotlight Card */}
              {(() => {
                const testi = testimonials[activeTestimonial];
                return (
                  <div className="relative max-w-4xl mx-auto">
                    {/* Glowing background ambient border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-purple-600/30 rounded-3xl blur-sm -z-10 opacity-75" />

                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-900/95 to-blue-950/20 border border-blue-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
                      {/* Decorative quote watermark */}
                      <Quote className="absolute right-4 sm:right-8 top-4 sm:top-8 w-24 h-24 sm:w-36 sm:h-36 text-blue-500/10 pointer-events-none -scale-x-100 select-none" />

                      {/* Top Bar: Slide indicator & Navigation arrows */}
                      <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                        <div className="text-xs font-mono font-medium text-gray-400">
                          <span className="text-white font-semibold">
                            {String(activeTestimonial + 1).padStart(2, "0")}
                          </span>
                          <span className="mx-1.5 text-gray-600">/</span>
                          <span>{String(testimonials.length).padStart(2, "0")}</span>
                        </div>

                        {/* Navigation arrows */}
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveTestimonial(
                                (prev) => (prev - 1 + testimonials.length) % testimonials.length
                              )
                            }
                            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-colors"
                            aria-label="Previous recommendation"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                            }
                            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-colors"
                            aria-label="Next recommendation"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="relative z-10 text-base sm:text-lg md:text-xl text-gray-100 font-normal leading-relaxed italic mb-8 break-words min-h-[90px]">
                        &ldquo;{testi.content}&rdquo;
                      </blockquote>

                      {/* Author Details and Link */}
                      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-800/80">
                        <div className="flex items-center gap-4">
                          {testi.image ? (
                            <Image
                              src={testi.image}
                              alt={testi.name}
                              width={56}
                              height={56}
                              className="rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover ring-2 ring-blue-500/40 shadow-lg flex-shrink-0"
                            />
                          ) : (
                            <div
                              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${
                                testi.avatarBg || "bg-blue-600"
                              } text-white font-bold flex items-center justify-center text-sm sm:text-base ring-2 ring-blue-500/40 shadow-lg flex-shrink-0`}
                            >
                              {testi.initials ||
                                testi.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .slice(0, 2)
                                  .join("")}
                            </div>
                          )}

                          <div>
                            <h4 className="font-bold text-white text-sm sm:text-base">
                              {testi.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-400 max-w-md">
                              {testi.role}
                            </p>
                          </div>
                        </div>

                        {testi.url && (
                          <a
                            href={testi.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 border border-blue-500/20 text-xs font-medium transition-colors"
                          >
                            <span>Verify Source</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Interactive Quick-Jump Avatar Rail */}
              <div className="max-w-4xl mx-auto">
                <p className="text-center text-xs text-gray-500 uppercase tracking-wider mb-3">
                  Click to spotlight any endorser
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {testimonials.map((testi, idx) => {
                    const isActive = activeTestimonial === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveTestimonial(idx);
                        }}
                        className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl text-left transition-all duration-200 border ${
                          isActive
                            ? "bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-500/10 scale-105"
                            : "bg-gray-800/60 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200 hover:bg-gray-800"
                        }`}
                      >
                        {testi.image ? (
                          <Image
                            src={testi.image}
                            alt={testi.name}
                            width={28}
                            height={28}
                            className={`rounded-full w-7 h-7 object-cover flex-shrink-0 transition-transform ${
                              isActive ? "ring-2 ring-blue-400 scale-105" : ""
                            }`}
                          />
                        ) : (
                          <div
                            className={`w-7 h-7 rounded-full ${
                              testi.avatarBg || "bg-blue-600"
                            } text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 ${
                              isActive ? "ring-2 ring-blue-400" : ""
                            }`}
                          >
                            {testi.initials ||
                              testi.name
                                .split(" ")
                                .map((n) => n[0])
                                .slice(0, 2)
                                .join("")}
                          </div>
                        )}
                        <span className="text-xs font-medium whitespace-nowrap max-w-[110px] truncate">
                          {testi.name.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Grid Mode View */}
          {testimonialViewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/80 border-gray-700/80 hover:border-blue-500/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between group"
                >
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTestimonial(index);
                          setTestimonialViewMode("carousel");
                        }}
                        className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Spotlight</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full flex-shrink-0 w-11 h-11 object-cover ring-2 ring-gray-700 group-hover:ring-blue-500/50 transition-all"
                        />
                      ) : (
                        <div
                          className={`w-11 h-11 rounded-full ${
                            testimonial.avatarBg || "bg-blue-600"
                          } text-white font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-inner ring-2 ring-gray-700 group-hover:ring-blue-500/50 transition-all`}
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
                    <div className="p-5 pt-0">
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
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
              Let's Connect
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Available for full-time software engineering roles, mobile
              contract projects, and fintech integrations.
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
                  <h4 className="font-bold text-white text-sm mb-1">
                    Direct Email
                  </h4>
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
                  <h4 className="font-bold text-white text-sm mb-1">
                    WhatsApp & Phone
                  </h4>
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
                  <h4 className="font-bold text-white text-sm mb-1">
                    Location
                  </h4>
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
                Download my up-to-date resume, review my code repositories on
                GitHub, or test my live SaaS at resucv.com.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 text-sm"
                  onClick={() =>
                    window.open(
                      "/documents/Adonias_Haile_J_Resume-latest.pdf",
                      "_blank",
                    )
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
                    window.open(
                      "https://linkedin.com/in/adonias-haile-668312322",
                      "_blank",
                    )
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
                Full-Stack Software Engineer • Flutter & Mobile Specialist •
                Java Spring Boot
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
