import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Book, Bookmark, AudioLines } from "lucide-react";

const DictionarySection = () => {
  return (
    <section className="section bg-background-alt">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Digital Dictionary Platform</h2>
            <p className="mb-6">
              Our comprehensive digital dictionary is the cornerstone of language preservation, offering modern tools for documenting, exploring, and learning indigenous languages.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Search className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Advanced Search</h4>
                  <p className="text-text-secondary">Find words and phrases using multiple criteria, including semantic fields and usage examples.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Book className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Rich Content</h4>
                  <p className="text-text-secondary">Includes pronunciations, etymology, usage examples, and cultural context for comprehensive understanding.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <AudioLines className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Audio Recordings</h4>
                  <p className="text-text-secondary">Listen to native speakers pronounce words and phrases to perfect your pronunciation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Bookmark className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Personal Collections</h4>
                  <p className="text-text-secondary">Save words, create study lists, and track your learning progress over time.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/solutions/digital-dictionary" className="btn-primary">
                Explore the Dictionary
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/logo.png"
              alt="Digital Dictionary Platform"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Kifuliiru Digital Dictionary</h3>
                <p className="text-white/90">Over 10,000 entries with audio, examples, and cultural context</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DictionarySection;