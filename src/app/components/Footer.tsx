"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
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
  CheckCircle,
  BarChart,
  Database,
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reuse the same menu structure as Header
  const footerLinks = {
    Solutions: [
      { 
        name: "Language Learning", 
        href: "/solutions#learning",
        icon: "BookOpen",
        description: "Interactive platforms for teaching and learning indigenous languages"
      },
      { 
        name: "Digital Archives", 
        href: "/solutions#archives",
        icon: "Database",
        description: "Secure storage and management of language resources"
      },
      { 
        name: "Community Tools", 
        href: "/solutions#community",
        icon: "Users",
        description: "Tools for community engagement and collaboration"
      },
      { 
        name: "AI & Language Vision", 
        href: "/solutions#ai-vision",
        icon: "Brain",
        description: "Our approach to using AI for language revitalization"
      },
    ],
    "About Us": [
      { 
        name: "About Us", 
        href: "/about",
        icon: "Info",
        description: "Learn about Wekify LLC and our journey"
      },
      { 
        name: "Language Preservation", 
        href: "/language-preservation",
        icon: "Globe",
        description: "Our approach to preserving and modernizing languages"
      },
      { 
        name: "Our Story", 
        href: "/about/our-story",
        icon: "BookOpen",
        description: "The journey from vision to reality - how Wekify LLC was born"
      },
      { 
        name: "Our Mission", 
        href: "/about/mission",
        icon: "Target",
        description: "Understanding our commitment to language preservation"
      },
      { 
        name: "Our Vision", 
        href: "/about/vision",
        icon: "Lightbulb",
        description: "Our vision for the future of language preservation"
      },
      { 
        name: "Our Team", 
        href: "/about/team",
        icon: "Users2",
        description: "Meet the people behind Wekify LLC"
      },
      { 
        name: "Our Culture", 
        href: "/about/culture",
        icon: "Heart",
        description: "Our values and cultural principles"
      },
      { 
        name: "Locations", 
        href: "/about/locations",
        icon: "Map",
        description: "Our presence in the world"
      },
      { 
        name: "Contact", 
        href: "/about/contact",
        icon: "MessageSquare",
        description: "Get in touch with our team"
      },
    ],
    Atlas: [
      { 
        name: "Languages Directory", 
        href: "/languages",
        icon: "Languages",
        description: "Browse our comprehensive language directory"
      },
      { 
        name: "Assessment", 
        href: "/assessment",
        icon: "CheckCircle",
        description: "Evaluate language resources and needs"
      },
      { 
        name: "Countries", 
        href: "/countries",
        icon: "Globe",
        description: "Explore languages by country"
      },
      { 
        name: "Continents", 
        href: "/continents",
        icon: "Map",
        description: "Browse languages by continent"
      },
      { 
        name: "Contribute a Language", 
        href: "/languages/contribute",
        icon: "Share2",
        description: "Share your language with the world"
      },
    ],
    Resources: [
      { 
        name: "Blog", 
        href: "/blog",
        icon: "BookOpen",
        description: "Insights and updates about language preservation"
      },
      { 
        name: "Documentation", 
        href: "/resources",
        icon: "FileText",
        description: "Technical documentation and implementation guides"
      },
      { 
        name: "Security", 
        href: "/security",
        icon: "Shield",
        description: "Learn about our security and privacy measures"
      },
      { 
        name: "Case Studies", 
        href: "/case-studies",
        icon: "BarChart",
        description: "Success stories from language communities"
      },
      { 
        name: "Community Forum", 
        href: "/resources#forum",
        icon: "Users",
        description: "Connect with language preservation advocates"
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Wekify LLC Logo"
                width={120}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Bridging tradition with technology to preserve and modernize languages for the digital age.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Menu Sections */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} className="md:col-span-1">
              <h3 className="text-sm font-semibold mb-3">{section}</h3>
              <ul className="space-y-2">
                {items.map((item) => {
                  const Icon = item.icon ? IconMap[item.icon] : null;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group block text-gray-400 hover:text-white transition-colors"
                      >
                        <div className="flex items-start">
                          {Icon && (
                            <div className="icon-container mr-3 mt-1 p-1 bg-gray-800 rounded-lg group-hover:bg-primary/10 transition-all duration-300">
                              <Icon className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:text-primary" />
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
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Wekify LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
