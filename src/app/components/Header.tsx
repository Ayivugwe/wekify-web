"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about/company", label: "Company" },
    { href: "/about/team", label: "Team" },
    {
      href: "https://ayivugwekabemba.com/contact",
      label: "Contact",
      isExternal: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
              text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
          >
            Wekify
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm 
                    font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg 
                    active:scale-95"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 
                    relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                    after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-center bg-blue-600 text-white rounded-lg 
                    font-medium hover:bg-blue-700 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 
                    hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
