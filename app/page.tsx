"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
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
  Building2,
  Calendar,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Search,
  Terminal,
  Shield,
  Cpu,
  Database,
  Network,
  Copy,
  Check,
  Command,
  ArrowUpRight,
  Sliders,
  Flame,
  Zap,
  Compass,
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
  const [skillViewMode, setSkillViewMode] = useState<"matrix" | "topology">("matrix");
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<"switch" | "mobile" | "middleware">("switch");

  // Expanded project architecture cards
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});

  // Command palette modal state
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandSearch, setCommandSearch] = useState("");

  // Copy feedback state
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Recommendations state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialAutoPlay, setIsTestimonialAutoPlay] = useState(true);
  const [testimonialViewMode, setTestimonialViewMode] = useState<"carousel" | "grid">("carousel");

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
      avatarBg: "bg-orange-600",
      content:
        "Adonias demonstrated sharp analytical skills and a solid grasp of backend development. Responsible for developing and integrating APIs, writing clean code in Java, and troubleshooting financial platforms. In addition he worked on front-end projects on Android and iOS app upgrades. A fast learner who quickly adapts to new tools and frameworks.",
    },
    {
      name: "Kinfe Guesh",
      role: "Infrastructure Lead & DevSecOps | Platform Engineering | AWS",
      initials: "KG",
      avatarBg: "bg-purple-600",
      content:
        "I've had the pleasure of working closely with Adonias on integration and infrastructure initiatives. He is a strong problem solver who quickly understands concepts beyond development, with a good understanding of the broader IT environment. Combines technical skills with a strong sense of ownership.",
      url: "https://linkedin.com/in/adonias-haile-668312322",
    },
    {
      name: "Qemer Software Technology",
      role: "Software Development Company",
      image: "/testimonials/qemer tech logo.png",
      content:
        "Adonias is a skilled Full-Stack Mobile Developer, a true all-rounder in the world of mobile applications. He possesses the unique ability to handle every aspect of mobile development, from crafting intuitive user interfaces to building robust server-side infrastructure.",
      url: "https://www.qemertech.com/team/adonias-haile/",
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
      role: "Front-end Developer & AI Enthusiast",
      image: "/testimonials/testi_amedee.jpeg",
      content:
        "Adonias is a good solution thinker. His capacity of analysis to come with a solution is incredible. We worked together on a project and I will totally recommend him to anyone.",
    },
  ];

  // Technical Competencies
  const skills = [
    // MOBILE
    {
      name: "Flutter & Dart",
      category: "mobile",
      level: "Production Lead",
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
      topologyTier: "client",
    },
    {
      name: "State Management",
      category: "mobile",
      level: "Architectural",
      description:
        "Predictable application state flow using BLoC, Riverpod, and Provider patterns with clean reactive streams.",
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      tag: "Architecture Pattern",
      competencies: [
        "BLoC Pattern",
        "Riverpod",
        "Reactive Streams",
        "Immutable State Flow",
      ],
      topologyTier: "client",
    },
    {
      name: "Mobile Security & SDKs",
      category: "mobile",
      level: "Specialist",
      description:
        "TLS certificate pinning, biometric keystore authentication, Sopra DBS SDK integration, and encrypted local storage.",
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      tag: "Security & Crypto",
      competencies: [
        "TLS Certificate Pinning",
        "Biometric Keystore",
        "Sopra Banking SDK",
        "Data Obfuscation",
      ],
      topologyTier: "client",
    },
    {
      name: "Firebase & Cloud Push",
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
      topologyTier: "client",
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
      topologyTier: "client",
    },
    {
      name: "App Store & Play Console",
      category: "mobile",
      level: "Lead Engineer",
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
      topologyTier: "client",
    },

    // BACKEND & FINTECH
    {
      name: "Java",
      category: "backend",
      level: "Core Backend",
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
      topologyTier: "middleware",
    },
    {
      name: "Spring Boot",
      category: "backend",
      level: "Microservices Lead",
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
      topologyTier: "middleware",
    },
    {
      name: "WSO2 Micro Integrator",
      category: "backend",
      level: "Enterprise ESB",
      description:
        "Middleware integration connecting core banking platforms, digital channels, and external national financial switches.",
      icon: <Server className="w-8 h-8 text-orange-400" />,
      tag: "Enterprise Middleware",
      competencies: [
        "ESB Integration",
        "Payload Mediation",
        "National Switch",
        "Fault Tolerance",
      ],
      topologyTier: "middleware",
    },
    {
      name: "Fintech Switch & Rails",
      category: "backend",
      level: "Integration Specialist",
      description:
        "ISO 8583 banking switch protocols, Fayda National ID verification, and IPS (Instant Payment System) interbank rails.",
      icon: <Network className="w-8 h-8 text-emerald-400" />,
      tag: "Financial Rails",
      competencies: [
        "ISO 8583 Switch",
        "Fayda National ID",
        "IPS Instant Payment",
        "Core Settlement",
      ],
      topologyTier: "core",
    },
    {
      name: "Redis",
      category: "backend",
      level: "In-Memory",
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
      topologyTier: "middleware",
    },
    {
      name: "Python",
      category: "backend",
      level: "Automation",
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
      topologyTier: "middleware",
    },

    // DEVOPS & TOOLS
    {
      name: "Docker",
      category: "devops",
      level: "Containers",
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
      topologyTier: "core",
    },
    {
      name: "CI/CD & GitHub Actions",
      category: "devops",
      level: "Pipelines",
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
      topologyTier: "core",
    },
    {
      name: "Figma (UI/UX Design)",
      category: "devops",
      level: "Product Design",
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
      topologyTier: "client",
    },
    {
      name: "Clean Architecture & Git",
      category: "devops",
      level: "Standards",
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
      topologyTier: "core",
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
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
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
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
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
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      highlightMetric: "Ride-Hailing & Payment Gateways",
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
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
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
    category: string;
    description: string;
    androidUrl?: string;
    iosUrl?: string;
    driverUrl?: string;
    liveUrl?: string;
    designUrl?: string;
    tags: string[];
    highlights?: string;
    architectureSpecs?: {
      architecture: string;
      integration: string;
      security: string;
      protocols: string;
    };
  }

  // All 8 Production Projects
  const projects: Project[] = [
    {
      title: "Anbesa Plus Mobile Banking",
      subtitle: "Lion International Bank Official Banking App",
      category: "mobile",
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
      highlights: "500K+ Downloads • Live on Play Store & App Store • Banking Grade Security",
      architectureSpecs: {
        architecture: "Clean Architecture with BLoC State Management & Repository Layer",
        integration: "WSO2 Micro Integrator ESB & Java Spring Boot Microservices connecting Sopra DBS",
        security: "TLS Certificate Pinning, Biometric Keystore, Obfuscated Bytecode, Session Expiry",
        protocols: "ISO 8583 Switch, RESTful JSON, National Fayda ID API, IPS Real-Time Settlement",
      },
    },
    {
      title: "CBE Connect",
      subtitle: "Commercial Bank of Ethiopia Mobile Platform",
      category: "mobile",
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
      highlights: "Production Banking App • Active Feature Increments • Enterprise Scale",
      architectureSpecs: {
        architecture: "Modular Feature Architecture with Riverpod & Immutable State Models",
        integration: "Enterprise Banking Middleware and Secure Customer Account Endpoints",
        security: "Device Keystore Binding, Tamper Detection, Encrypted In-Memory Storage",
        protocols: "RESTful JSON, Multi-Factor Authentication, Dynamic Account Sync",
      },
    },
    {
      title: "Star Pay",
      subtitle: "Modern Fintech Digital Wallet & Payment Platform",
      category: "mobile",
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
        architecture: "Event-Driven Flutter Architecture with Reactive Transaction Streams",
        integration: "Digital Merchant QR APIs, Telecom Airtime Switch, Utility Billers",
        security: "PIN & Biometric Auth, Tokenized Session Bearers, Anti-Screenshot Protections",
        protocols: "EMVCo QR Standards, RESTful Payment Gateway, Real-Time Webhooks",
      },
    },
    {
      title: "resuCV Platform",
      subtitle: "Intelligent Resume & Career Platform (Personal SaaS)",
      category: "saas",
      description:
        "Full-Stack SaaS platform empowering job seekers and professionals to build ATS-optimized resumes with live PDF export, structured data schemas, and career management tools.",
      liveUrl: "https://www.resucv.com",
      tags: ["Full-Stack SaaS", "TypeScript", "PDF Generation", "Cloud Platform", "Live Product"],
      highlights: "Live SaaS at resucv.com • Production Users • End-to-End Delivery",
      architectureSpecs: {
        architecture: "High-Performance Cloud Architecture with Distributed Asset Generation",
        integration: "Dynamic PDF Vector Renderer, Structured JSON Resume Schemas",
        security: "OAuth 2.0 Identity Management, Encrypted Document Storage, Rate Limiting",
        protocols: "RESTful APIs, Headless Rendering Engine, Edge CDN Distribution",
      },
    },
    {
      title: "GoSkyHy Mobile App",
      subtitle: "Flight, Hotel & Travel Booking Solution",
      category: "mobile",
      description:
        "Feature-rich travel booking mobile application offering travelers real-time flight search, hotel reservations, interactive booking schedules, and cloud service integrations with smooth user journeys.",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.goskyhy.mobile&pcampaignid=web_share",
      tags: ["Flutter", "Dart", "Travel Tech", "REST APIs", "State Management"],
      highlights: "Live on Play Store • Seamless Booking UI • Real-time APIs",
      architectureSpecs: {
        architecture: "BLoC State Pattern with Paginated Result Streams & Filter Pipelines",
        integration: "Global Distribution System (GDS) Flight APIs & Hotel Inventory Connectors",
        security: "PCI-DSS Compliant Payment Tokenization, Secure Card Storage",
        protocols: "RESTful JSON, WebSocket Fare Updates, Push Notification Schedules",
      },
    },
    {
      title: "Swift Delivery",
      subtitle: "On-Demand Package Dispatch & Live Courier Tracking",
      category: "mobile",
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
        architecture: "Clean Architecture with Reactive Geolocation Stream Controllers",
        integration: "Google Maps SDK, Directions API, Firebase Realtime Database",
        security: "Role-Based Firebase Security Rules, Phone Number Verification",
        protocols: "Bidirectional WebSockets, Polyline Path Smoothing, FCM Multicast",
      },
    },
    {
      title: "Alibo Market",
      subtitle: "E-Commerce Mobile Marketplace & Figma UI/UX",
      category: "mobile",
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
      highlights: "Figma Design System • Dual Payment Gateways • Clean Architecture",
      architectureSpecs: {
        architecture: "Component-Driven Flutter Design System matching Figma Tokens",
        integration: "Chapa Payment Gateway, Campay Mobile Money, Firebase Backend",
        security: "Signed Webhook Verification, Tokenized Payment Requests",
        protocols: "RESTful JSON, Multi-Currency Calculation, Push Alerts",
      },
    },
    {
      title: "Swift Ride & Swift Ride Driver",
      subtitle: "Dual Passenger & Driver Ride-Hailing Platform",
      category: "mobile",
      description:
        "Full-fledged urban mobility system featuring twin mobile applications for passengers and drivers. Incorporates live GPS geolocation, automated dispatch algorithms, fare estimation engines, and in-app messaging.",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.aliboMarket.alibo",
      driverUrl:
        "https://play.google.com/store/apps/details?id=com.aliboMarket.alibo",
      tags: [
        "Flutter",
        "Google Maps",
        "WebSockets",
        "Ride-Hailing",
        "Dual Apps",
        "Qemer Tech",
      ],
      highlights: "Live Driver Dispatch • Turn-by-Turn GPS • Real-time Pricing",
      architectureSpecs: {
        architecture: "Dual Codebase with Shared Core Domain and State Models",
        integration: "Custom WebSocket Dispatch Server, Distance Matrix Calculation",
        security: "Driver License & Vehicle Verification, Secure Location Streams",
        protocols: "Low-Latency WebSocket Frames, Background Geofence Triggers",
      },
    },
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
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
  }, [skills, selectedSkillCategory, skillSearchQuery]);

  // Testimonial autoplay
  useEffect(() => {
    if (!isTestimonialAutoPlay || testimonialViewMode !== "carousel") return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isTestimonialAutoPlay, testimonialViewMode, testimonials.length]);

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "experience", "projects", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    setIsCommandOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-orange-500 selection:text-white font-sans antialiased">
      {/* Background ambient mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#030712]/90 backdrop-blur-md border-b border-gray-800/80 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-3.5">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                AH
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Adonias Haile
                </span>
                <span className="hidden sm:block text-[10px] text-gray-400 font-mono tracking-tight uppercase">
                  Software Engineer • Mobile & Fintech
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { id: "home", label: "Home" },
                { id: "skills", label: "Skills & Architecture" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects (8)" },
                { id: "testimonials", label: "Recommendations" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeSection === item.id
                      ? "text-orange-400 bg-orange-500/10 shadow-inner"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Quick Command Trigger Pill */}
              <button
                onClick={() => setIsCommandOpen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-orange-500/50 text-gray-400 hover:text-orange-300 text-xs font-mono transition-all"
                title="Open Quick Command Palette (⌘K)"
              >
                <Command className="w-3.5 h-3.5" />
                <span className="text-[11px]">⌘K</span>
              </button>

              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 bg-gray-900/60 text-gray-200 hover:bg-gray-800 hover:text-white text-xs font-medium"
                onClick={() =>
                  window.open(
                    "/documents/Adonias_Haile_J_Resume-latest.pdf",
                    "_blank"
                  )
                }
              >
                <Download className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
                Resume
              </Button>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-400 text-white shadow-md shadow-orange-500/25 text-xs font-medium"
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
            <div className="lg:hidden py-4 border-t border-gray-800 bg-[#030712]/98 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1">
                {[
                  { id: "home", label: "Home" },
                  { id: "skills", label: "Skills & Architecture" },
                  { id: "experience", label: "Work Experience" },
                  { id: "projects", label: "Featured Projects (8)" },
                  { id: "testimonials", label: "Recommendations" },
                  { id: "contact", label: "Get In Touch" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-orange-400 bg-orange-500/10 font-semibold"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 mt-3 border-t border-gray-800 flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-gray-700 bg-gray-900 text-gray-200"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsCommandOpen(true);
                  }}
                >
                  <Command className="w-4 h-4 mr-2 text-orange-400" />
                  Quick Action Palette (⌘K)
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-white"
                  onClick={() =>
                    window.open(
                      "/documents/Adonias_Haile_J_Resume-latest.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Column - Content & Telemetry Deck */}
            <div className="flex flex-col justify-center space-y-6 lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs sm:text-sm font-medium w-fit mx-auto lg:mx-0 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Software Engineering Roles
              </div>

              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-white">Adonias Haile</span>
                  <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                    Software Engineer
                  </span>
                </h1>
                <p className="text-sm sm:text-lg font-medium text-orange-200/90 font-mono">
                  Fintech Integration • Java Spring Boot • Flutter Mobile • Enterprise APIs
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Software engineer with proven banking and fintech experience. Building secure enterprise{" "}
                <span className="text-white font-medium">Java Spring Boot</span> microservices,{" "}
                <span className="text-white font-medium">WSO2 Micro Integrator</span> middleware, payment switch connectivity, and shipping production{" "}
                <span className="text-white font-medium">Flutter mobile</span> applications end to end.
              </p>

              {/* Interactive Production Architecture Telemetry Console (Wahoo Element) */}
              <div className="w-full rounded-2xl bg-gray-900/90 border border-gray-800 shadow-2xl p-4 sm:p-5 text-left backdrop-blur-xl">
                {/* Console Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 ml-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-orange-400" />
                      production_telemetry.live
                    </span>
                  </div>

                  {/* Telemetry Switcher Tabs */}
                  <div className="inline-flex rounded-lg bg-gray-950/80 p-0.5 border border-gray-800 text-[11px] font-mono">
                    <button
                      onClick={() => setActiveTelemetryTab("switch")}
                      className={`px-2 py-1 rounded-md transition-all ${
                        activeTelemetryTab === "switch"
                          ? "bg-orange-500 text-white font-semibold"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      Lion Bank Switch
                    </button>
                    <button
                      onClick={() => setActiveTelemetryTab("mobile")}
                      className={`px-2 py-1 rounded-md transition-all ${
                        activeTelemetryTab === "mobile"
                          ? "bg-orange-500 text-white font-semibold"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      CBE Mobile
                    </button>
                    <button
                      onClick={() => setActiveTelemetryTab("middleware")}
                      className={`px-2 py-1 rounded-md transition-all ${
                        activeTelemetryTab === "middleware"
                          ? "bg-orange-500 text-white font-semibold"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      WSO2 & DBS
                    </button>
                  </div>
                </div>

                {/* Telemetry Tab Content */}
                {activeTelemetryTab === "switch" && (
                  <div className="space-y-1.5 font-mono text-xs text-gray-300">
                    <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                      <span className="text-gray-500">Core Banking System</span>
                      <span className="text-white font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Sopra Banking DBS (Hotfix 12)
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                      <span className="text-gray-500">Financial Rails</span>
                      <span className="text-orange-400">ISO 8583 Switch & IPS Real-Time</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500">National ID Integration</span>
                      <span className="text-emerald-400">Fayda ID KYC Onboarding Live</span>
                    </div>
                  </div>
                )}

                {activeTelemetryTab === "mobile" && (
                  <div className="space-y-1.5 font-mono text-xs text-gray-300">
                    <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                      <span className="text-gray-500">Mobile Architecture</span>
                      <span className="text-white font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Flutter BLoC • Clean Architecture
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                      <span className="text-gray-500">Mobile Security</span>
                      <span className="text-orange-400">TLS Pinning & Biometric Crypto Keystore</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500">Store Releases</span>
                      <span className="text-emerald-400">Google Play & App Store Managed</span>
                    </div>
                  </div>
                )}

                {activeTelemetryTab === "middleware" && (
                  <div className="space-y-1.5 font-mono text-xs text-gray-300">
                    <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                      <span className="text-gray-500">Integration Middleware</span>
                      <span className="text-white font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        WSO2 Micro Integrator (MI) ESB
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-800/40">
                      <span className="text-gray-500">Microservices Backend</span>
                      <span className="text-orange-400">Java Spring Boot Hexagonal APIs</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500">Cache & Auth</span>
                      <span className="text-emerald-400">Redis Distributed Cache & Keycloak JWT</span>
                    </div>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-orange-500 hover:bg-orange-400 text-white px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold shadow-lg shadow-orange-500/25"
                  size="lg"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Featured Work (8)
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-900/60 text-gray-100 hover:bg-gray-800 hover:border-gray-600 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-medium"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "/documents/Adonias_Haile_J_Resume-latest.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="w-4 h-4 mr-2 text-orange-400" />
                  Latest Resume (PDF)
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/60 px-4 py-2.5 text-sm sm:text-base font-medium"
                  size="lg"
                  onClick={() => scrollToSection("testimonials")}
                >
                  <Award className="w-4 h-4 mr-2 text-amber-400" />
                  8 Recommendations
                </Button>
              </div>

              {/* Interactive Quick-Copy & Social Pills */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1 flex-wrap">
                {/* Copy Email Button with instant feedback */}
                <button
                  onClick={() => copyToClipboard("adoniashaile1@gmail.com", "email")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 hover:border-orange-500/50 text-xs font-mono text-gray-300 hover:text-white transition-all shadow-sm"
                  title="Click to copy email"
                >
                  {copiedItem === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-orange-400" />
                      <span>adoniashaile1@gmail.com</span>
                      <Copy className="w-3 h-3 text-gray-500 ml-1" />
                    </>
                  )}
                </button>

                {/* Copy WhatsApp Button */}
                <button
                  onClick={() => copyToClipboard("+251989858377", "phone")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 hover:border-emerald-500/50 text-xs font-mono text-gray-300 hover:text-white transition-all shadow-sm"
                  title="Click to copy WhatsApp number"
                >
                  {copiedItem === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Phone Copied!</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>+251 989 858 377</span>
                      <Copy className="w-3 h-3 text-gray-500 ml-1" />
                    </>
                  )}
                </button>

                <a
                  href="https://github.com/habeshacoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/adonias-haile-668312322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-orange-400 hover:border-orange-500/50 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column - Profile & Academic Education Card */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md">
                {/* Luminous glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-amber-500/15 to-transparent rounded-3xl blur-2xl transform -rotate-2" />

                <div className="relative bg-gray-900/90 border border-gray-800 p-6 sm:p-7 rounded-3xl shadow-2xl backdrop-blur-xl">
                  {/* Floating metric badge on top of profile card */}
                  <div className="absolute -top-3 -right-3 p-2.5 rounded-xl bg-gray-900 border border-gray-700/80 shadow-xl shadow-emerald-500/10 text-center">
                    <div className="text-lg font-bold text-emerald-400">
                      500K+
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Users Impacted
                    </div>
                  </div>

                  {/* Photo container */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full overflow-hidden border-4 border-orange-500/40 shadow-xl shadow-orange-500/15 mb-5">
                    <Image
                      src="/profile-img.jpg"
                      alt="Adonias Haile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Profile info caption */}
                  <div className="text-center space-y-1 mb-5">
                    <h3 className="text-xl font-bold text-white">
                      Adonias Haile
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Software Engineer & Mobile Specialist
                    </p>
                    <p className="text-xs text-orange-400 flex items-center justify-center gap-1 pt-0.5">
                      <MapPin className="w-3.5 h-3.5" /> Addis Ababa, Ethiopia
                    </p>
                  </div>

                  {/* Mini metrics in hero card */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-800/80 text-center">
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-white">
                        3+ Years
                      </div>
                      <div className="text-[11px] text-gray-400">
                        Engineering Exp
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <div className="text-lg font-bold text-orange-400">
                        7+ Apps
                      </div>
                      <div className="text-[11px] text-gray-400">
                        Contributions
                      </div>
                    </div>
                  </div>

                  {/* Academic Education spanning end-to-end of profile container */}
                  <div className="mt-5 pt-4 border-t border-gray-800/80 -mx-6 sm:-mx-7 px-6 sm:px-7 bg-gray-950/50 rounded-b-3xl">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
                          Academic Education
                        </h4>
                        <p className="text-xs text-gray-200 font-semibold">
                          Bahir Dar University - BIT
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 pl-3 border-l-2 border-orange-500/40 ml-1">
                      <h5 className="font-semibold text-white text-xs sm:text-sm">
                        B.Sc. in Software Engineering
                      </h5>
                      <p className="text-[11px] text-gray-400 leading-snug">
                        Faculty of Computing, Bahir Dar Institute of Technology (BIT Poly Campus), Bahir Dar, Ethiopia
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1 pb-1">
                        <Badge className="bg-orange-950/50 text-orange-300 border-orange-800/50 text-[10px] px-2 py-0.5">
                          2019 – 2024
                        </Badge>
                        <Badge className="bg-emerald-900/40 text-emerald-300 border-emerald-700/50 text-[10px] px-2 py-0.5">
                          CGPA: 3.86 / 4.00 (High Distinction)
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-800/60">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">
                  Banking & Fintech
                </div>
                <div className="text-xs text-gray-400">
                  Core Integrations & Rails
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">
                  Store Release Lead
                </div>
                <div className="text-xs text-gray-400">
                  Google Play & App Store
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">
                  Backend & APIs
                </div>
                <div className="text-xs text-gray-400">
                  Spring Boot • WSO2 MI
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">
                  8 Endorsements
                </div>
                <div className="text-xs text-gray-400">
                  Directors • CTOs • PMs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-500 hover:text-orange-400 transition-colors animate-bounce p-2"
            aria-label="Scroll to Skills"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-16 sm:py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest mb-2">
              Technical Stack & Competencies
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Skills & Technologies
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Cross-platform mobile development with Flutter, enterprise backend integrations with Java Spring Boot, and DevOps workflows.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Controls: Category Filter Tabs, Live Search & View Switcher */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                { id: "all", label: `All Skills (${skills.length})` },
                { id: "mobile", label: "Mobile (Flutter)" },
                { id: "backend", label: "Backend & Fintech" },
                { id: "devops", label: "DevOps & Tools" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSkillCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    selectedSkillCategory === tab.id
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/25 scale-105"
                      : "bg-gray-900/80 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Right Tools: View Mode Toggle & Live Search */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {/* Interactive View Mode Switcher */}
              <div className="inline-flex rounded-xl bg-gray-900 p-1 border border-gray-800 text-xs">
                <button
                  onClick={() => setSkillViewMode("matrix")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    skillViewMode === "matrix"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                  title="Grid Matrix View"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Grid Matrix</span>
                </button>
                <button
                  onClick={() => setSkillViewMode("topology")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    skillViewMode === "topology"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                  title="Interactive System Topology View"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Architecture Topology</span>
                </button>
              </div>

              {/* Quick Search */}
              <div className="relative w-48 sm:w-56">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter skills..."
                  value={skillSearchQuery}
                  onChange={(e) => setSkillSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/80 transition-colors shadow-inner"
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
          </div>

          {/* View Mode 1: Interactive System Topology (Wahoo Visual) */}
          {skillViewMode === "topology" && (
            <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gray-900/80 border border-gray-800 shadow-2xl backdrop-blur-xl">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-semibold">
                  Interactive Production Flow
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  End-to-End Enterprise System Topology
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  How Adonias connects mobile client experiences through secure enterprise middleware to core banking platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Client Tier */}
                <div className="p-5 rounded-2xl bg-gray-950/80 border border-orange-500/30 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                    <span className="text-xs font-mono font-bold text-orange-400 flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4" />
                      Tier 1: Client Front
                    </span>
                    <Badge className="bg-orange-500/10 text-orange-300 border-orange-500/20 text-[10px]">
                      Mobile
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Flutter cross-platform apps, BLoC reactive streams, method channels, and biometric crypto keystore.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Flutter & Dart", "BLoC Pattern", "TLS Pinning", "Keystore Auth"].map((item, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-orange-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middleware Tier */}
                <div className="p-5 rounded-2xl bg-gray-950/80 border border-amber-500/30 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                      <Server className="w-4 h-4" />
                      Tier 2: Middleware
                    </span>
                    <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/20 text-[10px]">
                      Enterprise ESB
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    WSO2 Micro Integrator (MI) payload mediation, Java Spring Boot microservices, Keycloak JWT, and Redis caches.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["WSO2 MI", "Java Spring Boot", "Redis Caching", "Keycloak JWT"].map((item, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-amber-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Banking & Switch Tier */}
                <div className="p-5 rounded-2xl bg-gray-950/80 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                      <Network className="w-4 h-4" />
                      Tier 3: Core & Switch
                    </span>
                    <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/20 text-[10px]">
                      Core Banking
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Sopra Banking DBS core, ISO 8583 banking switch rails, Fayda National ID onboarding, and IPS interbank settlement.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Sopra DBS", "ISO 8583 Switch", "Fayda ID", "IPS Rails"].map((item, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-emerald-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* View Mode 2: Skills Grid Matrix (No arbitrary % bar) */}
          {filteredSkills.length === 0 ? (
            <div className="text-center py-12 bg-gray-900/30 rounded-2xl border border-gray-800">
              <Search className="w-10 h-10 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-300 font-medium">No skills matched your search query</p>
              <button
                onClick={() => {
                  setSelectedSkillCategory("all");
                  setSkillSearchQuery("");
                }}
                className="mt-3 text-xs text-orange-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/70 border-gray-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <CardContent className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2.5 rounded-xl bg-gray-800/80 border border-gray-700/60 group-hover:scale-110 group-hover:border-orange-500/40 transition-all flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <div className="text-right space-y-1">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-orange-950/40 text-orange-300 border border-orange-800/40">
                          {skill.tag}
                        </span>
                        <div className="text-[11px] text-gray-400 font-mono">
                          {skill.level}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed mt-1.5">
                        {skill.description}
                      </p>
                    </div>

                    {/* Competency Chips */}
                    {skill.competencies && (
                      <div className="pt-2 border-t border-gray-800/80 flex flex-wrap gap-1.5">
                        {skill.competencies.map((comp, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-gray-300 px-2 py-0.5 rounded-md bg-gray-800/60 border border-gray-700/50 group-hover:border-orange-500/30 transition-colors"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    )}
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
        className="py-16 sm:py-24 bg-gray-900/40 border-t border-gray-800/80 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest mb-2">
              Career Trajectory
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Work Experience
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Proven track record in enterprise banking software, fintech middleware, and high-impact mobile solutions.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative border-l-2 border-gray-800 pl-4 sm:pl-8 ml-2 sm:ml-6 space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Glowing Timeline node */}
                <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-900 border-2 border-orange-500 group-hover:scale-125 group-hover:bg-orange-500 transition-all shadow-md shadow-orange-500/30" />

                <Card className="bg-gray-900/80 border-gray-800 hover:border-orange-500/40 transition-all shadow-lg">
                  <CardContent className="p-5 sm:p-7">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                            {exp.title}
                          </h4>
                          {exp.highlightMetric && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/25">
                              ★ {exp.highlightMetric}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap mt-1">
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-orange-400 hover:underline flex items-center gap-1"
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
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
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

      {/* Featured Projects Section (Clean cards with zero image banners + Expandable Architecture drawer) */}
      <section id="projects" className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest mb-2">
              Shipped & Production Work
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Projects (8)
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Mobile banking apps, fintech integrations, and design systems I&apos;ve contributed to.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const isExpanded = !!expandedProjects[index];
              return (
                <Card
                  key={index}
                  className="bg-gray-900/80 border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
                >
                  <CardContent className="p-5 sm:p-6 space-y-3.5">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          {project.subtitle}
                        </span>
                        {project.highlights && (
                          <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                            ★ {project.highlights}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors pt-1">
                        {project.title}
                      </h4>
                    </div>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-orange-950/40 text-orange-300 border-orange-800/40 text-[11px] px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Architecture Drawer Toggle Button (Wahoo Factor) */}
                    {project.architectureSpecs && (
                      <div className="pt-2">
                        <button
                          onClick={() => toggleProjectExpand(index)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-400 hover:text-orange-300 py-1 focus:outline-none transition-colors"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>{isExpanded ? "Hide Architecture Specs" : "Inspect Architecture Specs"}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {/* Collapsible Architecture Details */}
                        {isExpanded && (
                          <div className="mt-2.5 p-3.5 rounded-xl bg-gray-950/80 border border-gray-800 space-y-2 text-xs font-mono text-gray-300 animate-in fade-in-50 duration-200">
                            <div>
                              <span className="text-orange-400 font-semibold block text-[10px] uppercase">
                                Core Architecture
                              </span>
                              <span className="text-gray-300">{project.architectureSpecs.architecture}</span>
                            </div>
                            <div>
                              <span className="text-amber-400 font-semibold block text-[10px] uppercase">
                                Enterprise Integration
                              </span>
                              <span className="text-gray-300">{project.architectureSpecs.integration}</span>
                            </div>
                            <div>
                              <span className="text-emerald-400 font-semibold block text-[10px] uppercase">
                                Security & Compliance
                              </span>
                              <span className="text-gray-300">{project.architectureSpecs.security}</span>
                            </div>
                            <div>
                              <span className="text-cyan-400 font-semibold block text-[10px] uppercase">
                                Protocols & Rails
                              </span>
                              <span className="text-gray-300">{project.architectureSpecs.protocols}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>

                  {/* Actions Footer */}
                  <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-2">
                    {project.androidUrl && (
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-400 text-white text-xs font-medium shadow-sm shadow-orange-500/20"
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

                    {/* Figma if present */}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials / Recommendations Section (No stars, No green verified badges, pure typography & spotlight animation) */}
      <section
        id="testimonials"
        className="py-16 sm:py-24 bg-gray-900/40 border-t border-gray-800/80 relative overflow-hidden z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Peer & Leadership Recommendations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-white">
              What People Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Endorsements and feedback from colleagues, engineering leaders, and clients I&apos;ve collaborated with
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />

            {/* View Mode & Autoplay Toolbar */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center p-1 rounded-xl bg-gray-800/90 border border-gray-700/80 shadow-inner">
                <button
                  type="button"
                  onClick={() => setTestimonialViewMode("carousel")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    testimonialViewMode === "carousel"
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
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
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>All Recommendations ({testimonials.length})</span>
                </button>
              </div>

              {testimonialViewMode === "carousel" && (
                <button
                  type="button"
                  onClick={() => setIsTestimonialAutoPlay(!isTestimonialAutoPlay)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gray-800/80 border border-gray-700 text-xs text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
                  title={isTestimonialAutoPlay ? "Pause Auto-play" : "Resume Auto-play"}
                >
                  {isTestimonialAutoPlay ? (
                    <>
                      <Pause className="w-3 h-3 text-orange-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-orange-400" />
                      <span>Play</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* SPOTLIGHT THEATRE VIEW */}
          {testimonialViewMode === "carousel" && (
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/90 border-gray-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                {/* Visual quote accent */}
                <div className="absolute top-6 right-6 text-orange-500/10 pointer-events-none">
                  <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
                </div>

                <CardContent className="p-6 sm:p-10 relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                    {/* Endorser Avatar */}
                    {testimonials[activeTestimonial].image ? (
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-orange-500/40 flex-shrink-0 shadow-lg">
                        <Image
                          src={testimonials[activeTestimonial].image!}
                          alt={testimonials[activeTestimonial].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${
                          testimonials[activeTestimonial].avatarBg || "bg-orange-600"
                        } flex items-center justify-center font-bold text-white text-xl sm:text-2xl border-2 border-orange-500/40 flex-shrink-0 shadow-lg`}
                      >
                        {testimonials[activeTestimonial].initials ||
                          testimonials[activeTestimonial].name.substring(0, 2).toUpperCase()}
                      </div>
                    )}

                    <div className="space-y-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-xs sm:text-sm text-orange-400 font-medium">
                        {testimonials[activeTestimonial].role}
                      </p>
                      {testimonials[activeTestimonial].url && (
                        <a
                          href={testimonials[activeTestimonial].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-white underline pt-0.5"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>View Reference</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Clean Quote Text (No stars, No green verified badges) */}
                  <blockquote className="text-gray-200 text-sm sm:text-lg leading-relaxed italic border-l-2 border-orange-500/50 pl-4 my-6">
                    &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                  </blockquote>

                  {/* Navigation controls */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-800/80">
                    <span className="text-xs font-mono text-gray-400">
                      Recommendation {activeTestimonial + 1} of {testimonials.length}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setActiveTestimonial((prev) =>
                            prev === 0 ? testimonials.length - 1 : prev - 1
                          )
                        }
                        className="p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-orange-500/50 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                        }
                        className="p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-orange-500/50 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Endorser Switcher Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {testimonials.map((t, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      activeTestimonial === index
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/25 scale-105"
                        : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* GRID SHOWCASE VIEW */}
          {testimonialViewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 border-gray-800 hover:border-orange-500/40 transition-all shadow-lg flex flex-col justify-between"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3.5">
                      {t.image ? (
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-orange-500/30 flex-shrink-0">
                          <Image src={t.image} alt={t.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div
                          className={`w-12 h-12 rounded-xl ${
                            t.avatarBg || "bg-orange-600"
                          } flex items-center justify-center font-bold text-white text-base border border-orange-500/30 flex-shrink-0`}
                        >
                          {t.initials || t.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h4 className="text-base font-bold text-white">{t.name}</h4>
                        <p className="text-xs text-orange-400 font-medium">{t.role}</p>
                      </div>
                    </div>

                    <blockquote className="text-gray-300 text-xs sm:text-sm leading-relaxed italic border-l-2 border-orange-500/40 pl-3">
                      &ldquo;{t.content}&rdquo;
                    </blockquote>

                    {t.url && (
                      <div className="pt-2 border-t border-gray-800/80">
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-gray-400 hover:text-orange-400 inline-flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Reference
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest mb-2">
              Let&apos;s Connect
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Available for full-time software engineering roles, mobile contract projects, and fintech integrations.
            </p>
            <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {/* Email Card with 1-click copy */}
              <Card className="bg-gray-900/70 border-gray-800 text-center hover:border-orange-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    Direct Email
                  </h4>
                  <a
                    href="mailto:adoniashaile1@gmail.com"
                    className="text-xs text-gray-300 hover:text-orange-400 break-all transition-colors font-mono block mb-3"
                  >
                    adoniashaile1@gmail.com
                  </a>
                  <button
                    onClick={() => copyToClipboard("adoniashaile1@gmail.com", "card-email")}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  >
                    {copiedItem === "card-email" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </CardContent>
              </Card>

              {/* WhatsApp & Phone Card with 1-click copy */}
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
                    className="text-xs text-gray-300 hover:text-emerald-400 transition-colors font-mono block mb-3"
                  >
                    +251 989 858 377
                  </a>
                  <button
                    onClick={() => copyToClipboard("+251989858377", "card-phone")}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  >
                    {copiedItem === "card-phone" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </button>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="bg-gray-900/70 border-gray-800 text-center hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    Location & Mobility
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Addis Ababa, Ethiopia
                  </p>
                  <p className="text-[11px] text-orange-400 font-mono mt-1">
                    Open to Remote Globally & Relocation
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Competitive Coding & Problem Solving Badges */}
            <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 flex flex-wrap items-center justify-between gap-3 mb-8">
              <span className="text-xs font-mono text-gray-400">
                Problem Solving & Algorithms:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://leetcode.com/u/Adonias_Haile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs text-gray-200 hover:text-orange-400 border border-gray-700 flex items-center gap-1.5 transition-colors"
                >
                  <Code className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-500" />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/adoniashaile1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs text-gray-200 hover:text-emerald-400 border border-gray-700 flex items-center gap-1.5 transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>HackerRank</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-500" />
                </a>
                <a
                  href="https://codeforces.com/profile/Adonias_Haile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs text-gray-200 hover:text-cyan-400 border border-gray-700 flex items-center gap-1.5 transition-colors"
                >
                  <Flame className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Codeforces</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-500" />
                </a>
              </div>
            </div>

            {/* Resume & Portfolio Action Box */}
            <div className="bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-yellow-950/20 border border-orange-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
              <h4 className="text-xl font-bold text-white">
                Looking for a full-stack engineer who ships end-to-end?
              </h4>
              <p className="text-sm text-gray-300 max-w-xl mx-auto">
                Download my up-to-date resume, review my code repositories on GitHub, or test my live SaaS at resucv.com.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-medium shadow-lg shadow-orange-500/25 text-sm"
                  onClick={() =>
                    window.open(
                      "/documents/Adonias_Haile_J_Resume-latest.pdf",
                      "_blank"
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
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2 text-orange-400" />
                  LinkedIn Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/80 bg-gray-950 text-gray-400 text-xs sm:text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="font-medium text-white">Adonias Haile</p>
              <p className="text-xs text-gray-500">
                Full-Stack Software Engineer • Flutter & Mobile Specialist • Java Spring Boot
              </p>
              <p className="text-[11px] text-gray-600 mt-1">
                © 2026 Adonias Haile. All rights reserved.
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
                className="text-gray-400 hover:text-orange-400 transition-colors"
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

      {/* Global Interactive Command Palette (⌘K) Modal */}
      {isCommandOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-50 duration-150">
          <div
            className="w-full max-w-lg rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="relative border-b border-gray-800 px-4 py-3 flex items-center">
              <Search className="w-4 h-4 text-gray-400 mr-2.5" />
              <input
                type="text"
                placeholder="Type a command or jump to section..."
                value={commandSearch}
                onChange={(e) => setCommandSearch(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-gray-100 placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={() => setIsCommandOpen(false)}
                className="text-xs text-gray-400 hover:text-white px-1.5 py-0.5 rounded border border-gray-700 font-mono"
              >
                ESC
              </button>
            </div>

            {/* Quick Actions List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1 text-xs">
              <div className="px-2 py-1 text-[10px] font-mono uppercase text-gray-500">
                Navigation
              </div>
              {[
                { name: "Jump to Projects (8 Production Works)", action: () => scrollToSection("projects"), icon: <Briefcase className="w-4 h-4 text-orange-400" /> },
                { name: "Jump to Skills & Architecture", action: () => scrollToSection("skills"), icon: <Network className="w-4 h-4 text-amber-400" /> },
                { name: "Jump to Work Experience", action: () => scrollToSection("experience"), icon: <Building2 className="w-4 h-4 text-emerald-400" /> },
                { name: "Jump to Recommendations (8)", action: () => scrollToSection("testimonials"), icon: <Award className="w-4 h-4 text-purple-400" /> },
                { name: "Jump to Contact", action: () => scrollToSection("contact"), icon: <Mail className="w-4 h-4 text-cyan-400" /> },
              ].filter((item) => !commandSearch || item.name.toLowerCase().includes(commandSearch.toLowerCase()))
                .map((item, i) => (
                  <button
                    key={i}
                    onClick={item.action}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-gray-200 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}

              <div className="px-2 py-1 pt-2 text-[10px] font-mono uppercase text-gray-500 border-t border-gray-800/80">
                Quick Actions
              </div>
              {[
                {
                  name: "Download Latest Resume (PDF)",
                  action: () => {
                    window.open("/documents/Adonias_Haile_J_Resume-latest.pdf", "_blank");
                    setIsCommandOpen(false);
                  },
                  icon: <Download className="w-4 h-4 text-orange-400" />,
                },
                {
                  name: "Copy Email (adoniashaile1@gmail.com)",
                  action: () => {
                    copyToClipboard("adoniashaile1@gmail.com", "cmd-email");
                    setIsCommandOpen(false);
                  },
                  icon: <Mail className="w-4 h-4 text-red-400" />,
                },
                {
                  name: "Copy WhatsApp (+251 989 858 377)",
                  action: () => {
                    copyToClipboard("+251989858377", "cmd-phone");
                    setIsCommandOpen(false);
                  },
                  icon: <Phone className="w-4 h-4 text-emerald-400" />,
                },
                {
                  name: "Open GitHub Profile",
                  action: () => {
                    window.open("https://github.com/habeshacoder", "_blank");
                    setIsCommandOpen(false);
                  },
                  icon: <Github className="w-4 h-4 text-gray-300" />,
                },
                {
                  name: "Open LinkedIn Profile",
                  action: () => {
                    window.open("https://linkedin.com/in/adonias-haile-668312322", "_blank");
                    setIsCommandOpen(false);
                  },
                  icon: <Linkedin className="w-4 h-4 text-blue-400" />,
                },
                {
                  name: "Visit Personal SaaS (resucv.com)",
                  action: () => {
                    window.open("https://www.resucv.com", "_blank");
                    setIsCommandOpen(false);
                  },
                  icon: <Globe className="w-4 h-4 text-emerald-400" />,
                },
              ].filter((item) => !commandSearch || item.name.toLowerCase().includes(commandSearch.toLowerCase()))
                .map((item, i) => (
                  <button
                    key={i}
                    onClick={item.action}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-gray-200 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
