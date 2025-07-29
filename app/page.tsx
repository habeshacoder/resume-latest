"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [testimonialPages, setTestimonialPages] = useState(1);
  const [skillPages, setSkillPages] = useState(1);
  const [experiencePages, setExperiencePages] = useState(1);

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
      name: "Natnael Mahetem",
      role: "CTO, Cofounder at Ewenet Communication PLC",
      image: "/testimonials/testi_natan.jpeg",
      content:
        "Adonias consistently impressed me with his exceptional problem-solving, coding skills, and communication abilities throughout his internship and work at Ewenet Communication under my supervision.",
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
      role: "Bachelor's in Economics | Front-end Dev | AI Enthusiast | Social Media Manager",
      image: "/testimonials/testi_amedee.jpeg",
      content:
        "Adonias is a good solution thinker. His capacity of analysis to come with a solution is incredible. We worked together on a project and I will totally recommend him to anyone.",
    },
  ];

  const skills = [
    {
      name: "Flutter",
      image: "/skills/4691465_flutter_icon.png",
      color: "bg-blue-500",
    },
    {
      name: "Java",
      image: "/skills/4373217_java_logo_logos_icon.png",
      color: "bg-yellow-100",
    },
    {
      name: "Spring Boot",
      image: "/skills/spring boot.png",
      color: "bg-blue-600",
    },
    {
      name: "Python",
      image: "/skills/4375050_logo_python_icon.png",
      color: "bg-green-500",
    },
    {
      name: "Django",
      image: "/skills/9055848_bxl_django_icon.png",
      color: "bg-green-500",
    },
    {
      name: "Docker",
      image: "/skills/2993785_docker_social media_icon.png",
      color: "bg-yellow-600",
    },
    {
      name: "CI/CD GitHub Actions",
      image: "/skills/pngaaa.com-4882357.png",
      color: "bg-orange-500",
    },
    {
      name: "Redis",
      image: "/skills/4691219_redis_icon.png",
      color: "bg-orange-500",
    },
  ];

  const experiences = [
    {
      title: "Backend Developer (Java Spring Boot)",
      company: "Lion International Bank",
      period: "May 26, 2025 - Present",
      type: "Full-time",
      url: "#",
      achievements: [
        "Developed airtime top-up system using Spring Boot, WSO2 Micro Integrator and Application Manager",
        "Built SMS service using Redis, Spring Boot, WSO2 Micro Integrator and Application Manager",
        "Created loan calculator app using React",
        "Dockerized existing projects for improved deployment and scalability",
        "Implemented microservices architecture with WSO2 integration",
      ],
    },
    {
      title: "Flutter Developer and Trainer",
      company: "Qemer Software Technology",
      period: "August 2024 - December 2024",
      type: "Contract",
      url: "https://www.qemertech.com/",
      achievements: [
        "Payment integration with Chapa and Campay",
        "Google APIs integration",
        "Developed Mood Ride User App",
        "Designed Alibo Market using Figma",
        "Maintained Swift Ride both user and driver app",
      ],
    },
    {
      title: "Flutter Developer",
      company: "Ewenet Communication",
      period: "Aug 2023 - Nov 2023",
      type: "Freelance",
      url: "https://ewenet.net/",
      achievements: [
        "Developed Arat Killo Mobile Application",
        "Team collaboration with backend developer",
        "Cloud services integration",
        "Google APIs integration",
      ],
    },
    {
      title: "Flutter Developer",
      company: "EthioClicks",
      period: "Aug 2022 - Sep 2023",
      type: "Part-Time, Remote",
      url: "https://ethioclicks.com/",
      achievements: [
        "Designed and developed mobile apps",
        "Cloud services integration",
        "Developed Swift Delivery Mobile App",
        "Designed Akababi App using Figma",
        "Integrated Firebase APIs",
      ],
    },
    {
      title: "Flutter Developer",
      company: "MelaFi Tech",
      period: "August 2024",
      type: "Task-based, One-time",
      url: "#",
      achievements: [
        "Maintained previously developed mobile app",
        "Refactored old codebase into clean architecture",
        "Performed code reviews for Flutter developers",
        "Utilized Scrum development with Jira",
      ],
    },
  ];

  const projects = [
    {
      title: "Alibo Market",
      description:
        "A comprehensive mobile marketplace that allows users to buy and sell products with an intuitive interface and secure payment integration.",
      image: "/project_thumbnails/alibo market.png",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.aliboMarket.alibo",
      designUrl:
        "https://www.figma.com/design/XQCmuvZWGZX70BLxMihXgU/Alibo-Market",
      tags: ["Flutter", "Firebase", "Payment Integration", "UI/UX"],
    },
    {
      title: "Swift Delivery",
      description:
        "An efficient delivery service mobile application that connects customers with delivery partners for seamless package transportation.",
      image: "/project_thumbnails/swift delivery.png",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.ecleul.swiftdelivery",
      tags: ["Flutter", "Google Maps", "Real-time Tracking", "Firebase"],
    },
    {
      title: "Swift Ride",
      description:
        "A comprehensive ride-hailing platform with separate user and driver applications for efficient transportation services.",
      image: "/project_thumbnails/swift ride.png",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.swiftrideuser.flutter",
      tags: ["Flutter", "Google Maps", "Payment Gateway", "Real-time"],
    },
    {
      title: "Swift Ride Driver",
      description:
        "The driver companion app for Swift Ride, enabling drivers to accept rides, navigate efficiently, and manage their earnings.",
      image: "/project_thumbnails/swift ride driverr.png",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.swiftridedriver.flutter",
      tags: ["Flutter", "Driver Management", "Navigation", "Earnings"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

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

  useEffect(() => {
    const calculatePages = () => {
      const containerWidth = window.innerWidth;
      const padding =
        containerWidth < 640 ? 32 : containerWidth < 1024 ? 48 : 64;

      // Calculate testimonial pages
      const testimonialCardWidth = containerWidth >= 768 ? 320 + 16 : 280 + 16;
      const testimonialVisibleCards = Math.floor(
        (containerWidth - padding) / testimonialCardWidth
      );
      const testimonialPages = Math.max(
        1,
        Math.ceil(testimonials.length / Math.max(1, testimonialVisibleCards))
      );
      setTestimonialPages(testimonialPages);

      // Calculate skill pages
      const skillCardWidth = containerWidth >= 640 ? 88 + 12 : 76 + 8; // Updated for new card sizes
      const skillVisibleCards = Math.floor(
        (containerWidth - padding) / skillCardWidth
      );
      const skillPages = Math.max(
        1,
        Math.ceil(skills.length / Math.max(1, skillVisibleCards))
      );
      setSkillPages(skillPages);

      // Calculate experience pages
      const experienceCardWidth = containerWidth >= 768 ? 320 + 16 : 280 + 16;
      const experienceVisibleCards = Math.floor(
        (containerWidth - padding) / experienceCardWidth
      );
      const experiencePages = Math.max(
        1,
        Math.ceil(experiences.length / Math.max(1, experienceVisibleCards))
      );
      setExperiencePages(experiencePages);
    };

    calculatePages();
    window.addEventListener("resize", calculatePages);
    return () => window.removeEventListener("resize", calculatePages);
  }, [testimonials.length, skills.length, experiences.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Adonias Haile
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "testimonials",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-400 text-sm lg:text-base ${
                    activeSection === item ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800 bg-gray-900">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "testimonials",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-2 capitalize transition-colors hover:text-blue-400 hover:bg-gray-800 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-blue-400/50">
              <Image
                src="/profile-img.jpg"
                alt="Adonias Haile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Fullstack Developer
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Building scalable mobile and backend solutions with modern
              technologies, clean code architecture, and industry best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg w-full sm:w-auto"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg bg-transparent w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1BN-oNVs1nRWXMgswDoCiQkPSSM1jHqu9/view",
                    "_blank"
                  )
                }
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">About Me</h2>
          </div>

          <div className="space-y-8">
            {/* Two Column Layout: What I Do | Personal Info & Education */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column - What I Do */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">
                  What I Do
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p className="break-words">
                    I am a software engineer with a degree from Bahir Dar
                    Institute of Technology, specializing in mobile and backend
                    development as a fullstack developer. I have expertise in
                    Flutter, Django, Python, Django REST Framework, Java, and
                    Spring Boot.
                  </p>
                  <p className="break-words">
                    With experience in Docker and CI/CD, I build scalable
                    solutions and integrate RESTful APIs while following clean
                    code and SOLID principles to deliver high-quality
                    applications.
                  </p>
                  <p className="break-words">
                    I enjoy collaborating with teams, reviewing code, and
                    debugging projects to ensure high performance and quality.
                    My focus is on creating maintainable, efficient solutions
                    that meet business requirements and user needs.
                  </p>
                </div>
              </div>

              {/* Right Column - Personal Info & Education */}
              <div className="space-y-6">
                {/* Personal Info */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-3 text-blue-400">
                    Personal Info
                  </h4>
                  <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                      <span className="break-all">adoniashaile1@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                      <span className="break-all">+251989858377</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                      <span className="break-words">Addis Ababa, Ethiopia</span>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                      <a
                        href="https://github.com/habeshacoder"
                        className="hover:text-blue-400 transition-colors break-all"
                      >
                        habeshacoder
                      </a>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-3 text-blue-400">
                    Education
                  </h4>
                  <Card className="bg-gray-800 border-gray-700 w-full">
                    <CardContent className="p-3 sm:p-4">
                      <h5 className="font-semibold text-white mb-1 text-xs sm:text-sm break-words">
                        Bachelor's Degree in Software Engineering
                      </h5>
                      <p className="text-gray-400 mb-1 text-xs sm:text-sm break-words">
                        BIT (Poly Campus), Bahir Dar, Ethiopia
                      </p>
                      <p className="text-xs text-gray-500 break-words">
                        2019 - 2024 | CGPA: 3.86/4.00
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Skills & Technologies Section - Full Width */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">
                Skills & Technologies
              </h3>

              {/* Horizontal Scrollable Skills */}
              <div className="relative mb-4 sm:mb-6">
                <div className="overflow-x-auto scrollbar-hide-complete pb-2">
                  <div className="flex gap-2 sm:gap-3 snap-x snap-mandatory min-w-max">
                    {skills.map((skill, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors flex-shrink-0 w-18 sm:w-22 snap-start"
                      >
                        <CardContent className="p-2 sm:p-3 text-center">
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${skill.color} flex items-center justify-center mx-auto mb-1 sm:mb-2 p-1`}
                          >
                            <Image
                              src={skill.image || "/placeholder.svg"}
                              alt={skill.name}
                              width={24}
                              height={24}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="font-medium text-white text-xs leading-tight break-words">
                            {skill.name}
                          </h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Scroll Indicators for Skills - Only show if multiple pages needed */}
                {skillPages > 1 && (
                  <div className="flex justify-center mt-2 gap-1">
                    {Array.from({ length: skillPages }).map((_, index) => (
                      <div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors cursor-pointer"
                        onClick={() => {
                          const container = document.querySelector(
                            "#about .overflow-x-auto"
                          );
                          const cardWidth =
                            window.innerWidth >= 640 ? 88 + 12 : 72 + 8;
                          const visibleCards = Math.floor(
                            (window.innerWidth -
                              (window.innerWidth < 640 ? 32 : 48)) /
                              cardWidth
                          );
                          container?.scrollTo({
                            left: index * (cardWidth * visibleCards),
                            behavior: "smooth",
                          });
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="text-center mt-2 sm:hidden">
                  <p className="text-gray-500 text-xs">← Swipe to see more →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
              Work Experience
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Professional journey in mobile development and software
              engineering
            </p>
          </div>

          {/* Horizontal Scrollable Experience */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide-complete pb-4">
              <div className="flex gap-3 sm:gap-4 snap-x snap-mandatory min-w-max">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 flex-shrink-0 w-72 sm:w-80 snap-start"
                  >
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex flex-col justify-between mb-3">
                        <div>
                          <h3 className="text-sm sm:text-base font-semibold text-white mb-1 leading-tight break-words">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm break-words"
                            >
                              {exp.company}
                            </a>
                            <Badge
                              variant="secondary"
                              className="bg-gray-700 text-gray-300 text-xs px-2 py-0 flex-shrink-0"
                            >
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-gray-400 text-xs break-words">
                          {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {exp.achievements.slice(0, 4).map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-2 text-xs sm:text-sm leading-relaxed"
                          >
                            <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="break-words">{achievement}</span>
                          </li>
                        ))}
                        {exp.achievements.length > 4 && (
                          <li className="text-gray-400 text-xs italic">
                            +{exp.achievements.length - 4} more achievements
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Scroll Indicators for Experience - Only show if multiple pages needed */}
            {experiencePages > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: experiencePages }).map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector(
                        "#experience .overflow-x-auto"
                      );
                      const cardWidth =
                        window.innerWidth >= 640 ? 320 + 16 : 288 + 12;
                      const visibleCards = Math.floor(
                        (window.innerWidth -
                          (window.innerWidth < 640 ? 32 : 48)) /
                          cardWidth
                      );
                      container?.scrollTo({
                        left: index * (cardWidth * visibleCards),
                        behavior: "smooth",
                      });
                    }}
                  />
                ))}
              </div>
            )}

            {/* Mobile scroll hint */}
            <div className="text-center mt-3 sm:hidden">
              <p className="text-gray-500 text-sm">← Swipe to see more →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 sm:py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Mobile applications I've built with modern technologies and best
              practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 break-words">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed text-xs sm:text-sm line-clamp-2 break-words">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-blue-900/30 text-blue-300 border-blue-700 text-xs px-2 py-0 break-words"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1.5 flex-1 sm:flex-none"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Live
                    </Button>
                    {project.designUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent text-xs px-3 py-1.5 flex-1 sm:flex-none"
                        onClick={() => window.open(project.designUrl, "_blank")}
                      >
                        <Figma className="w-3 h-3 mr-1" />
                        Design
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
              What People Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Feedback from colleagues and clients I've worked with
            </p>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide-complete pb-4">
              <div className="flex gap-3 sm:gap-4 snap-x snap-mandatory min-w-max">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors flex-shrink-0 w-72 sm:w-80 snap-start"
                  >
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-white text-xs sm:text-sm break-words">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-400 line-clamp-2 break-words">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed italic line-clamp-4 text-xs sm:text-sm break-words">
                        "{testimonial.content}"
                      </p>
                      {testimonial.url && (
                        <a
                          href={testimonial.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-3 text-blue-400 hover:text-blue-300 transition-colors text-xs break-words"
                        >
                          View Source
                          <ExternalLink className="w-3 h-3 ml-1 flex-shrink-0" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Scroll Indicators - Only show if multiple pages needed */}
            {testimonialPages > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: testimonialPages }).map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors cursor-pointer"
                    onClick={() => {
                      const container = document.querySelector(
                        "#testimonials .overflow-x-auto"
                      );
                      const cardWidth =
                        window.innerWidth >= 640 ? 320 + 16 : 288 + 12;
                      container?.scrollTo({
                        left: index * cardWidth,
                        behavior: "smooth",
                      });
                    }}
                  />
                ))}
              </div>
            )}

            {/* Mobile scroll hint */}
            <div className="text-center mt-3 sm:hidden">
              <p className="text-gray-500 text-sm">← Swipe to see more →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Ready to work together? Let's discuss your next project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-3 sm:p-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm">
                    Email
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm break-all">
                    adoniashaile1@gmail.com
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-3 sm:p-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm">
                    Phone
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm break-all">
                    +251989858377
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-3 sm:p-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm">
                    Location
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm break-words">
                    Addis Ababa, Ethiopia
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm sm:text-base w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1BN-oNVs1nRWXMgswDoCiQkPSSM1jHqu9/view",
                    "_blank"
                  )
                }
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left break-words">
              © {new Date().getFullYear()} Adonias Haile. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="https://github.com/habeshacoder"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/adonias-haile"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:adoniashaile1@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
