import React from "react";
import { ArrowRight, BookOpen, Globe, Users, Code, Shield } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Empowering Linguistic Diversity
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Building bridges between languages and technology to preserve
              cultural heritage for future generations
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: "Language Preservation",
                description:
                  "Documenting and digitizing indigenous languages to ensure their survival in the digital age",
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Cultural Heritage",
                description:
                  "Protecting and promoting cultural diversity through technological innovation",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Community First",
                description:
                  "Building platforms that empower language communities and facilitate learning",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="mb-6 p-3 bg-blue-50 rounded-xl w-fit 
                  group-hover:bg-blue-100 transition-all duration-300"
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Starting with Kifuliiru, we&apos;re creating comprehensive digital
              platforms that preserve indigenous languages and connect
              communities. Our goal is to ensure every language has the digital
              tools and resources it needs to thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Built with Modern Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6 text-blue-600" />,
                title: "Advanced Framework",
                description:
                  "Using Next.js and React for fast, responsive, and scalable applications",
              },
              {
                icon: <Shield className="w-6 h-6 text-blue-600" />,
                title: "Secure Platform",
                description:
                  "Implementing industry-standard security practices to protect user data",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                  transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 p-2 bg-blue-50 rounded-lg w-fit">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a developer, linguist, or passionate about
            language preservation, there&apos;s a place for you at Wekify.
          </p>
          <a
            href="https://ayivugwekabemba.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white 
              rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
