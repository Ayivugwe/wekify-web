
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { GameController, Star, Trophy, Users } from "lucide-react";

export default function GamePromoBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-violet-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-white/20"></div>
        <div className="absolute -bottom-12 left-1/4 w-64 h-64 rounded-full bg-white/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <GameController className="h-4 w-4 mr-2" /> Fun Learning Experience
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Play Our Word Preservation Game!
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                Make language learning fun with our interactive word game. Match words to images, practice pronunciation, and compete with friends while preserving cultural heritage.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Leaderboards</div>
                    <div className="text-sm text-white/70">Track your progress</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Achievements</div>
                    <div className="text-sm text-white/70">Earn badges & points</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Multiplayer</div>
                    <div className="text-sm text-white/70">Challenge friends</div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/game" 
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-xl font-medium hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1"
              >
                Play Now
              </Link>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-indigo-500/30 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                  <Image 
                    src="/ayivugwe.png" 
                    alt="Word Preservation Game" 
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                
                {/* Game UI overlay elements */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium">
                  Score: 2,450
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl text-center w-4/5">
                  <div className="text-lg font-bold mb-1">Match the word:</div>
                  <div className="text-2xl font-bold">Omutunga</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
