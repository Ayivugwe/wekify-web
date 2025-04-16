'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Gamepad2, Share2, Info } from 'lucide-react';
import Image from 'next/image';

export function GamePromoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Play Our Word Preservation Game!
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Help preserve endangered words while having fun. Every word you learn
              and share helps keep a language alive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                  How It Works
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-slate-100 p-2 rounded-full mr-4">
                      <BookOpen className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Learn Words</h4>
                      <p className="text-slate-600">
                        Discover new words from endangered languages with
                        pronunciation guides and cultural context.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-slate-100 p-2 rounded-full mr-4">
                      <Gamepad2 className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Play Games</h4>
                      <p className="text-slate-600">
                        Test your knowledge with fun, interactive games that help
                        reinforce your learning.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-slate-100 p-2 rounded-full mr-4">
                      <Share2 className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Share Progress</h4>
                      <p className="text-slate-600">
                        Share your achievements and help spread awareness about
                        language preservation.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/game">
                      Start Playing
                      <Gamepad2 className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/game/how-to-play">
                      Learn More
                      <Info className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image
                  src="/game-preview.png"
                  alt="Word Preservation Game Preview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}