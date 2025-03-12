
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function FuliiruHubShowcase() {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 to-amber-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
                Success Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                FuliiruHub: Preserving the Kifuliiru Language
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our flagship project focuses on documenting and revitalizing the Kifuliiru language spoken by the Bafuliiru people in Eastern Congo.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-2">Digital Dictionary</h3>
                  <p className="text-white/80">
                    Created a comprehensive digital dictionary with 3,500+ entries, complete with audio recordings, example sentences, and cultural context.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-2">Community Engagement</h3>
                  <p className="text-white/80">
                    Engaged with local speakers to document authentic pronunciation and usage, ensuring the preservation of linguistic nuances.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://fuliiruHub.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-xl font-medium hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Visit FuliiruHub.com <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/case-studies/fuliiru" 
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white border border-orange-400 rounded-xl font-medium hover:bg-orange-700 transition-all shadow-lg"
                >
                  View Case Study
                </Link>
              </div>
            </FadeIn>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/fuliiru-hub-homepage.png" 
                  alt="FuliiruHub Gateway" 
                  width={500} 
                  height={350}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-sm font-bold text-white">Gateway to Kifuliiru</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/fuliiru-hub-about.png" 
                  alt="FuliiruHub About" 
                  width={500} 
                  height={350}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-sm font-bold text-white">Mission & Goals</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/fuliiru-hub-contribute.png" 
                  alt="FuliiruHub Contribute" 
                  width={500} 
                  height={350}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-sm font-bold text-white">Community Contribution</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/fuliiru-hub-motherland.png" 
                  alt="FuliiruHub Ibufuliiru" 
                  width={500} 
                  height={350}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-sm font-bold text-white">Ibufuliiru Section</h4>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="text-3xl font-bold text-orange-600">65%</div>
              <div className="text-sm text-gray-600">Community Participation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
