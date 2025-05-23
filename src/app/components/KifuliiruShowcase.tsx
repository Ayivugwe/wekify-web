"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, BookOpen, Volume, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Card } from "./Card";
import { Button } from "./Button";

export default function KifuliiruShowcase() {
  const [activeTab, setActiveTab] = useState("words");
  
  const sampleWords = [
    { word: "Kubona", pronunciation: "/ku-bo-na/", meaning: "To see", usageExample: "Nambona weko (I see you)" },
    { word: "Omulemi", pronunciation: "/o-mu-le-mi/", meaning: "Farmer", usageExample: "Abalemi bakaziba (Farmers know)" },
    { word: "Omutunga", pronunciation: "/o-mu-tu-nga/", meaning: "Village", usageExample: "Nomutunga gwitu (It's our village)" },
    { word: "Okuula", pronunciation: "/o-ku-u-la/", meaning: "To buy", usageExample: "Ndoola enkoko (I buy a chicken)" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Explore the <span className="text-primary-600">Kifuliiru</span> Language
            </h2>
            <p className="text-xl text-neutral-600">
              Discover the beauty and complexity of the Kifuliiru language spoken by the Bafuliiru people in Eastern Congo.
            </p>
          </FadeIn>
        </div>

        <Card className="overflow-hidden">
          {/* Navigation Tabs */}
          <div className="flex border-b border-neutral-100">
            {["words", "phrases", "culture"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === tab
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8">
            {activeTab === "words" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sampleWords.map((word, index) => (
                    <div key={index} className="bg-neutral-50/50 p-4 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-neutral-900">{word.word}</h3>
                        <button className="text-neutral-600 hover:text-neutral-900">
                          <Volume size={20} />
                        </button>
                      </div>
                      <div className="text-sm text-neutral-600 mb-2">{word.pronunciation}</div>
                      <div className="text-neutral-700 mb-1"><span className="font-medium">Meaning:</span> {word.meaning}</div>
                      <div className="text-neutral-600 text-sm italic">{word.usageExample}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link href="/atlas/dictionary" className="inline-flex items-center text-neutral-600 font-medium hover:text-neutral-900">
                    Explore the full Kifuliiru dictionary <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "phrases" && (
              <div className="space-y-6">
                <div className="bg-neutral-50/50 p-4 rounded-xl border border-neutral-100">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Common Greetings</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <div>
                        <div className="font-medium text-neutral-900">Waasula</div>
                        <div className="text-sm text-neutral-600">Good morning</div>
                      </div>
                      <button className="text-neutral-600 hover:text-neutral-900">
                        <Volume size={18} />
                      </button>
                    </li>
                    <li className="flex justify-between">
                      <div>
                        <div className="font-medium text-neutral-900">Wawihushu</div>
                        <div className="text-sm text-neutral-600">How are you?</div>
                      </div>
                      <button className="text-neutral-600 hover:text-neutral-900">
                        <Volume size={18} />
                      </button>
                    </li>
                  </ul>
                </div>
                <Link href="/atlas/phrases" className="block text-center text-neutral-600 font-medium hover:text-neutral-900">
                  Learn more common phrases <ChevronRight className="inline ml-1 h-4 w-4" />
                </Link>
              </div>
            )}

            {activeTab === "culture" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-48 md:h-auto rounded-xl overflow-hidden border border-neutral-100">
                    <Image
                      src="/ayivugwe.png"
                      alt="Bafuliiru cultural event"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">The Bafuliiru People</h3>
                    <p className="text-neutral-600 mb-4">
                      The Bafuliiru are a Bantu ethnic group living mainly in the South Kivu province of the Democratic Republic of Congo. Their language, Kifuliiru, is part of the rich cultural heritage of the region.
                    </p>
                    <p className="text-neutral-600">
                      The preservation of the Kifuliiru language is vital for maintaining their cultural identity, traditional knowledge, and community cohesion.
                    </p>
                  </div>
                </div>
                <Link href="/about/bafuliiru" className="block text-center text-neutral-600 font-medium hover:text-neutral-900">
                  Learn more about Bafuliiru culture <ChevronRight className="inline ml-1 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link 
              href="https://fuliiruHub.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit FuliiruHub.com <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
