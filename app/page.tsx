"use client";

// Adonias Haile Portfolio - Minimal Bento Design System
// Clean document flow, WCAG-compliant semantics, zero overlapping antipatterns

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
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
  Calendar,
  Search,
  Terminal,
  Shield,
  Network,
  Copy,
  Check,
  Command,
  ArrowUpRight,
  Zap,
  Lock,
  Activity,
  Database,
  Key,
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

export default function MinimalBentoPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [projectCategory, setProjectCategory] = useState("all");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");
  const [skillSearchQuery, setSkillSearchQuery] = useState("");

  // Expanded project architecture cards
  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  // Command palette modal state
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandSearch, setCommandSearch] = useState("");

  // Copy feedback state
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Recommendations state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialViewMode, setTestimonialViewMode] = useState<
    "carousel" | "grid"
  >("carousel");

  const copyToClipboard = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(identifier);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const toggleProjectExpand = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Keyboard shortcut for Command Palette (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsCommandOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Endorsements from engineering leaders, directors, and clients
  const testimonials = [
    {
      name: "Addisu Thomas",
      role: "Director, Digital Technology Banking C&P at Lion International Bank",
      initials: "AT",
      avatarBg: "bg-amber-700",
      content:
        "Adonias demonstrated sharp analytical skills and a solid grasp of backend development. Responsible for developing and integrating APIs, writing clean code in Java, and troubleshooting financial platforms. In addition he worked on mobile client projects on Android and iOS app upgrades. A fast learner who quickly adapts to new tools and frameworks.",
    },
    {
      name: "Kinfe Guesh",
      role: "Infrastructure Lead & DevSecOps | Platform Engineering | AWS",
      initials: "KG",
      avatarBg: "bg-stone-800",
      content:
        "I've had the pleasure of working closely with Adonias on integration and infrastructure initiatives. He is a strong problem solver who quickly understands concepts beyond development, with a good understanding of the broader IT environment. Combines technical skills with a strong sense of ownership.",
      url: "https://linkedin.com/in/adonias-haile-668312322",
    },
    {
      name: "Qemer Software Technology",
      role: "Software Development Company",
      image: "/testimonials/qemer tech logo.png",
      content:
        "Adonias is a skilled Mobile Developer, a true all-rounder in the world of mobile applications. He possesses the unique ability to handle every aspect of mobile development, from crafting intuitive user interfaces to building robust server-side infrastructure.",
      url: "https://www.qemertech.com/team/adonias-haile/",
    },
    {
      name: "Natnael Mahetem",
      role: "CTO, Cofounder at Ewenet Communication PLC",
      image: "/testimonials/testi_natan.jpeg",
      content:
        "Adonias consistently impressed me with his exceptional problem-solving, coding skills, and communication abilities throughout his work at Ewenet Communication under my supervision.",
    },
    {
      name: "Mrs. Shwaga Abay (M.Sc.)",
      role: "Lecturer & Project Advisor, BIT Faculty of Computing",
      initials: "SA",
      avatarBg: "bg-amber-800",
      content:
        "He has been my student while pursuing his Bachelor degree in Software Engineering at Bahir Dar Institute of Technology. He has developed his software engineering knowledge and skills to the highest requirements. Enthusiastic, socially matured, and an excellent performer on project work.",
    },
    {
      name: "Ezedin Wangoria",
      role: "Project Manager at EthioClicks",
      initials: "EW",
      avatarBg: "bg-emerald-800",
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
      role: "Software Engineer & AI Enthusiast",
      image: "/testimonials/testi_amedee.jpeg",
      content:
        "Adonias is a good solution thinker. His capacity of analysis to come with a solution is incredible. We worked together on a project and I will totally recommend him to anyone.",
    },
  ];

  // Tech Stack: concise names and icons for small, neat containers
  const skills = [
    // Mobile
    {
      name: "Flutter",
      category: "mobile",
      icon: <FlutterIcon className="w-4 h-4" />,
    },
    {
      name: "Dart",
      category: "mobile",
      icon: <Code className="w-4 h-4 text-sky-600" />,
    },
    {
      name: "Android SDK",
      category: "mobile",
      icon: <Smartphone className="w-4 h-4 text-emerald-600" />,
    },
    {
      name: "iOS (Swift)",
      category: "mobile",
      icon: <AppleIcon className="w-4 h-4" />,
    },
    {
      name: "BLoC State",
      category: "mobile",
      icon: <Layers className="w-4 h-4 text-amber-600" />,
    },
    {
      name: "Riverpod",
      category: "mobile",
      icon: <Layers className="w-4 h-4 text-sky-600" />,
    },
    {
      name: "Biometric Keystore",
      category: "mobile",
      icon: <Shield className="w-4 h-4 text-emerald-600" />,
    },
    {
      name: "TLS Pinning",
      category: "mobile",
      icon: <Lock className="w-4 h-4 text-stone-700" />,
    },
    {
      name: "Google Maps SDK",
      category: "mobile",
      icon: <Globe className="w-4 h-4 text-blue-600" />,
    },
    {
      name: "WebSockets",
      category: "mobile",
      icon: <Activity className="w-4 h-4 text-cyan-600" />,
    },
    {
      name: "Firebase",
      category: "mobile",
      icon: <Smartphone className="w-4 h-4 text-amber-600" />,
    },

    // Backend & Fintech
    {
      name: "Java",
      category: "backend",
      icon: <JavaIcon className="w-4 h-4" />,
    },
    {
      name: "Spring Boot",
      category: "backend",
      icon: <SpringIcon className="w-4 h-4" />,
    },
    {
      name: "WSO2 Micro Integrator",
      category: "backend",
      icon: <Server className="w-4 h-4 text-amber-600" />,
    },
    {
      name: "ISO 8583 Switch",
      category: "backend",
      icon: <Network className="w-4 h-4 text-emerald-600" />,
    },
    {
      name: "Fayda National ID",
      category: "backend",
      icon: <Shield className="w-4 h-4 text-amber-600" />,
    },
    {
      name: "IPS Instant Payment",
      category: "backend",
      icon: <Zap className="w-4 h-4 text-emerald-600" />,
    },
    {
      name: "Sopra DBS Core",
      category: "backend",
      icon: <Server className="w-4 h-4 text-stone-700" />,
    },
    {
      name: "Redis Cache",
      category: "backend",
      icon: <RedisIcon className="w-4 h-4" />,
    },
    {
      name: "RESTful APIs",
      category: "backend",
      icon: <Code className="w-4 h-4 text-stone-700" />,
    },
    {
      name: "PostgreSQL",
      category: "backend",
      icon: <Database className="w-4 h-4 text-blue-600" />,
    },
    {
      name: "Keycloak JWT",
      category: "backend",
      icon: <Key className="w-4 h-4 text-amber-600" />,
    },
    {
      name: "Python",
      category: "backend",
      icon: <Code className="w-4 h-4 text-emerald-600" />,
    },

    // DevOps & Tools
    {
      name: "Docker",
      category: "devops",
      icon: <DockerIcon className="w-4 h-4" />,
    },
    {
      name: "GitHub Actions",
      category: "devops",
      icon: <Github className="w-4 h-4 text-stone-800" />,
    },
    {
      name: "Google Play Console",
      category: "devops",
      icon: <GooglePlayIcon className="w-4 h-4" />,
    },
    {
      name: "App Store Connect",
      category: "devops",
      icon: <AppleIcon className="w-4 h-4" />,
    },
    {
      name: "Figma UI/UX",
      category: "devops",
      icon: <FigmaIcon className="w-4 h-4" />,
    },
    {
      name: "Clean Architecture",
      category: "devops",
      icon: <CheckCircle2 className="w-4 h-4 text-teal-600" />,
    },
    {
      name: "Linux & Bash",
      category: "devops",
      icon: <Terminal className="w-4 h-4 text-stone-700" />,
    },
    {
      name: "Git Workflows",
      category: "devops",
      icon: <Github className="w-4 h-4 text-stone-700" />,
    },
  ];

  // Work Experience
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Eaglelion Systems Technology",
      period: "Aug 2026 – Present",
      type: "Full-time",
      location: "Addis Ababa, Ethiopia",
      url: "https://eaglelionsystems.com",
      badgeColor: "border-stone-300 bg-[#FAF8F5] text-[#1C1917]",
      highlightMetric: "Active Banking & Wallet Rollouts",
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
      badgeColor: "border-stone-300 bg-[#FAF8F5] text-[#1C1917]",
      highlightMetric: "500K+ Users • Sopra DBS Core Platform",
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
      badgeColor: "border-stone-300 bg-[#FAF8F5] text-[#1C1917]",
      highlightMetric: "Mobile Commerce & Payments",
      achievements: [
        "Developed Mood Ride User App with cloud services, backend REST APIs, Google Maps APIs, and WebSockets.",
        "Integrated secure payment gateways with Chapa and Campay for in-app mobile transactions.",
        "Designed comprehensive UI/UX for Alibo Market using Figma, transforming wireframes into production Flutter interfaces.",
        "Implemented real-time geolocation tracking and driver dispatch workflows across mobile applications.",
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
      badgeColor: "border-stone-300 bg-[#FAF8F5] text-[#1C1917]",
      highlightMetric: "Dispatch Platform & Cloud Architecture",
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
      badgeColor: "border-stone-300 bg-[#FAF8F5] text-[#1C1917]",
      highlightMetric: "Mobile Application Delivery",
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

  interface Project {
    title: string;
    subtitle: string;
    category: "banking" | "wallet" | "logistics" | "travel";
    badgeText: string;
    description: string;
    androidUrl?: string;
    iosUrl?: string;
    tags: string[];
    highlights: string;
    architectureSpecs: {
      architecture: string;
      integration: string;
      security: string;
      protocols: string;
    };
  }

  // All 6 Featured Production Projects
  const projects: Project[] = [
    {
      title: "Anbesa Plus Mobile Banking",
      subtitle: "Lion International Bank Official Banking App",
      category: "banking",
      badgeText: "500K+ Downloads • Live App",
      description:
        "Flagship mobile banking application for Lion International Bank S.C., powered by Sopra Banking Software (DBS platform). Supports biometric authentication, Ethiopian National ID (Fayda) onboarding, Instant Payment System (IPS), utility bill payments, QR payments, fund transfers, and transaction receipt generation.",
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
      architectureSpecs: {
        architecture:
          "Clean Architecture with BLoC State Management & Repository Layer",
        integration:
          "WSO2 Micro Integrator ESB & Java Spring Boot Microservices connecting Sopra DBS",
        security:
          "TLS Certificate Pinning, Biometric Keystore, Obfuscated Bytecode, Session Expiry",
        protocols:
          "ISO 8583 Switch, RESTful JSON, National Fayda ID API, IPS Real-Time Settlement",
      },
    },
    {
      title: "CBE Connect",
      subtitle: "Commercial Bank of Ethiopia Mobile Platform",
      category: "banking",
      badgeText: "Enterprise Banking • Eaglelion",
      description:
        "Strategic mobile banking and customer connectivity application developed at Eaglelion Systems Technology for Commercial Bank of Ethiopia (CBE), delivering seamless financial interaction, account management, and real-time updates.",
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
      architectureSpecs: {
        architecture:
          "Modular Feature Architecture with Riverpod & Immutable State Models",
        integration:
          "Enterprise Banking Middleware and Secure Customer Account Endpoints",
        security:
          "Device Keystore Binding, Tamper Detection, Encrypted In-Memory Storage",
        protocols:
          "RESTful JSON, Multi-Factor Authentication, Dynamic Account Sync",
      },
    },
    {
      title: "Star Pay",
      subtitle: "Modern Fintech Digital Wallet & Payment Platform",
      category: "wallet",
      badgeText: "Fintech Wallet • Eaglelion",
      description:
        "Modern digital payment solution developed at Eaglelion Systems Technology, enabling quick peer-to-peer money transfers, merchant QR payments, airtime purchases, and automated utility settlements with real-time transaction processing.",
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
      architectureSpecs: {
        architecture:
          "Event-Driven Flutter Architecture with Reactive Transaction Streams",
        integration:
          "Digital Merchant QR APIs, Telecom Airtime Switch, Utility Billers",
        security:
          "PIN & Biometric Auth, Tokenized Session Bearers, Anti-Screenshot Protections",
        protocols:
          "EMVCo QR Standards, RESTful Payment Gateway, Real-Time Webhooks",
      },
    },
    {
      title: "GoSkyHy Mobile App",
      subtitle: "Flight, Hotel & Travel Booking Solution",
      category: "travel",
      badgeText: "Travel Tech • Realtime GDS",
      description:
        "Feature-rich travel booking mobile application offering travelers real-time flight search, hotel reservations, interactive booking schedules, and cloud service integrations with smooth user journeys.",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.goskyhy.mobile&pcampaignid=web_share",
      tags: ["Flutter", "Dart", "Travel Tech", "REST APIs", "State Management"],
      highlights: "Live on Play Store • Seamless Booking UI • Real-time APIs",
      architectureSpecs: {
        architecture:
          "BLoC State Pattern with Paginated Result Streams & Filter Pipelines",
        integration:
          "Global Distribution System (GDS) Flight APIs & Hotel Inventory Connectors",
        security: "PCI-DSS Compliant Payment Tokenization, Secure Card Storage",
        protocols:
          "RESTful JSON, WebSocket Fare Updates, Push Notification Schedules",
      },
    },
    {
      title: "Swift Delivery",
      subtitle: "On-Demand Package Dispatch & Live Courier Tracking",
      category: "logistics",
      badgeText: "Live GPS • WebSockets",
      description:
        "Delivery service mobile application connecting senders, drivers, and recipients. Built at EthioClicks, featuring real-time GPS tracking on Google Maps, dispatch management, push notifications, and Firebase backend.",
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
      architectureSpecs: {
        architecture:
          "Clean Architecture with Reactive Geolocation Stream Controllers",
        integration:
          "Google Maps SDK, Directions API, Firebase Realtime Database",
        security:
          "Role-Based Firebase Security Rules, Phone Number Verification",
        protocols:
          "Bidirectional WebSockets, Polyline Path Smoothing, FCM Multicast",
      },
    },
    {
      title: "Alibo Market",
      subtitle: "E-Commerce Mobile Marketplace & Figma UI/UX",
      category: "travel",
      badgeText: "Figma UI/UX • Dual Gateways",
      description:
        "Comprehensive mobile marketplace developed at Qemer Technology Plc, Supporting product catalogs, shopping cart, and multi-gateway payment integration (Chapa and Campay). Features a complete custom design system created in Figma and implemented in Flutter.",
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
      architectureSpecs: {
        architecture:
          "Component-Driven Flutter Design System matching Figma Tokens",
        integration:
          "Chapa Payment Gateway, Campay Mobile Money, Firebase Backend",
        security: "Signed Webhook Verification, Tokenized Payment Requests",
        protocols: "RESTful JSON, Multi-Currency Calculation, Push Alerts",
      },
    },
  ];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (projectCategory === "all") return projects;
    return projects.filter((p) => p.category === projectCategory);
  }, [projectCategory, projects]);

  // Filtered skills: only name and category
  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        selectedSkillCategory === "all" ||
        skill.category === selectedSkillCategory;
      const query = skillSearchQuery.toLowerCase().trim();
      const matchesSearch =
        !query || skill.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedSkillCategory, skillSearchQuery]);

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "projects",
        "experience",
        "skills",
        "testimonials",
        "philosophy",
        "contact",
      ];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1C1917] selection:bg-[#1C1917] selection:text-white overflow-x-hidden">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1C1917] focus:text-white focus:rounded-full focus:shadow-md focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* ================= CLEAN STICKY HEADER ================= */}
      <header className="sticky top-0 z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-b border-[#E5E3DF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <button
            onClick={() => scrollToSection("home")}
            aria-label="Adonias Haile portfolio home"
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E5E3DF] bg-[#F5F5F4] relative flex-shrink-0">
              <Image
                src="/profile-img.jpg"
                alt="Adonias Haile"
                fill
                className="object-cover"
                sizes="32px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#1C1917] group-hover:text-amber-700 transition-colors">
                adoniashaile.com
              </span>
              <span className="text-[11px] text-[#57534E] hidden sm:inline leading-none">
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {[
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Tech Stack" },
              { id: "testimonials", label: "Endorsements" },
              { id: "philosophy", label: "Philosophy" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${activeSection === item.id
                  ? "bg-[#1C1917] text-white"
                  : "text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5F5F4]"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/habeshacoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E3DF] bg-white text-xs font-semibold text-[#1C1917] hover:bg-[#F5F5F4] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => setIsCommandOpen(true)}
              aria-label="Open command palette"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#E5E3DF] bg-[#F5F5F4] text-xs font-mono font-medium text-[#57534E] hover:text-[#1C1917] hover:bg-white transition-colors"
              title="Command Palette (⌘K)"
            >
              <Command className="w-3 h-3" />
              <span className="hidden sm:inline">⌘K</span>
            </button>

            <Button
              size="sm"
              className="text-xs h-8 px-4 rounded-full bg-[#1C1917] text-white hover:bg-[#292524]"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-[#E5E3DF] bg-white text-[#1C1917] md:hidden hover:bg-[#F5F5F4] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <nav aria-label="Mobile navigation" className="md:hidden border-t border-[#E5E3DF] bg-white px-4 py-4 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Tech Stack" },
                { id: "testimonials", label: "Endorsements" },
                { id: "philosophy", label: "Philosophy" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="min-h-[44px] flex items-center justify-between p-2.5 rounded-xl bg-[#F5F5F4] text-xs font-semibold text-[#1C1917] text-left hover:bg-stone-200 transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#57534E]" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5E3DF] flex gap-2">
              <a
                href="/documents/Adonias_Haile_J_Resume-latest.pdf"
                download
                className="min-h-[44px] flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-[#1C1917] text-white text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                Resume (PDF)
              </a>
              <a
                href="https://github.com/habeshacoder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center px-4 py-2 rounded-full border border-[#E5E3DF] text-xs font-semibold text-[#1C1917]"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="pt-14 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1C1917] leading-[1.08] max-w-4xl mx-auto">
              Mobile &amp; Fintech <br className="hidden sm:inline" />
              Software Engineer
            </h1>

            {/* Subtitle */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#44403C] max-w-2xl mx-auto font-normal leading-relaxed">
              Engineering high-throughput banking switch rails, ISO 8583 payment
              middleware, and resilient cross-platform mobile apps running in national
              production.
            </p>

            {/* Action Button Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none">
              <Button
                size="lg"
                className="min-h-[48px] rounded-full bg-[#1C1917] text-white hover:bg-[#292524] shadow-sm px-6 text-sm font-semibold justify-center w-full sm:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>

              <a
                href="/documents/Adonias_Haile_J_Resume-latest.pdf"
                download
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 rounded-full border border-[#E5E3DF] bg-white text-[#1C1917] text-sm font-semibold hover:bg-[#F5F5F4] transition-colors shadow-sm w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-[#57534E]" />
                <span>Resume (PDF)</span>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="min-h-[48px] rounded-full border-[#E5E3DF] bg-white text-[#1C1917] hover:bg-[#F5F5F4] text-sm font-semibold justify-center w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                <span>Get in Touch</span>
              </Button>
            </div>

            {/* Hero Metrics Strip */}
            <div className="mt-12 sm:mt-16 w-full max-w-3xl bg-white border border-[#E5E3DF] rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E3DF] text-center">
                <div className="pt-2 sm:pt-0">
                  <div className="text-3xl sm:text-4xl font-black text-[#1C1917] tracking-tight">
                    6+
                  </div>
                  <div className="text-xs font-semibold text-[#57534E] mt-1">
                    Live Production Apps
                  </div>
                </div>

                <div className="pt-4 sm:pt-0 sm:pl-4">
                  <div className="text-3xl sm:text-4xl font-black text-[#1C1917] tracking-tight">
                    500K+
                  </div>
                  <div className="text-xs font-semibold text-[#57534E] mt-1">
                    Active Users Impacted
                  </div>
                </div>

                <div className="pt-4 sm:pt-0 sm:pl-4">
                  <div className="text-3xl sm:text-4xl font-black text-[#1C1917] tracking-tight">
                    99.9%
                  </div>
                  <div className="text-xs font-semibold text-[#57534E] mt-1">
                    Switch Rails Uptime
                  </div>
                </div>

                <div className="pt-4 sm:pt-0 sm:pl-4">
                  <div className="text-3xl sm:text-4xl font-black text-[#1C1917] tracking-tight">
                    3.86
                  </div>
                  <div className="text-xs font-semibold text-[#57534E] mt-1">
                    CGPA High Distinction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED PROJECTS BENTO ================= */}
        <section
          id="projects"
          className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E5E3DF] scroll-mt-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917]">
                Tools &amp; Platforms I&apos;ve Built
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#44403C] max-w-xl">
                High-impact financial platforms, banking middleware, and
                commercial mobile apps deployed to hundreds of thousands of users.
              </p>
            </div>

            {/* Project Filter Pills */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#E5E3DF] overflow-x-auto">
              {[
                { id: "all", label: "All Works (6)" },
                { id: "banking", label: "Banking" },
                { id: "wallet", label: "Wallets" },
                { id: "logistics", label: "Logistics" },
                { id: "travel", label: "Travel & Shop" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${projectCategory === tab.id
                    ? "bg-[#1C1917] text-white shadow-sm"
                    : "text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5F5F4]"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => {
              const isExpanded = !!expandedProjects[index];

              return (
                <div
                  key={project.title}
                  className="bg-white border border-[#E5E3DF] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-stone-400 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-medium text-[#57534E] mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      <Badge
                        variant="outline"
                        className="text-xs font-semibold border-[#E5E3DF] bg-[#FAF8F5] text-[#1C1917] whitespace-nowrap flex-shrink-0"
                      >
                        {project.badgeText}
                      </Badge>
                    </div>

                    <p className="mt-3 text-sm text-[#44403C] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Clean Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E5E3DF] text-xs font-mono font-medium text-[#44403C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Architecture Specs Drawer */}
                    {isExpanded && (
                      <div className="mt-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E3DF] text-xs space-y-2">
                        <div className="font-bold text-[#1C1917] flex items-center gap-1.5 pb-1 border-b border-[#E5E3DF]">
                          <Terminal className="w-3.5 h-3.5 text-stone-700" />
                          <span>Architecture Specifications</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1917]">
                            Architecture:{" "}
                          </span>
                          <span className="text-[#44403C]">
                            {project.architectureSpecs.architecture}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1917]">
                            Integration:{" "}
                          </span>
                          <span className="text-[#44403C]">
                            {project.architectureSpecs.integration}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1917]">
                            Security:{" "}
                          </span>
                          <span className="text-[#44403C]">
                            {project.architectureSpecs.security}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1917]">
                            Protocols:{" "}
                          </span>
                          <span className="text-[#44403C]">
                            {project.architectureSpecs.protocols}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Row Actions */}
                  <div className="mt-6 pt-4 border-t border-[#E5E3DF] flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.androidUrl && (
                        <a
                          href={project.androidUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E3DF] bg-white text-xs font-semibold text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
                        >
                          <GooglePlayIcon className="w-3.5 h-3.5" />
                          <span>Google Play</span>
                        </a>
                      )}
                      {project.iosUrl && (
                        <a
                          href={project.iosUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5E3DF] bg-white text-xs font-semibold text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
                        >
                          <AppleIcon className="w-3.5 h-3.5" />
                          <span>App Store</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => toggleProjectExpand(index)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] transition-colors py-1 px-2.5 rounded-full hover:bg-[#F5F5F4]"
                    >
                      <span>{isExpanded ? "Hide Specs" : "Arch Specs"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= CAREER EXPERIENCE BENTO ================= */}
        <section
          id="experience"
          className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E5E3DF] scroll-mt-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917]">
                Professional Experience
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#44403C] max-w-xl">
                Track record of building and scaling production mobile banking and
                fintech platforms.
              </p>
            </div>

            <a
              href="/documents/Adonias_Haile_J_Resume-latest.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E3DF] bg-white text-xs font-semibold text-[#1C1917] hover:bg-[#F5F5F4] transition-colors self-start md:self-auto"
            >
              <Download className="w-3.5 h-3.5 text-stone-700" />
              <span>Download Full Resume</span>
            </a>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company + exp.period}
                className="bg-white border border-[#E5E3DF] rounded-2xl p-6 sm:p-7 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#E5E3DF]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#1C1917]">
                        {exp.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`text-xs font-semibold ${exp.badgeColor}`}
                      >
                        {exp.highlightMetric}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E] font-medium">
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1C1917] font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E3DF] text-xs font-mono font-medium text-[#44403C] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-stone-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#44403C] leading-relaxed">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-2 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-[#E5E3DF] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E5E3DF] text-xs font-mono text-[#44403C]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Academic Distinction Card (Flattened Clean Container, Zero Box-Within-Box) */}
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5E3DF] text-[#1C1917] flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1C1917]">
                      Bahir Dar University — Faculty of Computing (BIT)
                    </h3>
                    <h4 className="text-sm font-semibold text-[#1C1917] mt-0.5">
                      B.Sc. in Software Engineering
                    </h4>
                    <p className="text-xs text-[#57534E] mt-0.5">
                      5-Year Engineering Program (2019 – 2024) · Bahir Dar Institute of Technology, Ethiopia
                    </p>
                  </div>
                </div>

                <Badge
                  variant="outline"
                  className="bg-[#FAF8F5] border-[#E5E3DF] text-[#1C1917] font-semibold text-xs px-3 py-1 self-start sm:self-auto flex-shrink-0"
                >
                  CGPA: 3.86 / 4.00 (High Distinction)
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECH STACK ================= */}
        <section
          id="skills"
          className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E5E3DF] scroll-mt-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917]">
                Tech Stack
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#44403C] max-w-xl">
                Languages, frameworks, protocols, and developer tools used across
                production applications.
              </p>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#57534E]" />
              <input
                type="text"
                placeholder="Filter tech stack..."
                value={skillSearchQuery}
                onChange={(e) => setSkillSearchQuery(e.target.value)}
                aria-label="Filter tech stack"
                className="w-full pl-9 pr-4 py-2 rounded-full border border-[#E5E3DF] bg-white text-xs text-[#1C1917] placeholder:text-[#57534E] focus:outline-none focus:border-[#1C1917]"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 mb-6 overflow-x-auto">
            {[
              { id: "all", label: "All Stack" },
              { id: "mobile", label: "Mobile" },
              { id: "backend", label: "Backend & Rails" },
              { id: "devops", label: "DevOps & Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSkillCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${selectedSkillCategory === tab.id
                  ? "bg-[#1C1917] text-white"
                  : "bg-white border border-[#E5E3DF] text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF8F5]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Small containers only: icon & name in natural flex wrap */}
          <div className="flex flex-wrap gap-2.5">
            {filteredSkills.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E5E3DF] shadow-sm hover:border-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1C1917] whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= RECOMMENDATIONS & ENDORSEMENTS ================= */}
        <section
          id="testimonials"
          className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E5E3DF] scroll-mt-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917]">
                Recommendations &amp; Endorsements
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#44403C] max-w-xl">
                Feedback from banking directors, tech leads, and supervisors who
                have worked directly with me.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#E5E3DF]">
              <button
                onClick={() => setTestimonialViewMode("carousel")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${testimonialViewMode === "carousel"
                  ? "bg-[#1C1917] text-white"
                  : "text-[#57534E] hover:text-[#1C1917]"
                  }`}
              >
                Featured Slide
              </button>
              <button
                onClick={() => setTestimonialViewMode("grid")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${testimonialViewMode === "grid"
                  ? "bg-[#1C1917] text-white"
                  : "text-[#57534E] hover:text-[#1C1917]"
                  }`}
              >
                All ({testimonials.length})
              </button>
            </div>
          </div>

          {testimonialViewMode === "carousel" ? (
            <figure className="bg-white border border-[#E5E3DF] rounded-2xl p-6 sm:p-10 shadow-sm m-0">
              <blockquote className="text-base sm:text-lg text-[#1C1917] font-normal leading-relaxed m-0 p-0 border-none">
                &ldquo;{testimonials[activeTestimonial].content}&rdquo;
              </blockquote>

              <figcaption className="mt-6 pt-6 border-t border-[#E5E3DF] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {testimonials[activeTestimonial].image ? (
                    <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E5E3DF] relative flex-shrink-0">
                      <Image
                        src={testimonials[activeTestimonial].image!}
                        alt={testimonials[activeTestimonial].name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-11 h-11 rounded-full ${testimonials[activeTestimonial].avatarBg} text-white font-bold text-xs flex items-center justify-center flex-shrink-0`}
                    >
                      {testimonials[activeTestimonial].initials}
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-bold text-[#1C1917]">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-xs text-[#57534E]">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        (prev) =>
                          (prev - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    aria-label="Previous testimonial"
                    className="px-3 py-1.5 rounded-full border border-[#E5E3DF] bg-white text-xs font-semibold text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
                  >
                    Prev
                  </button>
                  <span aria-live="polite" className="text-xs font-mono font-medium text-[#57534E] px-1">
                    {activeTestimonial + 1} / {testimonials.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        (prev) => (prev + 1) % testimonials.length
                      )
                    }
                    aria-label="Next testimonial"
                    className="px-3 py-1.5 rounded-full border border-[#E5E3DF] bg-white text-xs font-semibold text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
                  >
                    Next
                  </button>
                </div>
              </figcaption>
            </figure>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {testimonials.map((t, idx) => (
                <figure
                  key={t.name + idx}
                  className="bg-white border border-[#E5E3DF] rounded-2xl p-6 flex flex-col justify-between shadow-sm m-0"
                >
                  <blockquote className="text-xs sm:text-sm text-[#44403C] leading-relaxed mb-5 m-0 p-0 border-none">
                    &ldquo;{t.content}&rdquo;
                  </blockquote>

                  <figcaption className="pt-4 border-t border-[#E5E3DF] flex items-center gap-3">
                    {t.image ? (
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E5E3DF] relative flex-shrink-0">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-9 h-9 rounded-full ${t.avatarBg} text-white font-bold text-xs flex items-center justify-center flex-shrink-0`}
                      >
                        {t.initials}
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold text-[#1C1917]">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-[#57534E] leading-snug">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>

        {/* ================= THE DESIGN & CORE PHILOSOPHY ================= */}
        <section
          id="philosophy"
          className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E5E3DF] scroll-mt-20"
        >
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917]">
              Engineering Principles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#44403C]">
              Guiding disciplines behind building fault-tolerant fintech rails, scalable backends, and human-centered mobile software.
            </p>
          </div>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight">
              Mission-critical banking systems demand uncompromising precision, resilient architecture, and zero friction.
            </h3>

            <p className="mt-3 text-sm text-[#44403C] leading-relaxed">
              Financial switch rails and high-throughput transaction backbones do not need to be opaque or clinical. Every interface touchpoint, cryptographic keystore handshake, and micro-interaction is an intentional engineering choice to build trust and eliminate latency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-[#E5E3DF]">
              <div>
                <h4 className="text-sm font-bold text-[#1C1917]">
                  High-Throughput Integrity
                </h4>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  Clean surfaces, high contrast, sub-second response times, and 60fps mobile execution.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1917]">
                  Hardened Security Rails
                </h4>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  Banking-grade cryptography, ISO 8583 standards, biometrics, and zero dropped packets.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1917]">
                  Frictionless Interaction
                </h4>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  Accessible user flows engineered to perform reliably across any mobile device or network bandwidth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT & CALL TO ACTION ================= */}
        <section
          id="contact"
          className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E5E3DF] scroll-mt-20"
        >
          <div className="bg-[#1C1917] border border-[#292524] rounded-3xl p-8 sm:p-14 text-white text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Precision Starts Here
            </h2>

            <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-lg mx-auto">
              Whether you need to architect a high-throughput financial switch,
              roll out an enterprise mobile app, or scale an engineering team —
              I&apos;m ready.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
              <a
                href="mailto:adoniashaile1@gmail.com"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full bg-white text-[#1C1917] font-semibold text-xs sm:text-sm hover:bg-[#F5F5F4] transition-colors shadow-sm w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-stone-800" />
                <span>Email Adonias</span>
              </a>

              <a
                href="https://wa.me/251989858377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full border border-stone-800 bg-stone-900 text-white font-semibold text-xs sm:text-sm hover:bg-stone-800 transition-colors w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href="/documents/Adonias_Haile_J_Resume-latest.pdf"
                download
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full border border-stone-800 bg-stone-900 text-white font-semibold text-xs sm:text-sm hover:bg-stone-800 transition-colors w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-400">
              <button
                onClick={() => copyToClipboard("adoniashaile1@gmail.com", "email")}
                aria-label="Copy email address"
                className="min-h-[42px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-stone-900 border border-stone-800 hover:text-white transition-colors"
              >
                {copiedItem === "email" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>adoniashaile1@gmail.com</span>
              </button>

              <button
                onClick={() => copyToClipboard("+251989858377", "phone")}
                aria-label="Copy phone number"
                className="min-h-[42px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-stone-900 border border-stone-800 hover:text-white transition-colors"
              >
                {copiedItem === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>+251 989 858 377</span>
              </button>

              <div className="inline-flex items-center gap-1.5 text-stone-400 py-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= CLEAN FOOTER ================= */}
      <footer className="bg-white border-t border-[#E5E3DF] py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-[#E5E3DF]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-[#E5E3DF] relative">
                <Image
                  src="/profile-img.jpg"
                  alt="Adonias Haile"
                  fill
                  className="object-cover"
                  sizes="24px"
                />
              </div>
              <span className="text-sm font-bold text-[#1C1917]">
                Adonias Haile
              </span>
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Mobile &amp; Fintech Software Engineer specializing in
              Flutter, Spring Boot, and national banking switch rails.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <h4 className="font-bold text-[#1C1917] mb-2.5">Projects</h4>
              <ul className="space-y-1.5 text-[#57534E]">
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anbesabank.anbesa_plus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    Anbesa Plus
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.eaglelionsystems.connectethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    CBE Connect
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.eaglelionsystems.starpay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    Star Pay
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1C1917] mb-2.5">Connect</h4>
              <ul className="space-y-1.5 text-[#57534E]">
                <li>
                  <a
                    href="https://github.com/habeshacoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/adonias-haile-668312322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/251989858377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1C1917] mb-2.5">Coding</h4>
              <ul className="space-y-1.5 text-[#57534E]">
                <li>
                  <a
                    href="https://leetcode.com/u/Adonias_Haile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hackerrank.com/profile/adoniashaile1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    HackerRank
                  </a>
                </li>
                <li>
                  <a
                    href="https://codeforces.com/profile/Adonias_Haile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1C1917] transition-colors"
                  >
                    Codeforces
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#57534E]">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Adonias Haile · All rights
            reserved.
          </p>
          {/* <p className="m-0">Clean, accessible minimalist bento architecture.</p> */}
        </div>
      </footer>

      {/* ================= COMMAND PALETTE MODAL (⌘K) ================= */}
      {isCommandOpen && (
        <div className="fixed inset-0 z-50 bg-[#1C1917]/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-2xl border border-[#E5E3DF] p-5 shadow-xl max-w-lg w-full animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E5E3DF]">
              <Search className="w-4 h-4 text-[#57534E]" />
              <input
                type="text"
                placeholder="Type a section or technology..."
                value={commandSearch}
                onChange={(e) => setCommandSearch(e.target.value)}
                autoFocus
                aria-label="Search sections or technologies"
                className="w-full text-sm text-[#1C1917] placeholder:text-[#57534E] focus:outline-none"
              />
              <button
                onClick={() => setIsCommandOpen(false)}
                aria-label="Close command palette"
                className="p-1 rounded-full text-[#57534E] hover:text-[#1C1917]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3 space-y-1 max-h-64 overflow-y-auto">
              {[
                { id: "projects", label: "Featured Projects (6 Apps)" },
                { id: "experience", label: "Career Experience" },
                { id: "skills", label: "Tech Stack" },
                { id: "testimonials", label: "Recommendations & Endorsements" },
                { id: "philosophy", label: "Design Philosophy" },
                { id: "contact", label: "Contact & Resume" },
              ]
                .filter(
                  (item) =>
                    !commandSearch ||
                    item.label
                      .toLowerCase()
                      .includes(commandSearch.toLowerCase())
                )
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsCommandOpen(false);
                      scrollToSection(item.id);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#1C1917] hover:bg-[#FAF8F5] transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#57534E]" />
                  </button>
                ))}
            </div>

            <div className="mt-3 pt-3 border-t border-[#E5E3DF] flex items-center justify-between text-xs text-[#57534E] font-mono">
              <span>Press ESC to close</span>
              <span>Adonias Haile Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
