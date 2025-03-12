
import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Globe, Search, Languages } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function LanguageDirectoryPromo() {
  return (
    <section className="bg-gray-50 py-16">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the World's Languages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive directory features languages from every continent, 
              with information on speaker populations and language vitality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Organized by Region</h3>
              <p className="text-gray-600 text-center">
                Browse languages by continent and geographic region to discover linguistic diversity around the world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Search Functionality</h3>
              <p className="text-gray-600 text-center">
                Easily find specific languages with our powerful search tool to quickly access the information you need.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Languages className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Vitality Information</h3>
              <p className="text-gray-600 text-center">
                Understand the status of each language with vitality indicators from healthy to critically endangered.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/languages">
              <Button variant="primary" size="lg" className="mx-auto">
                Explore Languages Directory
              </Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
