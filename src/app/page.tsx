
import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import Layout from "./components/layout";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";
import GamePromoSection from "./components/GamePromoSection";
import { LanguageDirectoryPromo } from "./components/LanguageDirectoryPromo";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./components/FadeIn";
import { ArrowRight, Zap, Globe, Users, BookOpen, BarChart, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Wekify - Language Preservation Platform",
  description: "Empowering indigenous language preservation through digital innovation.",
  keywords: ["language preservation", "digital platform", "indigenous languages", "Kifuliiru"],
};

export default function Home() {
  return (
    <Layout>
      <main>
      {/* Hero Section with Globe */}
      <HeroSection />

      {/* Key Benefits Section - Teal/Green Background */}
      <section className="py-24 bg-gradient-to-b from-teal-500 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preserve Your Heritage Through Technology
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Our platform offers comprehensive tools to document, teach, and celebrate 
              indigenous languages for generations to come.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-teal-300" />,
                title: "Digital Dictionary",
                description: "Create comprehensive dictionaries with audio recordings, images, and cultural context."
              },
              {
                icon: <Zap className="h-10 w-10 text-teal-300" />,
                title: "Learning Tools",
                description: "Interactive modules for teaching vocabulary, grammar, and conversational skills."
              },
              {
                icon: <Users className="h-10 w-10 text-teal-300" />,
                title: "Community Building",
                description: "Connect speakers and learners through collaborative features and forums."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition-all duration-300 text-white">
                <div className="bg-white/20 p-4 rounded-full inline-block mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-teal-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Directory Promo - Light Gray Background */}
      <LanguageDirectoryPromo />
      
      {/* Game Promo Section - Purple Background */}
      <GamePromoSection />

      {/* Case Studies Section - Orange Background */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Success Stories
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  See how communities around the world are using Wekify to revitalize their languages
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "The Bafuliiru Language Project",
                      description: "Created a digital dictionary with 5,000+ entries, complete with audio recordings and cultural context."
                    },
                    {
                      title: "Hawaiian Language Initiative",
                      description: "Developed interactive learning modules that increased language proficiency by 45% among youth participants."
                    }
                  ].map((story, index) => (
                    <div key={index} className="bg-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-white mb-2">{story.title}</h3>
                      <p className="text-white/80">{story.description}</p>
                    </div>
                  ))}
                </div>
                
                <Link href="/case-studies" className="mt-8 inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-all shadow-md hover:shadow-lg">
                  View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </FadeIn>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/ayivugwe.png" 
                  alt="Language Preservation Success Story" 
                  width={600} 
                  height={450}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-orange-600 text-white px-4 py-2 rounded-full w-fit mb-4">
                    Success Story
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Ayivugwe Project</h3>
                  <p className="text-white/90">Preserving oral traditions through digital storytelling</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="text-3xl font-bold text-orange-600">85%</div>
                <div className="text-sm text-gray-600">Engagement Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Blue Background */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Languages Supported" },
              { number: "120K+", label: "Dictionary Entries" },
              { number: "15K+", label: "Active Users" },
              { number: "28", label: "Community Partners" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Dark Blue Background */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to document, teach, and celebrate your language
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-indigo-400" />,
                title: "Digital Dictionary",
                description: "Build comprehensive, searchable dictionaries with multimedia content"
              },
              {
                icon: <BarChart className="h-8 w-8 text-indigo-400" />,
                title: "Analytics Dashboard",
                description: "Track language learning progress and content engagement"
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-400" />,
                title: "Cultural Context",
                description: "Connect language to heritage with cultural notes and references"
              },
              {
                icon: <Globe className="h-8 w-8 text-indigo-400" />,
                title: "Integration API",
                description: "Connect with other platforms and services through our API"
              },
              {
                icon: <Award className="h-8 w-8 text-indigo-400" />,
                title: "Certification",
                description: "Create custom language proficiency certifications"
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-400" />,
                title: "Community Tools",
                description: "Forums, events, and collaborative features for your language community"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300">
                <div className="bg-slate-800 p-4 rounded-xl inline-block mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqData} />

      {/* CTA Section - Green Gradient */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Preserving Your Language?
          </h2>
          <p className="text-xl mb-10 text-emerald-100 max-w-3xl mx-auto">
            Join communities worldwide who are successfully revitalizing their languages 
            with our digital preservation platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/assessment" 
              className="px-8 py-4 bg-white text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Start Your Free Assessment
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-all border border-emerald-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
    </Layout>
  );
}
