
import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Award, Brain } from "lucide-react";
import { Button } from "@/app/components/Button";

export default function GamePromoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Language Longevity Game</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Learn endangered languages through play. Save words, build your vocabulary, and contribute to 
              language preservation awareness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
              <div className="inline-flex items-center justify-center bg-primary-100 text-primary p-3 rounded-full mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn Through Play</h3>
              <p className="text-gray-600">
                Expand your knowledge of endangered languages while having fun and testing your memory.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
              <div className="inline-flex items-center justify-center bg-amber-100 text-amber-600 p-3 rounded-full mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Your Streak</h3>
              <p className="text-gray-600">
                Create chains of correct answers to earn bonus points and climb the leaderboard.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Achievements</h3>
              <p className="text-gray-600">
                Build your personal word collection and contribute to global language preservation efforts.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/language-game">
              <Button size="lg" className="inline-flex items-center">
                Play Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
