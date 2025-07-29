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
  Code,
  Smartphone,
  Server,
  Database,
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

  const testimonials = [
    {
      name: "Qemer Software Technology",
      role: "Software Development Company",
      image: "/placeholder.svg?height=80&width=80&text=QT",
      content:
        "Adonias is a skilled Full-Stack Mobile Developer, a true all-rounder in the world of mobile applications. He possesses the unique ability to handle every aspect of mobile development, from crafting intuitive user interfaces to building robust server-side infrastructure.",
      url: "https://www.qemertech.com/team/adonias-haile/",
    },
    {
      name: "Natnael Mahetem",
      role: "CTO, Cofounder at Ewenet Communication PLC",
      image: "/placeholder.svg?height=80&width=80&text=NM",
      content:
        "Adonias consistently impressed me with his exceptional problem-solving, coding skills, and communication abilities throughout his internship and work at Ewenet Communication under my supervision.",
    },
    {
      name: "ab-majid-mohaqiq",
      role: "Software Engineer",
      image: "/placeholder.svg?height=80&width=80&text=AM",
      content:
        "Adonias is a resourceful and hardworking person. His ability to speak and express himself in English was excellent. I felt very comfortable when we cooperated together.",
    },
    {
      name: "Amedee Erns Baptiste",
      role: "Bachelor's in Economics | Front-end Dev | AI Enthusiast | Social Media Manager",
      image: "/placeholder.svg?height=80&width=80&text=AE",
      content:
        "Adonias is a good solution thinker. His capacity of analysis to come with a solution is incredible. We worked together on a project and I will totally recommend him to anyone.",
    },
    {
      name: "Samuel Abera",
      role: "Backend Developer at Ewenet Communication",
      image: "/placeholder.svg?height=80&width=80&text=SA",
      content:
        "Working with Adonias was a great experience. His dedication to mobile development and ability to integrate complex backend systems seamlessly made our collaboration very productive.",
    },
  ];

  const skills = [
    {
      name: "Flutter",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    { name: "Java", icon: <Code className="w-6 h-6" />, color: "bg-red-500" },
    {
      name: "Spring Boot",
      icon: <Server className="w-6 h-6" />,
      color: "bg-green-600",
    },
    {
      name: "Python",
      icon: <Server className="w-6 h-6" />,
      color: "bg-yellow-500",
    },
    {
      name: "Django",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      name: "Docker",
      icon: <Database className="w-6 h-6" />,
      color: "bg-blue-600",
    },
    {
      name: "REST APIs",
      icon: <Server className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      name: "CI/CD",
      icon: <Figma className="w-6 h-6" />,
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
      image: "/placeholder.svg?height=300&width=400&text=Alibo+Market",
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
      image: "/placeholder.svg?height=300&width=400&text=Swift+Delivery",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.ecleul.swiftdelivery",
      tags: ["Flutter", "Google Maps", "Real-time Tracking", "Firebase"],
    },
    {
      title: "Swift Ride",
      description:
        "A comprehensive ride-hailing platform with separate user and driver applications for efficient transportation services.",
      image: "/placeholder.svg?height=300&width=400&text=Swift+Ride",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.swiftrideuser.flutter",
      tags: ["Flutter", "Google Maps", "Payment Gateway", "Real-time"],
    },
    {
      title: "Swift Ride Driver",
      description:
        "The driver companion app for Swift Ride, enabling drivers to accept rides, navigate efficiently, and manage their earnings.",
      image: "/placeholder.svg?height=300&width=400&text=Swift+Ride+Driver",
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
      const cardWidth = containerWidth >= 768 ? 384 + 16 : 320 + 16; // w-96 or w-80 + gap
      const visibleCards = Math.floor((containerWidth - 64) / cardWidth); // subtract padding
      const pages = Math.max(
        1,
        Math.ceil(testimonials.length / Math.max(1, visibleCards))
      );
      setTestimonialPages(pages);
    };

    calculatePages();
    window.addEventListener("resize", calculatePages);
    return () => window.removeEventListener("resize", calculatePages);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Adonias Haile
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
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
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <div className="md:hidden py-4 border-t border-gray-800">
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
                  className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-400"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400/50">
              <Image
                src="/placeholder.svg?height=128&width=128&text=Profile"
                alt="Adonias Haile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Fullstack Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building scalable mobile and backend solutions with modern
              technologies, clean code architecture, and industry best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1BN-oNVs1nRWXMgswDoCiQkPSSM1jHqu9/view",
                    "_blank"
                  )
                }
              >
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">About Me</h2>
            {/* <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fullstack software engineer specializing in mobile and backend
              development with expertise in modern technologies and scalable
              solutions
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                What I Do
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
                <p>
                  I am a software engineer with a degree from Bahir Dar
                  Institute of Technology, specializing in mobile and backend
                  development as a fullstack developer. I have expertise in
                  Flutter, Django, Python, Django REST Framework, Java, and
                  Spring Boot.
                </p>
                <p>
                  With experience in Docker and CI/CD, I build scalable
                  solutions and integrate RESTful APIs while following clean
                  code and SOLID principles to deliver high-quality
                  applications.
                </p>
                <p>
                  I enjoy collaborating with teams, reviewing code, and
                  debugging projects to ensure high performance and quality. My
                  focus is on creating maintainable, efficient solutions that
                  meet business requirements and user needs.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Personal Info
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="truncate">adoniashaile1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>+251989858377</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <a
                      href="https://github.com/habeshacoder"
                      className="hover:text-blue-400 transition-colors truncate"
                    >
                      habeshacoder
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills and Education section with horizontal scroll */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Skills & Technologies
              </h3>

              {/* Horizontal Scrollable Skills */}
              <div className="relative mb-6">
                <div className="flex overflow-x-auto scrollbar-hide-complete gap-3 pb-2 snap-x snap-mandatory">
                  {skills.map((skill, index) => (
                    <Card
                      key={index}
                      className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors flex-shrink-0 w-24 snap-start"
                    >
                      <CardContent className="p-3 text-center">
                        <div
                          className={`w-10 h-10 rounded-lg ${skill.color} flex items-center justify-center mx-auto mb-2`}
                        >
                          {skill.icon}
                        </div>
                        <h4 className="font-medium text-white text-xs leading-tight">
                          {skill.name}
                        </h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Scroll Indicators for Skills */}
                <div className="flex justify-center mt-2 gap-1">
                  {Array.from({ length: Math.ceil(skills.length / 3) }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors cursor-pointer"
                        onClick={() => {
                          const container = document.querySelector(
                            "#about .overflow-x-auto"
                          );
                          const cardWidth = 96 + 12; // w-24 + gap
                          container?.scrollTo({
                            left: index * (cardWidth * 3),
                            behavior: "smooth",
                          });
                        }}
                      />
                    )
                  )}
                </div>

                <div className="text-center mt-2 md:hidden">
                  <p className="text-gray-500 text-xs">← Swipe to see more →</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Education
                </h4>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-white mb-1 text-sm">
                      Bachelor's Degree in Software Engineering
                    </h5>
                    <p className="text-gray-400 mb-1 text-sm">
                      BIT (Poly Campus), Bahir Dar, Ethiopia
                    </p>
                    <p className="text-xs text-gray-500">
                      2019 - 2024 | CGPA: 3.86/4.00
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Work Experience</h2>
            <p className="text-gray-400 text-lg">
              Professional journey in mobile development and software
              engineering
            </p>
          </div>

          {/* Horizontal Scrollable Experience */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide-complete gap-4 pb-4 snap-x snap-mandatory">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 flex-shrink-0 w-80 md:w-96 snap-start"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                          >
                            {exp.company}
                          </a>
                          <Badge
                            variant="secondary"
                            className="bg-gray-700 text-gray-300 text-xs px-2 py-0"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-gray-400 text-xs">{exp.period}</div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.achievements.slice(0, 4).map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 flex items-start gap-2 text-sm leading-relaxed"
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
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

            {/* Scroll Indicators for Experience */}
            <div className="flex justify-center mt-4 gap-2">
              {experiences.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors cursor-pointer"
                  onClick={() => {
                    const container = document.querySelector(
                      "#experience .overflow-x-auto"
                    );
                    const cardWidth = 384 + 16; // w-96 + gap
                    container?.scrollTo({
                      left: index * cardWidth,
                      behavior: "smooth",
                    });
                  }}
                />
              ))}
            </div>

            {/* Mobile scroll hint */}
            <div className="text-center mt-3 md:hidden">
              <p className="text-gray-500 text-sm">← Swipe to see more →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-400 text-lg">
              Mobile applications I've built with modern technologies and best
              practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-blue-900/30 text-blue-300 border-blue-700 text-xs px-2 py-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1.5"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Live
                    </Button>
                    {project.designUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent text-xs px-3 py-1.5"
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
      <section id="testimonials" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">What People Say</h2>
            <p className="text-gray-400 text-lg">
              Feedback from colleagues and clients I've worked with
            </p>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide-complete gap-4 pb-4 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors flex-shrink-0 w-80 md:w-96 snap-start"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-white truncate text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-400 line-clamp-2">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic line-clamp-4 text-sm">
                      "{testimonial.content}"
                    </p>
                    {testimonial.url && (
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-blue-400 hover:text-blue-300 transition-colors text-xs"
                      >
                        View Profile
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
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
                        window.innerWidth >= 768 ? 384 + 16 : 320 + 16; // w-96 or w-80 + gap
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
            <div className="text-center mt-3 md:hidden">
              <p className="text-gray-500 text-sm">← Swipe to see more →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              Ready to work together? Let's discuss your next project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-4">
                  <Mail className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-1 text-sm">
                    Email
                  </h3>
                  <p className="text-gray-400 text-sm">
                    adoniashaile1@gmail.com
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-4">
                  <Phone className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-1 text-sm">
                    Phone
                  </h3>
                  <p className="text-gray-400 text-sm">+251989858377</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-4">
                  <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-1 text-sm">
                    Location
                  </h3>
                  <p className="text-gray-400 text-sm">Addis Ababa, Ethiopia</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-base"
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
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Adonias Haile. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/habeshacoder"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/adonias-haile"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:adoniashaile1@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
