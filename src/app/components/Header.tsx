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
  Brain,
  Sparkles,
  Lightbulb,
  Map,
  CircleCheck,
  DollarSign,
  Languages,
  Info,
  Target,
  Users2,
  Database,
  BarChart,
  LucideIcon,
} from "lucide-react";

// Icon mapping for dynamic rendering
const IconMap: Record<string, LucideIcon> = {
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
  Brain,
  Sparkles,
  Lightbulb,
  Map,
  CheckCircle: CircleCheck,
  Dollar: DollarSign,
  Languages,
  Info,
  Target,
  Users2,
  Database,
  BarChart,
};

type MenuItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

const megaMenuItems: Record<string, MenuItem[]> = {
  solutions: [
    {
      title: "Language Learning",
      description: "Interactive platforms for teaching and learning indigenous languages",
      icon: BookOpen,
      link: "/solutions#learning",
    },
    {
      title: "Digital Archives",
      description: "Secure storage and management of language resources",
      icon: Database,
      link: "/solutions#archives",
    },
    {
      title: "Community Tools",
      description: "Tools for community engagement and collaboration",
      icon: Users,
      link: "/solutions#community",
    },
  ],
  about: [
    {
      title: "About Us",
      description: "Learn about our mission and vision for language preservation",
      icon: Globe,
      link: "/about-us",
    },
    {
      title: "Our Mission",
      description: "Understanding our commitment to language preservation",
      icon: Target,
      link: "/about-us#mission",
    },
    {
      title: "AI & Us",
      description: "How we use AI to enhance language preservation",
      icon: Brain,
      link: "/about-us#ai-and-us",
    },
    {
      title: "Our Team",
      description: "Meet the people behind Wekify",
      icon: Users,
      link: "/about-us#team",
    },
  ],
  resources: [
    {
      title: "Blog",
      description: "Insights and updates about language preservation",
      icon: BookOpen,
      link: "/blog",
    },
    {
      title: "Documentation",
      description: "Guides and resources for language preservation",
      icon: FileText,
      link: "/resources",
    },
    {
      title: "Case Studies",
      description: "Success stories from language communities",
      icon: BarChart,
      link: "/case-studies",
    },
  ],
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({ Languages: false });

  const handleMegaMenuHover = (menuName: string | null) => {
    setActiveMegaMenu(menuName);
  };

  const handleMegaMenuToggle = (menuName: string) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  const toggleMenu = (menuName: string) => {
    setIsOpen((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const getIcon = (iconName: string, props: any) => {
    const Icon = IconMap[iconName] || (() => null); // Handle missing icons
    return <Icon {...props} />;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50">
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
              <button
                className="flex items-center text-text-primary hover:text-primary font-medium transition-colors duration-300"
                onClick={() => handleMegaMenuToggle(menuName)}
              >
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
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.link}
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
                                  {item.title}
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
            href="/contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300 ml-4"
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
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.link}
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
                                <div className="font-medium">{item.title}</div>
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
              href="/about-us"
              className="block text-text-primary hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-800 transition-colors shadow-md"
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