"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Button } from "./Button";

export default function FuliiruHubShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
                  Success Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                  FuliiruHub: Preserving the{" "}
                  <span className="text-primary-600">Kifuliiru Language</span>
                </h2>
                <p className="text-xl text-primary-700/70 mb-8">
                  Our flagship project focuses on documenting and revitalizing the Kifuliiru language spoken by the Bafuliiru people in Eastern Congo.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                    <h3 className="text-xl font-semibold text-primary-700 mb-2">Digital Dictionary</h3>
                    <p className="text-primary-600">
                      Created a comprehensive digital dictionary with 3,500+ entries, complete with audio recordings, example sentences, and cultural context.
                    </p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                    <h3 className="text-xl font-semibold text-primary-700 mb-2">Community Engagement</h3>
                    <p className="text-primary-600">
                      Engaged with local speakers to document authentic pronunciation and usage, ensuring the preservation of linguistic nuances.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link 
                      href="https://fuliiruHub.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit FuliiruHub.com <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/case-studies/fuliiru">
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "/fuliiru-hub-homepage.png", alt: "FuliiruHub Gateway", title: "Gateway to Kifuliiru" },
                  { src: "/fuliiru-hub-about.png", alt: "FuliiruHub About", title: "Mission & Goals" },
                  { src: "/fuliiru-hub-contribute.png", alt: "FuliiruHub Contribute", title: "Community Contribution" },
                  { src: "/fuliiru-hub-motherland.png", alt: "FuliiruHub Ibufuliiru", title: "Ibufuliiru Section" }
                ].map((image, idx) => (
                  <div key={idx} className="relative rounded-xl overflow-hidden shadow-xl group">
                    <div className="relative aspect-[4/3]">
                      <Image 
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transform transition-all duration-300 group-hover:scale-110 cursor-pointer"
                        onClick={() => setSelectedImage(image.src)}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-sm font-bold text-white">{image.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary-600">65%</div>
                <div className="text-sm text-primary-600">Community Participation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
