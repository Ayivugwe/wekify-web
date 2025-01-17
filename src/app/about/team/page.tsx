import React from "react";
import Image from "next/image";
import {
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Code,
  Users,
  Database,
  BookOpen,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A dedicated group of innovators working to preserve linguistic
              diversity through technology
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 group">
                <Image
                  src="/ayivugwe.png"
                  alt="Ayivugwe Kabemba"
                  width={150}
                  height={150}
                  priority
                  className="rounded-full w-full h-full object-cover transition-transform 
                    duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 
                  scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                ></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Ayivugwe Kabemba
              </h2>
              <p className="text-blue-600 font-medium mb-4">
                Founder & Lead Developer
              </p>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Passionate about leveraging technology to preserve indigenous
                languages and cultures. Leading the development of digital
                solutions for language preservation, starting with Kifuliiru.
              </p>

              <div className="flex justify-center gap-4">
                {[
                  { icon: <Github className="w-6 h-6" />, href: "#" },
                  { icon: <Twitter className="w-6 h-6" />, href: "#" },
                  { icon: <Linkedin className="w-6 h-6" />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors hover:bg-blue-50 rounded-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We&apos;re looking for passionate individuals to help us preserve
            and promote linguistic diversity. Join us in making a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Software Engineers",
                description: "Build innovative language preservation tools",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Linguists",
                description: "Document and structure language data",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Scientists",
                description: "Analyze and process language patterns",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Managers",
                description: "Build and nurture user communities",
              },
            ].map((position, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="mb-4 p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 
                  transition-all duration-300 group-hover:rotate-6"
                >
                  {position.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {position.title}
                </h3>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <button
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium 
                  group-hover:underline transition-all duration-300"
                >
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in our mission to preserve indigenous languages and
              empower communities through technology.
            </p>
            <a
              href="https://ayivugwekabemba.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 
                rounded-xl font-medium hover:bg-blue-50 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace creative solutions and cutting-edge technology to solve complex challenges",
              },
              {
                title: "Collaboration",
                description:
                  "Working together with communities and experts to achieve meaningful results",
              },
              {
                title: "Impact",
                description:
                  "Making a real difference in language preservation and cultural heritage",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                  transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
