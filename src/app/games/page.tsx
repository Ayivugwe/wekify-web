"use client";

import React from "react";
import Layout from "../components/layout";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";
import { ArrowLeft, Sparkles, Trophy, Languages, Brain, Globe, BookOpen, Users } from "lucide-react";
import Link from "next/link";

export default function GamesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container mx-auto px-4 py-16">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <Sparkles className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-primary-600 font-medium">Discover & Learn</span>
                </div>
                <h1 className="text-5xl font-bold text-primary-900 mb-6">
                  Language Adventure Awaits!
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Embark on a journey through endangered languages. Each game is a step towards preserving our world's linguistic treasures.
                </p>
              </div>

              {/* Main Game Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl transform group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary-100 rounded-lg mr-4">
                        <Languages className="h-8 w-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">Word Match</h3>
                        <p className="text-primary-600">Match words to their meanings</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Test your knowledge by matching words from endangered languages to their English translations. Each correct match helps preserve these valuable linguistic treasures!
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                        Beginner Friendly
                      </span>
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                        Quick Play
                      </span>
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                        Educational
                      </span>
                    </div>
                    <Button 
                      className="w-full py-4 text-lg font-medium bg-primary-600 hover:bg-primary-700 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href="/games/word-match">
                        Start Playing
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-400 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl transform group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-slate-100 rounded-lg mr-4">
                        <Brain className="h-8 w-8 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Language Challenge</h3>
                        <p className="text-slate-600">Coming Soon</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Get ready for an exciting new game that will test your knowledge of language families, regions, and cultural connections.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">
                        Advanced Level
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">
                        Coming Soon
                      </span>
                    </div>
                    <Button 
                      className="w-full py-4 text-lg font-medium bg-slate-600 hover:bg-slate-700 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                    <Globe className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-900 mb-3">Global Exploration</h4>
                  <p className="text-slate-600">
                    Journey through languages from every corner of the world and discover their unique beauty.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-900 mb-3">Interactive Learning</h4>
                  <p className="text-slate-600">
                    Learn through play with engaging games that make language learning fun and memorable.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-900 mb-3">Community Impact</h4>
                  <p className="text-slate-600">
                    Join a community dedicated to preserving and celebrating linguistic diversity.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Language Journey?</h3>
                <p className="text-primary-100 mb-6">
                  Join thousands of language enthusiasts in preserving endangered languages through play.
                </p>
                <Button 
                  className="px-8 py-3 text-base font-medium bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/games/word-match">
                    Begin Your Adventure
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
} 