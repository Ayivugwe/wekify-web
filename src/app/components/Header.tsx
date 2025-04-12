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
  Solutions: [
    {
      name: "Language Learning",
      href: "/solutions#learning",
      icon: "BookOpen",
      description:
        "Interactive platforms for teaching and learning indigenous languages",
    },
    {
      name: "Digital Archives",
      href: "/solutions#archives",
      icon: "Database",
      description: "Secure storage and management of language resources",
    },
    {
      name: "Community Tools",
      href: "/solutions#community",
      icon: "Users",
      description: "Tools for community engagement and collaboration",
    },
    {
      name: "AI & Language Vision",
      href: "/solutions#ai-vision",
      icon: "Brain",
      description: "Our approach to using AI for language revitalization",
    },
  ],

  Resources: [
    {
      name: "Blog",
      href: "/blog",
      icon: "BookOpen",
      description: "Insights and updates about language preservation",
    },
    {
      name: "Documentation",
      href: "/resources",
      icon: "FileText",
      description: "Technical documentation and implementation guides",
    },
    {
      name: "Security",
      href: "/security",
      icon: "Shield",
      description: "Learn about our security and privacy measures",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
      icon: "BarChart",
      description: "Success stories from language communities",
    },
    {
      name: "Community Forum",
      href: "/resources#forum",
      icon: "Users",
      description: "Connect with language preservation advocates",
    },
  ],

  Atlas: [
    {
      name: "Languages Directory",
      href: "/languages",
      icon: "Languages",
      description: "Browse our comprehensive language directory",
    },
    {
      name: "Assessment",
      href: "/assessment",
      icon: "CheckCircle",
      description: "Evaluate language resources and needs",
    },
    {
      name: "Countries",
      href: "/countries",
      icon: "Globe",
      description: "Explore languages by country",
    },
    {
      name: "Continents",
      href: "/continents",
      icon: "Map",
      description: "Browse languages by continent",
    },
    {
      name: "Contribute a Language",
      href: "/languages/contribute",
      icon: "Share2",
      description: "Share your language with the world",
    },
  ],

  "About Us": [
    {
      name: "About Us",
      href: "/about",
      icon: "Info",
      description: "Learn about Wekify LLC and our journey",
    },
    {
      name: "Our Story",
      href: "/about/our-story",
      icon: "BookOpen",
      description:
        "The journey from vision to reality - how Wekify LLC was born",
    },
    {
      name: "Our Mission",
      href: "/about/mission",
      icon: "Target",
      description: "Understanding our commitment to language preservation",
    },
    {
      name: "Our Vision",
      href: "/about/vision",
      icon: "Lightbulb",
      description: "Our vision for the future of language preservation",
    },
    {
      name: "Our Team",
      href: "/about/team",
      icon: "Users2",
      description: "Meet the people behind Wekify LLC",
    },
    {
      name: "Our Culture",
      href: "/about/culture",
      icon: "Heart",
      description: "Our values and cultural principles",
    },
    {
      name: "Locations",
      href: "/about/locations",
      icon: "Map",
      description: "Our presence in the world",
    },
    {
      name: "Contact",
      href: "/about/contact",
      icon: "MessageSquare",
      description: "Get in touch with our team",
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

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

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
            href="/faq"
            className="text-text-primary hover:text-primary font-medium transition-colors duration-300"
          >
            FAQ
          </Link>

         
        </nav>

        <Link
          href="/contact"
          className="px-6 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300 ml-4"
        >
          Contact Us
        </Link>

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
              href="/contact"
              className="block text-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-md"
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
