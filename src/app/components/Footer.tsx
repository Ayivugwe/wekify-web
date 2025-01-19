import React from "react";
import Link from "next/link";
import {
  Globe,
  Mail,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const footerSections = {
    solutions: {
      title: "Solutions",
      links: [
        {
          label: "Digital Dictionary Platform",
          href: "/solutions/digital-dictionary",
        },
        {
          label: "Integration Platform",
          href: "/solutions/integration-platform",
        },
        { label: "Language Learning Tools", href: "/solutions/learning-tools" },
        {
          label: "Cultural Heritage Archive",
          href: "/solutions/heritage-archive",
        },
        { label: "Enterprise Solutions", href: "/solutions/enterprise" },
        { label: "Security & Compliance", href: "/solutions/security" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/resources/docs" },
        { label: "API Reference", href: "/resources/api" },
        { label: "User Guides", href: "/resources/guides" },
        { label: "Video Tutorials", href: "/resources/tutorials" },
        { label: "Resource Library", href: "/resources/library" },
        { label: "Community Forums", href: "/resources/community" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "Our Story", href: "/about/our-story" },
        { label: "Culture & Values", href: "/about/culture" },
        { label: "Careers", href: "/about/careers" },
        { label: "Partners", href: "/about/partners" },
        { label: "Newsroom", href: "/about/news" },
        { label: "Contact", href: "/about/contact" },
      ],
    },
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Uvira, South Kivu, DR Congo & Spokane WA, USA",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@wekify.com",
    },
    {
      icon: Globe,
      label: "Languages",
      value: "Kifuliiru, Kiswahili, English, Français",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/wekify" },
    { icon: Twitter, href: "https://twitter.com/wekify" },
    { icon: Linkedin, href: "https://linkedin.com/company/wekify" },
    { icon: Youtube, href: "https://youtube.com/@wekify" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info & Newsletter - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                Wekify
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Empowering indigenous language preservation through innovative
              digital solutions. Building bridges between heritage and
              technology.
            </p>

            {/* Newsletter Signup */}

            <div className="pt-4">
              <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-2 max-w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 
        focus:outline-none focus:border-blue-500 text-gray-300"
                />
                <button
                  className="whitespace-nowrap px-4 py-2 bg-blue-600 text-white rounded-lg 
      hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-white font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-start gap-3">
              <info.icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium">{info.label}</h4>
                <p className="text-gray-400">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Wekify. Founded by Ayivugwe Kabemba.
            All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
