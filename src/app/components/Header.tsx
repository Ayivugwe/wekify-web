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
            <Link
              href="/solutions"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/about-us"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/languages"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              Atlas
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              Resources
            </Link>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
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