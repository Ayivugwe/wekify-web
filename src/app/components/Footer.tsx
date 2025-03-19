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
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reuse the same menu structure as Header
  const footerLinks = {
    Solutions: [
      { name: "Language Learning", href: "/solutions#learning" },
      { name: "Digital Archives", href: "/solutions#archives" },
      { name: "Community Tools", href: "/solutions#community" },
    ],
    "About Us": [
      { name: "Overview", href: "/about-us" },
      { name: "Our Mission", href: "/about-us#mission" },
      { name: "AI & Us", href: "/about-us#ai-and-us" },
      { name: "Our Team", href: "/about-us#team" },
    ],
    Atlas: [
      { name: "Languages Directory", href: "/languages" },
      { name: "Assessment", href: "/assessment" },
      { name: "Countries", href: "/countries" },
      { name: "Continents", href: "/continents" },
      { name: "Currencies", href: "/currencies" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/resources" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Wekify Logo"
                width={150}
                height={46}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering communities to preserve and celebrate indigenous
              languages through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Menu Sections */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-lg font-semibold mb-4">{section}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Wekify. All rights reserved.
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
