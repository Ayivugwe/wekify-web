"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe, Share2, Code, BookOpen, Cloud, Brain, Building, FileText, FileCode, Terminal, Users, Book, UserPlus, Heart } from "lucide-react";

// Icon mapping for dynamic rendering
const IconMap: Record<string, React.ElementType> = {
  Globe, Share2, Code, BookOpen, Cloud, Brain, Building, FileText, 
  FileCode, Terminal, Users, Book, UserPlus, Heart
};

const megaMenuItems = {
  Solutions: [
    { 
      name: "Digital Content Platform", 
      href: "/solutions/digital-content",
      icon: "Globe",
      description: "Build scalable content platforms for language and cultural content"
    },
    { 
      name: "Integration Services", 
      href: "/solutions/integration-services",
      icon: "Share2",
      description: "Connect your platforms with powerful APIs and integrations"
    },
    { 
      name: "Custom Solutions", 
      href: "/solutions/custom",
      icon: "Code",
      description: "Tailored development for your specific language needs"
    },
    { 
      name: "Language Preservation", 
      href: "/solutions/language-preservation",
      icon: "BookOpen",
      description: "Tools for documenting and preserving endangered languages"
    },
    { 
      name: "Cloud Infrastructure", 
      href: "/solutions/cloud",
      icon: "Cloud",
      description: "Scalable hosting for language and cultural platforms"
    },
    { 
      name: "AI & Machine Learning", 
      href: "/solutions/ai-ml",
      icon: "Brain",
      description: "Advanced AI for language analysis and processing"
    },
    { 
      name: "Cultural Institutions", 
      href: "/solutions/cultural-institutions",
      icon: "Building",
      description: "Digital solutions for museums and cultural centers"
    },
  ],
  Resources: [
    { 
      name: "Case Studies", 
      href: "/case-studies",
      icon: "FileText",
      description: "See how our solutions work in real-world cases"
    },
    { 
      name: "Documentation", 
      href: "/resources/documentation",
      icon: "FileCode",
      description: "Comprehensive guides for using our platforms"
    },
    { 
      name: "API", 
      href: "/resources/api",
      icon: "Terminal",
      description: "Technical documentation for developers"
    },
    { 
      name: "Community Forum", 
      href: "/resources/forum",
      icon: "Users",
      description: "Connect with others in our language preservation community"
    },
  ],
  About: [
    { 
      name: "Our Story", 
      href: "/about/our-story",
      icon: "Book",
      description: "Learn about our mission and journey"
    },
    { 
      name: "Team", 
      href: "/about/team",
      icon: "UserPlus",
      description: "Meet the people behind Wekify"
    },
    { 
      name: "Culture", 
      href: "/about/culture",
      icon: "Heart",
      description: "Our values and what drives us"
    },
  ],
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMegaMenuToggle = (menuName: string) => {
    if (activeMegaMenu === menuName) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuName);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Wekify Logo"
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
            <div key={menuName} className="relative">
              <button
                onClick={() => handleMegaMenuToggle(menuName)}
                className="flex items-center text-text-primary hover:text-primary font-medium transition-colors duration-300"
              >
                {menuName}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeMegaMenu === menuName ? "rotate-180" : ""}`}
                />
              </button>

              {activeMegaMenu === menuName && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl p-4">
                  <div className="grid gap-2">
                    {megaMenuItems[menuName as keyof typeof megaMenuItems].map(
                      (item) => {
                        const Icon = item.icon ? IconMap[item.icon] : null;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-3 hover:bg-gray-50 rounded text-text-primary hover:text-primary transition-colors"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            <div className="flex items-start">
                              {Icon && (
                                <div className="icon-container mr-3 mt-1">
                                  <Icon className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:text-primary transform group-hover:scale-110" />
                                </div>
                              )}
                              <div>
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-gray-500 mt-1">
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

          <Link href="/contact" className="btn-primary ml-4">
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

            <Link
              href="/contact"
              className="btn-primary block text-center"
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
