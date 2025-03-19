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
  ArrowRight,
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

const megaMenuItems = {
  solutions: [
    {
      title: "Language Learning",
      description: "Interactive tools and resources for learning endangered languages",
      href: "/solutions/language-learning",
      icon: "🎓",
    },
    {
      title: "Digital Archives",
      description: "Secure storage and management of language documentation",
      href: "/solutions/digital-archives",
      icon: "📚",
    },
    {
      title: "Community Tools",
      description: "Collaborative platforms for language preservation",
      href: "/solutions/community-tools",
      icon: "👥",
    },
  ],
  about: [
    {
      title: "Our Mission",
      description: "Learn about our commitment to language preservation",
      href: "/about-us#mission",
      icon: "🎯",
    },
    {
      title: "Our Team",
      description: "Meet the people behind Wekify",
      href: "/about-us#team",
      icon: "👥",
    },
    {
      title: "AI and Us",
      description: "How we use AI in language preservation",
      href: "/ai-and-us",
      icon: "🤖",
    },
  ],
  atlas: [
    {
      title: "Languages Directory",
      description: "Explore our comprehensive database of languages",
      href: "/languages",
      icon: "🌍",
    },
    {
      title: "Assessment",
      description: "Evaluate language vitality and preservation needs",
      href: "/assessment",
      icon: "📊",
    },
    {
      title: "Countries",
      description: "Browse languages by country and region",
      href: "/countries",
      icon: "🗺️",
    },
    {
      title: "Continents",
      description: "Discover linguistic diversity across continents",
      href: "/continents",
      icon: "🌎",
    },
    {
      title: "Currencies",
      description: "Explore currency information and exchange rates",
      href: "/currencies",
      icon: "💰",
    },
  ],
  resources: [
    {
      title: "Blog",
      description: "Latest news and insights about language preservation",
      href: "/blog",
      icon: "📝",
    },
    {
      title: "Documentation",
      description: "Technical guides and API documentation",
      href: "/docs",
      icon: "📖",
    },
    {
      title: "Case Studies",
      description: "Success stories from language preservation projects",
      href: "/case-studies",
      icon: "��",
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

  const getIcon = (iconName: string, props: any) => {
    const Icon = IconMap[iconName] || (() => null);
    return <Icon {...props} />;
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Wekify"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {Object.entries(megaMenuItems).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMegaMenuHover(key)}
                onMouseLeave={() => handleMegaMenuHover(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-primary-600">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Mega Menu */}
                {activeMegaMenu === key && (
                  <div className="absolute top-full left-0 w-screen max-w-md bg-white shadow-lg rounded-lg mt-2 p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex items-start p-3 rounded-lg hover:bg-primary-50 transition-colors"
                        >
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <div>
                            <h3 className="text-base font-medium text-gray-900 group-hover:text-primary-600">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(megaMenuItems).map(([key, items]) => (
              <div key={key}>
                <div className="px-3 py-2 text-base font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
                {items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
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