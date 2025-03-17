import React from "react";
import {
  Brain,
  Code,
  Globe,
  BookOpen,
  Users,
  Sparkles,
  Library,
  Share2,
} from "lucide-react";
import Layout from "../components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Wekify",
  description: "Digital solutions for language preservation and cultural revitalization",
  keywords: ["language preservation", "digital solutions", "technology", "indigenous languages"],
};

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Language Preservation Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're developing comprehensive digital solutions to support language preservation, 
              focusing on both technological tools and community empowerment.
            </p>
          </div>

          {/* Current Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/50 p-8 rounded-xl border border-gray-100">
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Documentation</h3>
              <p className="text-gray-600 mb-4">
                Tools and platforms for documenting language resources, including dictionaries,
                grammars, and cultural materials.
              </p>
            </div>

            <div className="bg-white/50 p-8 rounded-xl border border-gray-100">
              <div className="bg-green-50 p-3 rounded-lg w-fit mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
              <p className="text-gray-600 mb-4">
                Platforms for connecting language communities, facilitating collaboration,
                and sharing knowledge.
              </p>
            </div>

            <div className="bg-white/50 p-8 rounded-xl border border-gray-100">
              <div className="bg-purple-50 p-3 rounded-lg w-fit mb-6">
                <Library className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Literacy</h3>
              <p className="text-gray-600 mb-4">
                Training and resources to help communities establish and maintain
                their online presence and digital assets.
              </p>
            </div>
          </div>

          {/* Future Directions */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Future Explorations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As we grow, we're working towards expanding our capabilities in these areas:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4">AI & Language Technology</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <span>Language processing and analysis tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <span>Automated transcription services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span>Machine learning for language patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Community Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-green-600" />
                    <span>Cross-community collaboration platforms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <span>Educational resource development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>Cultural preservation initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}