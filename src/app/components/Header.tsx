"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// Types for navigation items
interface NavItem {
  name: string;
  href: string;
}

interface Navigation {
  solutions: NavItem[];
  company: NavItem[];
  resources: NavItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation: Navigation = {
    solutions: [
      { name: "Overview", href: "/solutions" },
      { name: "Content Platform", href: "/solutions/content-platform" },
      { name: "Integration Services", href: "/solutions/integrations" },
      { name: "Custom Solutions", href: "/solutions/custom" },
    ],
    company: [
      { name: "About Us", href: "/about/company" },
      { name: "Team", href: "/about/team" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "https://blog.wekify.com" },
    ],
    resources: [
      { name: "Resource Hub", href: "/resources" },
      { name: "Documentation", href: "https://docs.wekify.com" },
      { name: "Community", href: "https://community.wekify.com" },
    ],
  };

  const renderNavLink = (item: NavItem) => {
    if (item.href.startsWith("http")) {
      return (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 
            transition-colors"
        >
          {item.name}
        </a>
      );
    }
    return (
      <Link
        key={item.name}
        href={item.href}
        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 
          transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    );
  };

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
            {/* Desktop Dropdown Menus */}
            {Object.entries(navigation).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 
                    transition-colors capitalize"
                >
                  {key}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 
                      ${openDropdown === key ? "rotate-180" : ""}`}
                  />
                </button>

                {openDropdown === key && (
                  <div
                    className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 
                    border border-gray-100"
                  >
                    {items.map((item: NavItem) => renderNavLink(item))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Button */}
            <a
              href="https://ayivugwekabemba.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm 
                font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
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
            {Object.entries(navigation).map(([key, items]) => (
              <div key={key} className="space-y-2">
                <div className="px-4 text-sm font-medium text-gray-500 uppercase">
                  {key}
                </div>
                <div className="space-y-1">
                  {items.map((item: NavItem) => renderNavLink(item))}
                </div>
              </div>
            ))}
            <div className="px-4 pt-4">
              <a
                href="https://ayivugwekabemba.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-lg 
                  font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
