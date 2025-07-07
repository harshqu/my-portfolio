"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Code,
  Palette,
  Smartphone,
  Download,
  Send,
  Heart,
  Monitor,
  Globe,
  Zap,
  Database,
  Star,
  Sparkles,
  Rocket,
  Coffee,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AestheticPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)

  const texts = ["Full Stack Wizard", "Code Architect", "Digital Craftsman", "Innovation Driver"]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const typeText = () => {
      const fullText = texts[textIndex]
      if (currentText.length < fullText.length) {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      } else {
        setTimeout(() => {
          setCurrentText("")
          setTextIndex((prev) => (prev + 1) % texts.length)
        }, 2000)
      }
    }

    const timer = setTimeout(typeText, 100)
    return () => clearTimeout(timer)
  }, [currentText, textIndex, texts])

  const portfolioItems = [
    {
      id: 1,
      title: "NextGen E-Commerce",
      category: "fullstack",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Revolutionary e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      featured: true,
    },
    {
      id: 2,
      title: "TaskFlow Pro",
      category: "frontend",
      image: "/placeholder.svg?height=300&width=400",
      description: "Intuitive project management tool with real-time collaboration and advanced analytics.",
      tech: ["React", "Socket.io", "Tailwind", "Redux"],
      featured: false,
    },
    {
      id: 3,
      title: "Culinary Canvas",
      category: "design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Award-winning restaurant website with immersive dining experience and smart reservations.",
      tech: ["Figma", "Framer", "JavaScript", "GSAP"],
      featured: true,
    },
    {
      id: 4,
      title: "Portfolio Command Center",
      category: "fullstack",
      image: "/placeholder.svg?height=300&width=400",
      description: "Dynamic portfolio platform with CMS integration and real-time analytics dashboard.",
      tech: ["Vue.js", "Node.js", "MongoDB", "Express"],
      featured: false,
    },
    {
      id: 5,
      title: "FinTech Mobile Suite",
      category: "design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cutting-edge mobile banking interface with biometric security and smart insights.",
      tech: ["Figma", "Principle", "After Effects", "Lottie"],
      featured: true,
    },
    {
      id: 6,
      title: "Social Sphere",
      category: "fullstack",
      image: "/placeholder.svg?height=300&width=400",
      description: "Next-generation social platform with AI moderation and immersive content sharing.",
      tech: ["React", "GraphQL", "PostgreSQL", "Redis"],
      featured: false,
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-grid-move"></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 text-purple-400 text-2xl animate-float">✨</div>
        <div className="absolute top-40 right-20 text-blue-400 text-xl animate-float animation-delay-500">🚀</div>
        <div className="absolute bottom-40 left-20 text-pink-400 text-lg animate-float animation-delay-1000">💎</div>
        <div className="absolute bottom-20 right-10 text-emerald-400 text-xl animate-float animation-delay-1500">
          ⚡
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-6">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 relative"
            >
              <span className="relative z-10">Harshwardhan</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-xl -z-10"></div>
            </a>

            <ul className="hidden md:flex space-x-8">
              {[
                { name: "Home", id: "hero" },
                { name: "Story", id: "about" },
                { name: "Magic", id: "services" },
                { name: "Creations", id: "portfolio" },
                { name: "Connect", id: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-gray-300 hover:text-white transition-all duration-300 group font-medium"
                  >
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></span>
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 blur-sm group-hover:w-full transition-all duration-500"></span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Enhanced Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="py-6 space-y-4 border-t border-white/10 backdrop-blur-xl">
              {[
                { name: "Home", id: "hero" },
                { name: "Story", id: "about" },
                { name: "Magic", id: "services" },
                { name: "Creations", id: "portfolio" },
                { name: "Connect", id: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-3 px-6 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-white/10"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-purple-400 text-lg font-medium">
                  <Sparkles className="w-5 h-5" />
                  <span>Welcome to my digital universe</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="block text-white">I'm</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                    Harshwardhan
                  </span>
                </h1>
                <div className="text-3xl lg:text-4xl text-gray-300 h-16 flex items-center font-light">
                  <span className="text-purple-400 mr-3">→</span>
                  <span className="border-r-2 border-purple-400 pr-3 animate-pulse">{currentText}</span>
                </div>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                  Crafting digital experiences that blend{" "}
                  <span className="text-purple-400 font-medium">innovation</span> with{" "}
                  <span className="text-pink-400 font-medium">artistry</span>. I transform ideas into stunning web
                  realities that captivate and inspire.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 font-semibold text-lg group"
                >
                  <Rocket className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Hire Me Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("portfolio")}
                  className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-10 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm font-semibold text-lg group"
                >
                  <Star className="mr-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  View Magic
                </Button>
              </div>

              <div className="flex space-x-6 pt-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/harsh-wardhan-5372a7279",
                    color: "hover:bg-blue-600",
                    label: "LinkedIn",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/harshqu",
                    color: "hover:bg-gray-700",
                    label: "GitHub",
                  },
                  {
                    icon: Instagram,
                    href: "#",
                    color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600",
                    label: "Instagram",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/Harsh_1437",
                    color: "hover:bg-blue-500",
                    label: "Twitter",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-14 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center shadow-lg text-gray-400 ${social.color} hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  {/* Enhanced Animated Rings */}
                  <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-6 border border-pink-400/30 rounded-full animate-spin-reverse"></div>
                  <div className="absolute inset-12 border border-blue-400/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-16 border border-emerald-400/20 rounded-full animate-spin-slow animation-delay-1000"></div>

                  {/* Glowing Background */}
                  <div className="absolute inset-20 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-xl"></div>

                  {/* Profile Image - Reduced size and properly centered */}
                  <div className="absolute inset-20 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm shadow-2xl shadow-purple-500/25">
                    <img
                      src="IMG_1431.png"
                      alt="Harshwardhan - Digital Craftsman"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Floating Orbs */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce animation-delay-500 shadow-lg shadow-blue-400/50"></div>
                </div>
              </div>

              {/* Enhanced Floating Tech Icons - Reduced size and repositioned */}
              <div className="absolute top-8 right-8 animate-bounce z-20">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25 border border-white/10 backdrop-blur-sm">
                  <Code className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 animate-bounce animation-delay-500 z-20">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 border border-white/10 backdrop-blur-sm">
                  <Palette className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="absolute top-1/2 -left-8 animate-bounce animation-delay-1000 z-20">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/25 border border-white/10 backdrop-blur-sm">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-transparent to-gray-900/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 text-purple-400 text-lg font-medium mb-4">
              <Heart className="w-5 h-5" />
              <span>My Journey</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Story</span>{" "}
              Behind the Code
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Second Image - Repositioned and resized */}
            {/* Second Image - Two stacked images */}
            <div className="relative group order-2 lg:order-1 flex flex-col space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl opacity-50 group-hover:opacity-75 transition-all duration-500 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="1234.png"
                      alt="The Craftsman at Work"
                      className="w-100px h-100px object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-50 group-hover:opacity-75 transition-all duration-500 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="20250310_153116365_iOS_11zon.jpg"
                      alt="Digital Innovation"
                      className=" w-25 h-25 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">Digital Craftsman & Code Artist</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm not just a developer – I'm a{" "}
                  <span className="text-purple-400 font-semibold">digital architect</span> who builds experiences that
                  matter. Every line of code is crafted with passion, every pixel placed with purpose.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Currently pursuing my B.Tech in Computer Science at Quantum University while learning and creating
                  digital masterpieces that push the boundaries of what's possible on the web.
                </p>
              </div>

              {/* Updated stats for student */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "20+", label: "Projects Built", icon: Rocket },
                  { number: "2+", label: "Years Learning", icon: BookOpen },
                  { number: "100%", label: "Passion Driven", icon: Heart },
                  { number: "24/7", label: "Coding Journey", icon: Coffee },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white mb-4">My Learning Progress</h4>
                {[
                  { skill: "Frontend Development", percentage: 85, color: "from-purple-500 to-pink-500" },
                  { skill: "Backend Development", percentage: 75, color: "from-blue-500 to-cyan-500" },
                  { skill: "UI/UX Design", percentage: 80, color: "from-emerald-500 to-teal-500" },
                  { skill: "Problem Solving", percentage: 90, color: "from-orange-500 to-red-500" },
                ].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-200 text-lg">{item.skill}</span>
                      <span className="text-purple-400 font-bold text-lg">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden border border-white/10">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transform origin-left animate-scale-x shadow-lg relative`}
                        style={{ width: `${item.percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 font-semibold text-lg group">
                <Download className="mr-3 w-5 h-5 group-hover:bounce transition-transform duration-300" />
                Download My Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Removed Performance Optimization */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 text-purple-400 text-lg font-medium mb-4">
              <Zap className="w-5 h-5" />
              <span>What I Do Best</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              My Digital{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Magic</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I don't just build websites – I craft digital experiences that leave lasting impressions
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description:
                  "Building end-to-end web applications with cutting-edge technologies and scalable architecture.",
                color: "from-purple-500 to-pink-500",
                technologies: ["React", "Next.js", "Node.js", "TypeScript"],
                highlight: "Most Popular",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Crafting beautiful, intuitive interfaces that users fall in love with at first sight.",
                color: "from-blue-500 to-cyan-500",
                technologies: ["Figma", "Adobe XD", "Framer", "Prototyping"],
                highlight: "Award Winning",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Creating responsive mobile experiences that work flawlessly across all devices.",
                color: "from-emerald-500 to-teal-500",
                technologies: ["React Native", "Flutter", "PWA", "Responsive"],
                highlight: "Cross Platform",
              },
              {
                icon: Database,
                title: "Backend Architecture",
                description: "Building robust, secure server-side solutions that scale with your business growth.",
                color: "from-orange-500 to-red-500",
                technologies: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
                highlight: "Enterprise Ready",
              },
              {
                icon: Globe,
                title: "E-Commerce Solutions",
                description: "Complete online store development with payment integration and inventory management.",
                color: "from-indigo-500 to-purple-500",
                technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
                highlight: "Revenue Focused",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-3 border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl relative overflow-hidden"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.highlight}
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl border border-white/10`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 text-sm border border-white/10 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm font-semibold group"
                  >
                    <Sparkles className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                    Explore Magic
                  </Button>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Restored to previous version */}
      <section id="portfolio" className="py-32 bg-gradient-to-b from-gray-900/50 to-transparent relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 text-purple-400 text-lg font-medium mb-4">
              <Star className="w-5 h-5" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Digital{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creations
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Each project tells a story of innovation, creativity, and technical excellence
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="flex space-x-3 bg-gray-800/50 backdrop-blur-xl p-3 rounded-2xl border border-white/10">
              {[
                { key: "all", label: "All Creations" },
                { key: "fullstack", label: "Full Stack" },
                { key: "frontend", label: "Frontend" },
                { key: "design", label: "Design" },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25 transform scale-105"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl relative ${
                  item.featured ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full z-20 flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      item.featured ? "h-80" : "h-64"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 w-full">
                      <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-gray-200 mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-xl bg-transparent backdrop-blur-sm font-semibold group"
                        >
                          <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 font-semibold text-lg group">
              <Rocket className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Restored to previous version */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 text-purple-400 text-lg font-medium mb-4">
              <Rocket className="w-5 h-5" />
              <span>Let's Create Together</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hire Me?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Let's turn your vision into a digital masterpiece that stands out from the crowd
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Ready to bring your ideas to life? I'm here to transform your vision into a stunning digital reality
                  that captivates your audience and drives results.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold text-purple-400 mb-2">48h</div>
                    <div className="text-sm text-gray-400">Quick Response</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Me",
                    value: "harshwardhanpvt@gmail.com",
                    href: "mailto:harshwardhanpvt@gmail.com",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Phone,
                    title: "Call Me",
                    value: "+91 8210326930",
                    href: "tel:+918210326930",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: MapPin,
                    title: "Find Me",
                    value: "Quantum University, Roorkee",
                    href: "#",
                    color: "from-emerald-500 to-teal-500",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-6 group bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{contact.title}</h4>
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/harsh-wardhan-5372a7279",
                    color: "hover:bg-blue-600",
                    label: "LinkedIn",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/harshqu",
                    color: "hover:bg-gray-700",
                    label: "GitHub",
                  },
                  {
                    icon: Instagram,
                    href: "#",
                    color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600",
                    label: "Instagram",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/Harsh_1437",
                    color: "hover:bg-blue-500",
                    label: "Twitter",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-14 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center shadow-lg text-gray-400 ${social.color} hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/25 p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Start Your Project</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Your Name</label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">Your Email</label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Project Type</label>
                    <select className="w-full px-6 py-4 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 font-medium">
                      <option value="">Select a service</option>
                      <option value="fullstack">Full-Stack Development</option>
                      <option value="frontend">Frontend Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="ecommerce">E-Commerce Solution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Tell Me About Your Vision</label>
                    <textarea
                      rows={5}
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none font-medium"
                      placeholder="Describe your project idea, goals, and any specific requirements..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 font-bold text-lg group">
                    <Send className="mr-3 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    Let's Make Magic Happen
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Harshwardhan
              </div>
              <p className="text-gray-400 leading-relaxed">
                Crafting digital experiences that blend innovation with artistry. Let's build something amazing
                together.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/harsh-wardhan-5372a7279",
                    color: "hover:bg-blue-600",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/harshqu",
                    color: "hover:bg-gray-700",
                  },
                  {
                    icon: Instagram,
                    href: "#",
                    color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/Harsh_1437",
                    color: "hover:bg-blue-500",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transform hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", id: "hero" },
                  { name: "About", id: "about" },
                  { name: "Services", id: "services" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  Full-Stack Development
                </li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">UI/UX Design</li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  Mobile Development
                </li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  Backend Architecture
                </li>
                <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  E-Commerce Solutions
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a
                    href="mailto:harshwardhanpvt@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    harshwardhanpvt@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <a href="tel:+918210326930" className="text-gray-400 hover:text-white transition-colors duration-300">
                    +91 8210326930
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Quantum University, Roorkee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 Harshwardhan. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-400" />{" "}
                and lots of ☕
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
