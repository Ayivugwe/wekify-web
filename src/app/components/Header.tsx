
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMegaMenuHover = (menuName: string | null) => {
    setActiveMegaMenu(menuName);
  };

  const navigation = {
    Solutions: [
      { name: "Language Learning", href: "/solutions#learning" },
      { name: "Digital Archives", href: "/solutions#archives" },
      { name: "Community Tools", href: "/solutions#community" },
    ],
    Resources: [
      { name: "Documentation", href: "/documentation" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/about/team" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Wekify LLC Logo"
              width={180}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {Object.entries(navigation).map(([category, items]) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => handleMegaMenuHover(category)}
                onMouseLeave={() => handleMegaMenuHover(null)}
              >
                <button className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
                  {category}
                </button>
                {activeMegaMenu === category && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="space-y-1">
                <div className="px-3 py-2 font-medium text-gray-900">{category}</div>
                {items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
