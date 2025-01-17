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
  CircuitBoard,
  Database,
  Cloud,
  Shield,
  Cpu,
  Brain,
  Heart,
  Network,
  Palette,
  Book,
  GraduationCap,
  School,
  Library,
  Newspaper,
  HelpCircle,
  Info,
  Phone,
  Mail,
  MapPin,
  Building2,
  Users2,
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
          title: "Core Products",
          icon: Rocket,
          items: [
            {
              icon: Layers,
              title: "Digital Dictionary Platform",
              description:
                "Comprehensive language documentation and preservation",
              href: "/solutions/digital-dictionary",
            },
            {
              icon: Code,
              title: "Integration Platform",
              description: "Connect and extend language preservation systems",
              href: "/solutions/integration-platform",
            },
            {
              icon: CircuitBoard,
              title: "Language Learning Tools",
              description: "Interactive platforms for language acquisition",
              href: "/solutions/learning-tools",
            },
            {
              icon: Database,
              title: "Cultural Heritage Archive",
              description: "Digital preservation of cultural assets",
              href: "/solutions/heritage-archive",
            },
          ],
        },
        {
          title: "Enterprise Solutions",
          icon: Building,
          items: [
            {
              icon: Cloud,
              title: "Cloud Infrastructure",
              description: "Scalable cloud solutions for language platforms",
              href: "/solutions/cloud",
            },
            {
              icon: Shield,
              title: "Security & Compliance",
              description: "Enterprise-grade security for sensitive data",
              href: "/solutions/security",
            },
            {
              icon: Cpu,
              title: "AI & Machine Learning",
              description: "Advanced language processing capabilities",
              href: "/solutions/ai-ml",
            },
            {
              icon: Network,
              title: "API Ecosystem",
              description: "Extensible API framework for integration",
              href: "/solutions/api",
            },
          ],
        },
        {
          title: "By Industry",
          icon: Globe,
          items: [
            {
              icon: Book,
              title: "Academic Research",
              description: "Tools for linguistic research and analysis",
              href: "/solutions/academic",
            },
            {
              icon: Heart,
              title: "Non-Profit Organizations",
              description: "Solutions for cultural preservation initiatives",
              href: "/solutions/non-profit",
            },
            {
              icon: Building2,
              title: "Government Institutions",
              description: "Language preservation for public sector",
              href: "/solutions/government",
            },
            {
              icon: Palette,
              title: "Cultural Centers",
              description: "Digital platforms for cultural engagement",
              href: "/solutions/cultural-centers",
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
              title: "API Documentation",
              description: "Comprehensive API references",
              href: "/resources/api",
            },
            {
              icon: Book,
              title: "User Guides",
              description: "Detailed platform documentation",
              href: "/resources/guides",
            },
            {
              icon: Brain,
              title: "Best Practices",
              description: "Implementation guidelines and tips",
              href: "/resources/best-practices",
            },
          ],
        },
        {
          title: "Learning Center",
          icon: GraduationCap,
          items: [
            {
              icon: PlayCircle,
              title: "Video Tutorials",
              description: "Step-by-step video guides",
              href: "/resources/tutorials",
            },
            {
              icon: School,
              title: "Training Programs",
              description: "Structured learning paths",
              href: "/resources/training",
            },
            {
              icon: Library,
              title: "Resource Library",
              description: "Downloadable resources and tools",
              href: "/resources/library",
            },
            {
              icon: Users,
              title: "Community Forums",
              description: "Connect with other users",
              href: "/resources/community",
            },
          ],
        },
        {
          title: "Updates & Support",
          icon: HelpCircle,
          items: [
            {
              icon: Newspaper,
              title: "Latest Updates",
              description: "Product updates and announcements",
              href: "/resources/updates",
            },
            {
              icon: MessageCircle,
              title: "Support Center",
              description: "Technical support and help",
              href: "/resources/support",
            },
            {
              icon: Heart,
              title: "Success Stories",
              description: "Customer case studies",
              href: "/resources/success-stories",
            },
            {
              icon: Users2,
              title: "Partner Network",
              description: "Implementation partners directory",
              href: "/resources/partners",
            },
          ],
        },
      ],
    },
    about: {
      title: "About",
      sections: [
        {
          title: "Company",
          icon: Building2,
          items: [
            {
              icon: Info,
              title: "Our Story",
              description: "Learn about our mission and vision",
              href: "/about/story",
            },
            {
              icon: Users2,
              title: "Leadership Team",
              description: "Meet our executive team",
              href: "/about/leadership",
            },
            {
              icon: Heart,
              title: "Culture & Values",
              description: "What drives us forward",
              href: "/about/culture",
            },
            {
              icon: MapPin,
              title: "Locations",
              description: "Our global presence",
              href: "/about/locations",
            },
          ],
        },
        {
          title: "Connect",
          icon: Phone,
          items: [
            {
              icon: Mail,
              title: "Contact Us",
              description: "Get in touch with our team",
              href: "/about/contact",
            },
            {
              icon: Building,
              title: "Careers",
              description: "Join our growing team",
              href: "/about/careers",
            },
            {
              icon: Users,
              title: "Partners",
              description: "Partnership opportunities",
              href: "/about/partners",
            },
            {
              icon: Newspaper,
              title: "Newsroom",
              description: "Latest news and press releases",
              href: "/about/news",
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
      <div className="flex items-start gap-4 p-3">
        <div
          className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center 
          group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-200"
        >
          <IconWrapper icon={item.icon} className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <div className="text-base font-medium text-gray-900 group-hover:text-blue-600">
            {item.title}
          </div>
          <div className="text-sm text-gray-500 mt-0.5">{item.description}</div>
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
            <div className="flex items-center gap-8 flex-1">
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
                        className="absolute left-0 top-full bg-white shadow-lg rounded-lg border border-gray-100
                          transition-all duration-200 w-[900px]"
                      >
                        <div className="p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {menu.sections.map((section, idx) => (
                              <div
                                key={idx}
                                className={
                                  idx > 0 ? "border-l border-gray-100 pl-8" : ""
                                }
                              >
                                <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
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
              <div className="pt-4">
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
