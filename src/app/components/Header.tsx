"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/Button";
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
  ArrowRight,
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
  atlas: [
    {
      title: "Languages Directory",
      description: "Browse our comprehensive language directory",
      icon: Languages,
      link: "/languages",
    },
    {
      title: "Assessment",
      description: "Evaluate language resources and needs",
      icon: CircleCheck,
      link: "/assessment",
    },
    {
      title: "Countries",
      description: "Explore languages by country",
      icon: Globe,
      link: "/countries",
    },
    {
      title: "Continents",
      description: "Browse languages by continent",
      icon: Map,
      link: "/continents",
    },
    {
      title: "Currencies",
      description: "Currency information by region",
      icon: DollarSign,
      link: "/currencies",
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

  const handleMegaMenuHover = (menuName: string | null) => {
    setActiveMegaMenu(menuName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Wekify"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">Wekify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("solutions")}
              onMouseLeave={() => handleMegaMenuHover(null)}
            >
              <Link
                href="/solutions"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Solutions
              </Link>
              {activeMegaMenu === "solutions" && (
                <div className="absolute top-full left-0 w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 p-6 mt-2">
                  <div className="grid grid-cols-1 gap-4">
                    {megaMenuItems.solutions.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("about")}
              onMouseLeave={() => handleMegaMenuHover(null)}
            >
              <Link
                href="/about-us"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                About Us
              </Link>
              {activeMegaMenu === "about" && (
                <div className="absolute top-full left-0 w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 p-6 mt-2">
                  <div className="grid grid-cols-1 gap-4">
                    {megaMenuItems.about.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("atlas")}
              onMouseLeave={() => handleMegaMenuHover(null)}
            >
              <Link
                href="/languages"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Atlas
              </Link>
              {activeMegaMenu === "atlas" && (
                <div className="absolute top-full left-0 w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 p-6 mt-2">
                  <div className="grid grid-cols-1 gap-4">
                    {megaMenuItems.atlas.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("resources")}
              onMouseLeave={() => handleMegaMenuHover(null)}
            >
              <Link
                href="/resources"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Resources
              </Link>
              {activeMegaMenu === "resources" && (
                <div className="absolute top-full left-0 w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 p-6 mt-2">
                  <div className="grid grid-cols-1 gap-4">
                    {megaMenuItems.resources.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="space-y-4">
              <Link
                href="/solutions"
                className="block text-gray-600 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about-us"
                className="block text-gray-600 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/languages"
                className="block text-gray-600 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Atlas
              </Link>
              <Link
                href="/resources"
                className="block text-gray-600 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;