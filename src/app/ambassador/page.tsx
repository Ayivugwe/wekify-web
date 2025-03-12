
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Users, Star, MessageSquare } from "lucide-react";
import Layout from "../components/layout";

export default function AmbassadorPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Become An Ambassador
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join our global network of language ambassadors and help preserve linguistic diversity
              </p>
            </div>
          </div>
        </section>

        {/* What is an Ambassador */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is a Language Ambassador?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Language Ambassadors are passionate volunteers who serve as bridges between their communities and our platform. They champion language preservation efforts in their regions, countries, and local areas.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  As an Ambassador, you'll be at the forefront of preserving linguistic heritage, building local language communities, and ensuring cultural knowledge is passed to future generations.
                </p>
                <Link 
                  href="#apply"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/ambassador-community.jpg"
                  alt="Language ambassador working with community"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Ambassador Responsibilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Language Advocacy</h3>
                <p className="text-gray-700">
                  Promote language preservation in your community and help document local linguistic features.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Building</h3>
                <p className="text-gray-700">
                  Organize local events, workshops, and gatherings to engage speakers and enthusiasts.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cultural Liaison</h3>
                <p className="text-gray-700">
                  Bridge the gap between technology and tradition, ensuring our solutions respect cultural nuances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Ambassador Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex">
                <div className="mr-4">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Recognition & Impact</h3>
                  <p className="text-gray-700">
                    Make a meaningful difference in preserving linguistic heritage while gaining recognition as a cultural leader.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Support & Resources</h3>
                  <p className="text-gray-700">
                    Receive training, tools, and continuous support from our team to maximize your impact.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Network</h3>
                  <p className="text-gray-700">
                    Connect with like-minded individuals from around the world who share your passion for language preservation.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Development</h3>
                  <p className="text-gray-700">
                    Enhance your skills in community building, project management, and cultural documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-20 bg-blue-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Apply to Become an Ambassador</h2>
            <form className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location/Region *
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">
                  Languages You Speak *
                </label>
                <input
                  type="text"
                  id="languages"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to become an Ambassador? *
                </label>
                <textarea
                  id="motivation"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}
