// File location: app/solutions/education/page.tsx

import React from "react";
import { ArrowRight, BookOpen, Users, PlayCircle } from "lucide-react";
import Layout from "@/app/components/layout";

export default function EducationPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Educational Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Enhance language learning and teaching with our digital tools
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  title: "Interactive Learning",
                  description:
                    "Engage students with interactive language learning tools and exercises",
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Classroom Management",
                  description:
                    "Tools for teachers to track progress and manage classes effectively",
                },
                {
                  icon: <PlayCircle className="w-8 h-8 text-blue-600" />,
                  title: "Multimedia Resources",
                  description:
                    "Rich media content for immersive language learning experiences",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-8">
                Transform Your Classroom
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join educators worldwide in using our platform for language
                education
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
                >
                  View Resources
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
