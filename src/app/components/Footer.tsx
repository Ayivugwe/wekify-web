"use client";

import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-200 pt-8">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Wekify. Founded by Ayivugwe
            Kabemba.
          </p>
          <div className="flex gap-6">
            {[
              { icon: <Github className="w-5 h-5" />, href: "#" },
              { icon: <Twitter className="w-5 h-5" />, href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
