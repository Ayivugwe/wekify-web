
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, BookOpen, Users, Zap, ArrowRight, Check } from "lucide-react";
import Layout from "./components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wekify - Language Preservation Platform",
  description: "Empowering indigenous language preservation through digital innovation.",
  keywords: ["language preservation", "digital platform", "indigenous languages", "Kifuliiru"],
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Preserving Indigenous Languages Through Digital Innovation
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Wekify empowers communities to document, learn, and celebrate their languages with cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/solutions" className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
                  Explore Solutions
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-primary transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-[400px] h-[400px]">
                {/* Glowing circle background */}
                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.3)]"></div>
                
                {/* Floating elements */}
                <div className="absolute top-[20%] left-[15%] bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg animate-float">
                  <Globe className="h-12 w-12 text-white" />
                </div>
                <div className="absolute bottom-[20%] right-[15%] bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg animate-float-delay">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <div className="absolute top-[60%] left-[25%] bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg animate-float-longer">
                  <Zap className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Wekify Preserves Languages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools needed to document, teach, and revitalize endangered languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10 text-primary" />,
                title: "Digital Dictionaries",
                description: "Create comprehensive digital dictionaries with audio recordings, example sentences, and cultural context."
              },
              {
                icon: <BookOpen className="w-10 h-10 text-primary" />,
                title: "Learning Resources",
                description: "Develop interactive learning materials that make language acquisition engaging and effective."
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Community Building",
                description: "Connect speakers and learners through forums, events, and collaborative projects."
              },
              {
                icon: <Zap className="w-10 h-10 text-primary" />,
                title: "AI-Powered Tools",
                description: "Leverage artificial intelligence to assist with translation, transcription, and content creation."
              },
              {
                icon: <Check className="w-10 h-10 text-primary" />,
                title: "Cultural Preservation",
                description: "Document cultural practices, stories, and traditions alongside language materials."
              },
              {
                icon: <ArrowRight className="w-10 h-10 text-primary" />,
                title: "Custom Solutions",
                description: "Tailored technology solutions designed specifically for your language community's needs."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 p-3 rounded-xl w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Story: Kifuliiru</h2>
              <p className="text-gray-600 mb-6">
                Our journey began with the Bafuliiru community in Eastern DRC, where we've built a comprehensive digital platform for the Kifuliiru language.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Digital dictionary with 5,000+ entries",
                  "Audio recordings from native speakers",
                  "Interactive learning materials",
                  "Community forums and events"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-3 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/case-studies" className="inline-flex items-center text-primary font-medium hover:underline">
                Read the full case study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/ayivugwe.png"
                alt="Kifuliiru language preservation project"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What People Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Wekify has transformed our ability to preserve our language for future generations. It's exactly what our community needed.",
                author: "Jean-Pierre Mwanza",
                role: "Community Leader"
              },
              {
                quote: "The digital dictionary they built for us has become an invaluable resource for both teaching and documenting our language.",
                author: "Marie Kubavu",
                role: "Language Teacher"
              },
              {
                quote: "I've been able to reconnect with my heritage language thanks to the learning resources Wekify has developed.",
                author: "David Bisimwa",
                role: "Diaspora Community Member"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Language Preservation Journey?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Contact our team today to discuss how we can help preserve and revitalize your language.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
