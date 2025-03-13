"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
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

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions/digital-content"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Content Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/integration-services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Integration Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/custom"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/ai-vision"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI & Language Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/language-preservation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Language Preservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources & About</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about/our-story"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about/culture"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/getting-started"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/documentation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/forum"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail
                  className="mt-1 mr-3 text-gray-400 flex-shrink-0"
                  size={16}
                />
                <a
                  href="mailto:contact@wekify.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@wekify.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone
                  className="mt-1 mr-3 text-gray-400 flex-shrink-0"
                  size={16}
                />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin
                  className="mt-1 mr-3 text-gray-400 flex-shrink-0"
                  size={16}
                />
                <span className="text-gray-400">
                  123 Language Street, Cultural District, 10001
                </span>
              </li>
              <li className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
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
