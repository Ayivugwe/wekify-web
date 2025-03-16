import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import Layout from "./components/layout";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";
import GamePromoBanner from "./components/GamePromoBanner";
import FuliiruHubShowcase from "./components/FuliiruHubShowcase";
import FeaturesShowcase from "./components/FeaturesShowcase";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./components/FadeIn";
import {
  ArrowRight,
  Zap,
  Globe,
  Users,
  BookOpen,
  Clipboard,
  Languages,
  Heart,
  Shield,
  Gamepad,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wekify - Language Preservation Platform",
  description:
    "Empowering indigenous language preservation through digital innovation.",
  keywords: [
    "language preservation",
    "digital platform",
    "indigenous languages",
    "Kifuliiru",
  ],
};

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Hero Section with Globe */}
        <HeroSection />

        {/* Key Features Section - Teal/Green Background */}
        <section className="py-24 bg-gradient-to-b from-teal-500 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Language Tools
              </h2>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                Our platform offers comprehensive tools to document, teach, and
                celebrate languages for generations to come.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-teal-300" />,
                  title: "Digital Dictionary",
                  description:
                    "Create comprehensive dictionaries with audio recordings, images, and cultural context.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-teal-300" />,
                  title: "Learning Tools",
                  description:
                    "Interactive modules for teaching vocabulary, grammar, and conversational skills.",
                },
                {
                  icon: <Users className="h-10 w-10 text-teal-300" />,
                  title: "Community Building",
                  description:
                    "Connect speakers and learners through collaborative features and forums.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition-all duration-300 text-white"
                >
                  <div className="bg-white/20 p-4 rounded-full inline-block mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-teal-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FuliiruHub Case Study */}
        <FuliiruHubShowcase />

        {/* Assessment Features Section */}
        <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
                Language Readiness Assessment
              </h2>
              <p className="text-xl text-indigo-700/70 max-w-3xl mx-auto">
                Evaluate your language preservation needs with our comprehensive
                assessment tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Clipboard className="h-10 w-10 text-indigo-600" />,
                  title: "Current Status Evaluation",
                  description:
                    "Assess the vitality of your language based on UNESCO's framework for language endangerment.",
                },
                {
                  icon: <Users className="h-10 w-10 text-indigo-600" />,
                  title: "Speaker Demographics",
                  description:
                    "Analyze speaker population, age distribution, and intergenerational transmission patterns.",
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
                  title: "Resource Inventory",
                  description:
                    "Identify existing documentation, educational materials, and digital resources for your language.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-indigo-600" />,
                  title: "Custom Roadmap",
                  description:
                    "Receive a tailored preservation strategy based on your assessment results.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-100"
                >
                  <div className="bg-indigo-100 p-4 rounded-full inline-block mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                    {feature.title}
                  </h3>
                  <p className="text-indigo-700/70">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/assessment"
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg inline-flex items-center"
              >
                Take the Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Language Game Section */}
        <GamePromoBanner />

        {/* World Languages Showcase */}
        <section className="py-24 bg-gradient-to-b from-slate-100 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Supporting Languages Worldwide
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our platform is designed to support indigenous and endangered
                languages from every continent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 rounded-xl bg-white shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="bg-slate-100 p-4 rounded-full">
                    <Languages className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-slate-800">
                    Global Language Directory
                  </h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Browse our extensive catalog of languages organized by region,
                  language family, and vitality status.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-2"></span>
                    African languages including Kifuliiru, Swahili, Yoruba, and
                    more
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-2"></span>
                    Indigenous American languages including Quechua and Navajo
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-2"></span>
                    Pacific languages including Māori and Hawaiian
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-2"></span>
                    European endangered languages including Welsh and Sámi
                  </li>
                </ul>
                <Link
                  href="/languages"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Explore All Languages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="relative rounded-xl overflow-hidden h-[400px] shadow-lg">
                <Image
                  src="/ambassadors.jpg"
                  alt="Global language communities and ambassadors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Join Our Ambassador Program
                  </h3>
                  <p className="text-white/90 mb-4">
                    Connect with language advocates from around the world
                    dedicated to preservation efforts.
                  </p>
                  <Link
                    href="/ambassador"
                    className="px-6 py-2 bg-white text-slate-800 rounded-full font-medium hover:bg-slate-100 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision & Policies Section */}
        <section className="py-24 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Vision & Guiding Principles
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                We're committed to ethical language preservation that empowers
                communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">Our Vision</h3>
                </div>
                <p className="text-blue-100 mb-6">
                  We envision a world where every language is valued,
                  documented, and actively used across generations, preserving
                  the unique cultural knowledge and perspectives they contain.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2"></span>
                    <p className="text-blue-100">
                      Empowering communities to lead their own language
                      preservation efforts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2"></span>
                    <p className="text-blue-100">
                      Making language technology accessible to all communities
                      regardless of resources
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2"></span>
                    <p className="text-blue-100">
                      Creating sustainable models for ongoing language
                      development
                    </p>
                  </li>
                </ul>
                <Link
                  href="/about/vision"
                  className="mt-8 inline-flex items-center text-white font-medium hover:text-blue-200"
                >
                  Learn More About Our Vision{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">Our Policies</h3>
                </div>
                <p className="text-blue-100 mb-6">
                  Our work is guided by strong ethical principles that respect
                  community ownership and cultural sensitivity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2"></span>
                    <p className="text-blue-100">
                      Community-driven development that centers indigenous
                      priorities
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2"></span>
                    <p className="text-blue-100">
                      Data sovereignty ensuring communities retain ownership of
                      their language data
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2"></span>
                    <p className="text-blue-100">
                      Privacy-first approach to technology development
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2"></span>
                    <p className="text-blue-100">
                      Transparent and accountable partnership models
                    </p>
                  </li>
                </ul>
                <Link
                  href="/about/our-policies"
                  className="mt-8 inline-flex items-center text-white font-medium hover:text-blue-200"
                >
                  Review Our Policies <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
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
              Join the Bafuliiru community who are successfully revitalizing
              their language with our digital preservation platform.
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
