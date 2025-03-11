
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const megaMenuItems = {
  Solutions: [
    { name: "Language Preservation", href: "/solutions/language-preservation" },
    { name: "Digital Learning", href: "/solutions/digital-learning" },
    { name: "Cultural Heritage", href: "/solutions/cultural-heritage" },
  ],
  Resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/resources/documentation" },
    { name: "API", href: "/resources/api" },
  ],
  About: [
    { name: "Our Story", href: "/about/our-story" },
    { name: "Team", href: "/about/team" },
    { name: "Culture", href: "/about/culture" },
  ],
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMegaMenuToggle = (menuName: string) => {
    if (activeMegaMenu === menuName) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuName);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Wekify Logo"
              width={220}
              height={68}
              className="h-16 w-auto"
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
            <div key={menuName} className="relative">
              <button
                onClick={() => handleMegaMenuToggle(menuName)}
                className="flex items-center text-text-primary hover:text-primary font-medium transition-colors duration-300"
              >
                {menuName}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeMegaMenu === menuName ? 'rotate-180' : ''}`} />
              </button>
              
              {activeMegaMenu === menuName && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl p-4">
                  <div className="grid gap-2">
                    {megaMenuItems[menuName as keyof typeof megaMenuItems].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block p-2 hover:bg-gray-50 rounded text-text-primary hover:text-primary transition-colors"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
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
            className="btn-primary ml-4"
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
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMegaMenu === menuName ? 'rotate-180' : ''}`} />
                </button>
                
                {activeMegaMenu === menuName && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-100">
                    {megaMenuItems[menuName as keyof typeof megaMenuItems].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-text-primary hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
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
              href="/contact"
              className="btn-primary block text-center"
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
