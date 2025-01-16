"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
        >
          Wekify
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/about/company"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
          >
            Company
          </Link>

          <Link
            href="/about/team"
            className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
          >
            Team
          </Link>

          <a
            href="https://ayivugwekabemba.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium 
              transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
