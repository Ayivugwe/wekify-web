import React, { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  Menu,
  X,
  Layers,
  Code,
  BookOpen,
  Users,
  Globe,
  FileText,
  PlayCircle,
  MessageCircle,
  Building,
  Rocket,
  ExternalLink,
} from "lucide-react";

interface MenuItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface MenuSection {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
}

interface MenuStructure {
  [key: string]: {
    title: string;
    sections: MenuSection[];
  };
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuStructure: MenuStructure = {
    solutions: {
      title: "Solutions",
      sections: [
        {
          title: "Products",
          icon: Rocket,
          items: [
            {
              icon: Layers,
              title: "Digital Dictionary",
              description: "Comprehensive language documentation",
              href: "/solutions/digital-dictionary",
            },
            {
              icon: Code,
              title: "Integration Platform",
              description: "Connect and extend your systems",
              href: "/solutions/integration-platform",
            },
          ],
        },
        {
          title: "By Industry",
          icon: Building,
          items: [
            {
              icon: Globe,
              title: "Cultural Institutions",
              description: "Preserve and share heritage",
              href: "/solutions/cultural-institutions",
            },
            {
              icon: BookOpen,
              title: "Educational",
              description: "Tools for learning and teaching",
              href: "/solutions/education",
            },
          ],
        },
      ],
    },
    resources: {
      title: "Resources",
      sections: [
        {
          title: "Documentation",
          icon: FileText,
          items: [
            {
              icon: BookOpen,
              title: "Getting Started",
              description: "Quick start guides and tutorials",
              href: "/resources/getting-started",
            },
            {
              icon: Code,
              title: "API Reference",
              description: "Technical documentation",
              href: "/resources/api",
            },
          ],
        },
        {
          title: "Learning",
          icon: Users,
          items: [
            {
              icon: PlayCircle,
              title: "Video Tutorials",
              description: "Step-by-step video guides",
              href: "/resources/tutorials",
            },
            {
              icon: MessageCircle,
              title: "Community Forum",
              description: "Connect and learn from others",
              href: "/resources/forum",
            },
          ],
        },
      ],
    },
  };

  const IconWrapper = ({
    icon: Icon,
    className,
  }: {
    icon: LucideIcon;
    className?: string;
  }) => {
    return <Icon className={className} />;
  };

  const renderMenuItem = (item: MenuItem) => {
    const content = (
      <div className="flex items-start gap-3 p-2">
        <div
          className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center 
          group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-200"
        >
          <IconWrapper icon={item.icon} className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
            {item.title}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
        </div>
      </div>
    );

    return (
      <Link
        key={item.title}
        href={item.href}
        className="group block rounded-lg hover:bg-gray-50 transition-all duration-300"
      >
        {content}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="flex items-center px-6 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mr-8"
          >
            Wekify
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center flex-1">
            <div className="flex items-center gap-6 flex-1">
              {Object.entries(menuStructure).map(([key, menu]) => {
                return (
                  <div key={key} className="relative group">
                    <button
                      className={`group flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium
                        transition-colors hover:text-blue-600 ${
                          activeMenu === key ? "text-blue-600" : "text-gray-600"
                        }`}
                      onMouseEnter={() => setActiveMenu(key)}
                      onClick={() =>
                        setActiveMenu(activeMenu === key ? null : key)
                      }
                    >
                      {menu.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMenu === key ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeMenu === key && (
                      <div
                        onMouseEnter={() => setActiveMenu(key)}
                        onMouseLeave={() => setActiveMenu(null)}
                        className="fixed left-0 right-0 top-16 bg-white shadow-lg border-t border-gray-100
                          transition-all duration-200"
                      >
                        <div className="max-w-7xl mx-auto px-8 py-6">
                          <div className="grid grid-cols-2 gap-8">
                            {menu.sections.map((section, idx) => (
                              <div
                                key={idx}
                                className={
                                  idx > 0 ? "border-l border-gray-100 pl-8" : ""
                                }
                              >
                                <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                  <IconWrapper
                                    icon={section.icon}
                                    className="w-5 h-5 text-blue-600"
                                  />
                                  {section.title}
                                </h3>
                                <div className="space-y-2">
                                  {section.items.map((item) =>
                                    renderMenuItem(item)
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 
                  transition-colors rounded-md"
              >
                About
              </Link>
            </div>

            {/* Contact Button (far right) */}
            <a
              href="https://ayivugwekabemba.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 
                text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
            >
              Contact Us
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors ml-auto"
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
          <div className="lg:hidden border-t border-gray-100">
            <div className="p-4 space-y-6">
              {Object.entries(menuStructure).map(([key, menu]) => (
                <div key={key} className="space-y-4">
                  <h3 className="font-semibold text-gray-900">{menu.title}</h3>
                  {menu.sections.map((section, idx) => (
                    <div key={idx} className="pl-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-2">
                        {section.items.map((item) => renderMenuItem(item))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <div className="pt-4 space-y-4">
                <Link
                  href="/about"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <a
                  href="https://ayivugwekabemba.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white 
                    rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
