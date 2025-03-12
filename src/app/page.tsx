import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import Layout from "./components/layout";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";
import GamePromoBanner from "./components/GamePromoBanner";
import KifuliiruShowcase from "./components/KifuliiruShowcase";
import FuliiruHubShowcase from "./components/FuliiruHubShowcase";
import KifuliiruStats from "./components/KifuliiruStats";
import FeaturesShowcase from "./components/FeaturesShowcase";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./components/FadeIn";
import { ArrowRight, Zap, Globe, Users, BookOpen } from "lucide-react";

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

        {/* Key Features Section - Teal/Green Background */}
        <section className="py-24 mt-16 bg-gradient-to-b from-teal-500 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Language Tools
              </h2>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                Our platform offers comprehensive tools to document, teach, and celebrate 
                languages for generations to come.
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

        {/* Kifuliiru Language Showcase */}
        <KifuliiruShowcase />

        {/* Game Promo Section */}
        <GamePromoBanner />

        {/* FuliiruHub Showcase */}
        <FuliiruHubShowcase />

        {/* Kifuliiru Stats Section */}
        <KifuliiruStats />

        {/* Features Section */}
        <FeaturesShowcase />

        {/* FAQ Section */}
        <FAQSection faqs={faqData} />

        {/* CTA Section - Green Gradient */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Preserving Your Language?
            </h2>
            <p className="text-xl mb-10 text-emerald-100 max-w-3xl mx-auto">
              Join the Bafuliiru community who are successfully revitalizing their language 
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