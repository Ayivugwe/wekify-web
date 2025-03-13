"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Share2,
  Code,
  BookOpen,
  FileText,
  Users,
  Book,
  Heart,
  Award,
  Shield,
  Star,
  MessageSquare,
  Gamepad,
} from "lucide-react";

// Icon mapping for dynamic rendering
const IconMap: Record<string, React.ElementType> = {
  Globe,
  Share2,
  Code,
  BookOpen,
  FileText,
  Users,
  Book,
  Heart,
  Award,
  Shield,
  Star,
  MessageSquare,
  GameController: Gamepad,
};

const megaMenuItems = {
  Solutions: [
    {
      name: "Digital Content Platform",
      href: "/solutions/digital-content",
      icon: "Globe",
      description:
        "Build scalable content platforms for language and cultural content",
    },
    {
      name: "Integration Services",
      href: "/solutions/integration-services",
      icon: "Share2",
      description: "Connect your platforms with powerful APIs and integrations",
    },
    {
      name: "Custom Solutions",
      href: "/solutions/custom",
      icon: "Code",
      description: "Tailored development for your specific language needs",
    },
    {
      name: "Language Preservation",
      href: "/solutions/language-preservation",
      icon: "BookOpen",
      description: "Tools for documenting and preserving endangered languages",
    },
    {
      name: "AI & Language Vision",
      href: "/solutions/ai-vision",
      icon: "Code",
      description:
        "Our approach to using AI for language revitalization and preservation.",
    },
  ],

  Resources: [
    {
      name: "Case Studies",
      href: "/case-studies",
      icon: "FileText",
      description: "See how our solutions work with the Bafuliiru community",
    },
    {
      name: "Getting Started",
      href: "/resources/getting-started",
      icon: "BookOpen",
      description: "Essential guides for new users",
    },
    {
      name: "Documentation",
      href: "/resources/documentation",
      icon: "Book",
      description: "Technical documentation and implementation guides",
    },
    {
      name: "Language Game",
      href: "/language-game",
      icon: "GameController",
      description: "Interactive language learning through gamification",
    },
    {
      name: "Community Forum",
      href: "/resources/forum",
      icon: "Users",
      description: "Currently focused on supporting the Bafuliiru community",
    },
    {
      name: "Become An Ambassador",
      href: "/ambassador",
      icon: "Award",
      description: "Join our network of language preservation advocates",
    },
  ],
  About: [
    {
      name: "Our Story",
      href: "/about/our-story",
      icon: "Book",
      description: "Learn about our mission and journey",
    },
    {
      name: "Vision",
      href: "/about/vision",
      icon: "Heart",
      description: "Our future plans for language preservation",
    },
    {
      name: "Our Policies",
      href: "/about/our-policies",
      icon: "Shield",
      description: "Learn about our guiding principles and vision",
    },
  ],
  "AI & Us": [
    {
      name: "Our AI Approach",
      href: "/ai-and-us",
      icon: "Sparkles",
      description: "How we're using AI to empower language communities",
    },
    {
      name: "Current AI Projects",
      href: "/ai-and-us#ai-approach",
      icon: "Brain",
      description: "Our ongoing AI initiatives for languages",
    },
    {
      name: "AI Commitment",
      href: "/ai-and-us#ai-approach",
      icon: "Lightbulb",
      description: "Our promise to ethical, community-focused AI",
    },
  ],
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMegaMenuHover = (menuName: string | null) => {
    setActiveMegaMenu(menuName);
  };

  const handleMegaMenuToggle = (menuName: string) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Wekify LLC Logo"
              width={180}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-text-primary hover:text-primary font-medium transition-colors duration-300"
          >
            Home
          </Link>

          {Object.keys(megaMenuItems).map((menuName) => (
            <div
              key={menuName}
              className="relative"
              onMouseEnter={() => handleMegaMenuHover(menuName)}
            >
              <button className="flex items-center text-text-primary hover:text-primary font-medium transition-colors duration-300">
                {menuName}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeMegaMenu === menuName ? "rotate-180" : ""}`}
                />
              </button>

              {activeMegaMenu === menuName && (
                <div
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl p-5 border border-gray-100 animate-fadeIn z-50"
                  style={{ transform: "translateX(calc(-50% + 50px))" }}
                  onMouseEnter={() => handleMegaMenuHover(menuName)}
                  onMouseLeave={() => handleMegaMenuHover(null)}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {megaMenuItems[menuName as keyof typeof megaMenuItems].map(
                      (item) => {
                        const Icon = item.icon ? IconMap[item.icon] : null;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group block p-3 hover:bg-gray-50 rounded-lg text-text-primary hover:text-primary transition-all duration-300"
                          >
                            <div className="flex items-start">
                              {Icon && (
                                <div className="icon-container mr-3 mt-1 p-2 bg-gray-50 rounded-lg group-hover:bg-primary/10 transition-all duration-300">
                                  <Icon className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:text-primary transform group-hover:scale-110 group-hover:rotate-6" />
                                </div>
                              )}
                              <div>
                                <div className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                                  {item.name}
                                </div>
                                {item.description && (
                                  <div className="text-xs text-gray-500 mt-1 pr-4 group-hover:text-primary/70 transition-colors duration-300">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        );
                      },
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/blog"
            className="text-text-primary hover:text-primary font-medium transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/assessment"
            className="text-text-primary hover:text-primary font-medium transition-colors duration-300"
          >
            Assessment
          </Link>
          <Link
            href="/languages"
            className="text-text-primary hover:text-primary font-medium transition-colors duration-300"
          >
            Languages
          </Link>

          <Link
            href="/contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-indigo-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300 ml-4"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block text-text-primary hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {Object.keys(megaMenuItems).map((menuName) => (
              <div key={menuName} className="space-y-2">
                <button
                  onClick={() => handleMegaMenuToggle(menuName)}
                  className="flex items-center justify-between w-full text-text-primary hover:text-primary font-medium transition-colors duration-300"
                >
                  {menuName}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeMegaMenu === menuName ? "rotate-180" : ""}`}
                  />
                </button>

                {activeMegaMenu === menuName && (
                  <div className="pl-4 space-y-3 mt-2 border-l-2 border-gray-100">
                    {megaMenuItems[menuName as keyof typeof megaMenuItems].map(
                      (item) => {
                        const Icon = item.icon ? IconMap[item.icon] : null;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group block py-2 text-text-primary hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="flex items-start">
                              {Icon && (
                                <div className="icon-container mr-3">
                                  <Icon className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:text-primary transform group-hover:scale-110" />
                                </div>
                              )}
                              <div>
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-gray-500 mt-1 pr-4">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/blog"
              className="block text-text-primary hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="border-l-4 border-gray-200 pl-3">
              <div className="font-medium mb-2">Languages</div>
              <Link href="/languages" className="block ml-2 text-sm hover:text-primary mb-2" onClick={() => setMobileMenuOpen(false)}>
                World Languages
              </Link>
              <Link href="/assessment" className="block ml-2 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Language Assessment
              </Link>
            </div>
            <Link
              href="/ai-and-us"
              className="block text-text-primary hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI and Us
            </Link>
            <Link
              href="/about"
              className="block text-text-primary hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;