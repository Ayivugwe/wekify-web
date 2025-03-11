import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Wekify Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering indigenous language preservation through digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/digital-dictionary" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Dictionary</Link></li>
              <li><Link href="/solutions/integration-platform" className="text-gray-400 hover:text-white transition-colors duration-300">Integration Platform</Link></li>
              <li><Link href="/solutions/cultural-institutions" className="text-gray-400 hover:text-white transition-colors duration-300">Cultural Institutions</Link></li>
              <li><Link href="/solutions/education" className="text-gray-400 hover:text-white transition-colors duration-300">Education</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link href="/resources/api" className="text-gray-400 hover:text-white transition-colors duration-300">API</Link></li>
              <li><Link href="/resources/forum" className="text-gray-400 hover:text-white transition-colors duration-300">Community Forum</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="/about/team" className="text-gray-400 hover:text-white transition-colors duration-300">Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Wekify LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;