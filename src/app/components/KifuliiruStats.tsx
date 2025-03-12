
import React from "react";
import { Database, Book, Users, Award } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function KifuliiruStats() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kifuliiru Digital Preservation</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Our ongoing work documenting and preserving the Kifuliiru language
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-600/50 rounded-xl mb-4">
                <Book className="h-7 w-7" />
              </div>
              <div className="text-4xl font-bold mb-2">3,500+</div>
              <div className="text-blue-200">Dictionary Entries</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-600/50 rounded-xl mb-4">
                <Database className="h-7 w-7" />
              </div>
              <div className="text-4xl font-bold mb-2">120+</div>
              <div className="text-blue-200">Cultural Stories</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-600/50 rounded-xl mb-4">
                <Users className="h-7 w-7" />
              </div>
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-600/50 rounded-xl mb-4">
                <Award className="h-7 w-7" />
              </div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-blue-200">Community Partners</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
