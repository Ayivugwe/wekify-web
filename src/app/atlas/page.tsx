'use client';

import React from 'react';
import { Globe, MapPin, Book, Users, Mic, FileText, ArrowRight, Languages, Heart, Star, Map } from 'lucide-react';
import InteractiveMap from '@/app/components/InteractiveMap';
import Link from 'next/link';

const AtlasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Header section with large globe visual */}
      <header className="relative overflow-hidden bg-indigo-800 text-white">
        <div className="absolute opacity-10 right-0 top-0 w-full h-full">
          <div className="w-full h-full bg-[url('/api/placeholder/1200/600')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Atlas</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">Mapping the World's Linguistic Heritage</p>
              <p className="text-lg mb-8 max-w-xl">
                Explore, contribute, and preserve languages within their geographic
                and cultural contexts in our living digital repository.
              </p>
              <div className="flex space-x-4">
                <Link href="/atlas/explore" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center font-medium transition-all shadow-lg hover:shadow-xl">
                  Explore the Atlas <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/atlas/contribute" className="bg-white text-indigo-800 hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center font-medium transition-all shadow-lg hover:shadow-xl">
                  Contribute
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <Globe className="w-64 h-64 md:w-80 md:h-80 text-blue-200 animate-pulse" strokeWidth={0.5} />
                <div className="absolute top-1/4 left-1/4 bg-teal-500 w-4 h-4 rounded-full animate-ping" />
                <div className="absolute top-1/2 right-1/3 bg-indigo-400 w-3 h-3 rounded-full animate-ping" style={{animationDelay: '1s'}} />
                <div className="absolute bottom-1/3 right-1/4 bg-yellow-400 w-5 h-5 rounded-full animate-ping" style={{animationDelay: '2s'}} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* What is Atlas section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">What is Atlas?</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
                <Map className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Geographic Mapping</h3>
              <p className="text-gray-600">
                Our Atlas connects languages to their places of origin and current usage, preserving the vital connection between language, land, and community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-green-50 p-4 rounded-full inline-block mb-4">
                <Book className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Living Repository</h3>
              <p className="text-gray-600">
                More than a static collection, Atlas is a dynamic digital ecosystem where languages are documented within their cultural contexts.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-purple-50 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Our collaborative approach ensures that communities maintain control over how their languages are documented and shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission section with world map background */}
      <section className="py-16 px-6 bg-indigo-700 text-white relative overflow-hidden">
        <div className="absolute opacity-5 inset-0">
          <div className="w-full h-full bg-[url('/api/placeholder/1200/600')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto rounded-full mb-6"></div>
            <p className="max-w-3xl mx-auto text-blue-100 text-lg">
              At Wekify, we believe that each language represents an irreplaceable system of knowledge and a unique way of understanding the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-teal-500 p-3 rounded-full inline-block mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Document & Preserve</h3>
              <p className="text-blue-100">
                Capture languages at risk of disappearing, preserving their distinctive features and cultural context for future generations.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-yellow-500 p-3 rounded-full inline-block mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empower Communities</h3>
              <p className="text-blue-100">
                Provide accessible digital tools that enable communities to lead their own language revitalization efforts.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-purple-500 p-3 rounded-full inline-block mb-4">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Amplify Voices</h3>
              <p className="text-blue-100">
                Create platforms where traditional knowledge keepers can share their expertise and wisdom with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offerings section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Our Current Offerings</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              The Atlas currently features detailed documentation of several languages, with particular depth in Kifuliiru.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/api/placeholder/600/300" alt="Kifuliiru documentation" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">Featured: Kifuliiru</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Spoken by the Bafuliiru people in the Democratic Republic of Congo, our most comprehensive documentation includes noun classes, narrative structures, and cultural expressions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">400,000+ Speakers</span>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Bantu Language</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">South Kivu Province</span>
                </div>
                <Link href="/atlas/languages/kifuliiru" className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition-colors">
                  Explore Kifuliiru <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">Each Language Profile Includes:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Geographic Distribution</h4>
                    <p className="text-gray-600 text-sm">Maps and demographic information about speakers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <Book className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Linguistic Features</h4>
                    <p className="text-gray-600 text-sm">Detailed documentation of grammar, vocabulary, and usage</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <Mic className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Audio Recordings</h4>
                    <p className="text-gray-600 text-sm">Pronunciation guides and traditional storytelling</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Community Contributions</h4>
                    <p className="text-gray-600 text-sm">Content validated by native speakers and cultural experts</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/atlas/languages" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center font-medium transition-all shadow-md hover:shadow-lg">
                  Explore All Languages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission section */}
      <section className="py-16 px-6 bg-teal-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
            <p className="max-w-3xl mx-auto text-teal-50 text-lg">
              Whether you're a native speaker, language enthusiast, or researcher, you can help us expand this living repository.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <Link href="/atlas/contribute" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-3">Contribute</h3>
              <p className="text-teal-50 mb-4">
                Add information about languages not yet included in our Atlas.
              </p>
              <div className="text-white font-medium flex items-center">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            
            <Link href="/atlas/enhance" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-3">Enhance</h3>
              <p className="text-teal-50 mb-4">
                Add examples or cultural context to existing language documentation.
              </p>
              <div className="text-white font-medium flex items-center">
                Learn How <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            
            <Link href="/atlas/validate" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-3">Validate</h3>
              <p className="text-teal-50 mb-4">
                Help verify and validate submitted content for accuracy.
              </p>
              <div className="text-white font-medium flex items-center">
                Join Reviewers <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            
            <Link href="/atlas/share" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-3">Share</h3>
              <p className="text-teal-50 mb-4">
                Provide recordings, stories, or teaching materials in your language.
              </p>
              <div className="text-white font-medium flex items-center">
                Upload Content <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Explore the Linguistic World</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Navigate our interactive map to discover languages by geographic region.
            </p>
          </div>
          
          <InteractiveMap />
        </div>
      </section>
    </div>
  );
};

export default AtlasPage; 