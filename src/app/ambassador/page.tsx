
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Star, Globe, Heart, Award, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Ambassador | Wekify",
  description: "Join our ambassador program and help preserve languages in your community. Make a difference by connecting technology with cultural heritage.",
  keywords: "language ambassador, cultural preservation, community leader, language technology",
};

export default function AmbassadorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Wekify Language Ambassador</h1>
            <p className="text-xl md:text-2xl mb-8">Join our global network of passionate advocates preserving cultural heritage through technology</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#apply"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply Now <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#learn-more"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Program Overview */}
      <section id="learn-more" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Preserving Languages, Building Communities
            </h2>
            <p className="text-xl text-gray-700">
              Wekify Ambassadors play a crucial role in bridging technology with cultural preservation. As an ambassador, you'll help communities document, learn, and celebrate their indigenous languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expand Reach</h3>
              <p className="text-gray-700">
                Help bring Wekify's language preservation tools to your community and beyond, reaching more indigenous language speakers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Community</h3>
              <p className="text-gray-700">
                Organize workshops, events, and initiatives that bring together language enthusiasts and native speakers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gain Recognition</h3>
              <p className="text-gray-700">
                Receive official certification, exclusive networking opportunities, and recognition for your cultural preservation work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Community Image Section */}
      <section className="py-20 bg-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Join a Global Community of Language Advocates
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Our ambassadors span across continents, united by a shared passion for language preservation and cultural heritage. When you become an ambassador, you're joining a supportive network of like-minded individuals.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Connect with other language preservation advocates",
                    "Participate in exclusive ambassador events and conferences", 
                    "Share knowledge and best practices across cultures",
                    "Collaborate on cross-cultural language initiatives",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#ambassador-stories"
                  className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Read Ambassador Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="rounded-xl overflow-hidden shadow-xl transform md:rotate-2 hover:rotate-0 transition-all duration-500">
                  <Image
                    src="/ambassador-community.jpg"
                    alt="Wekify Ambassador Community"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center z-10 shadow-lg transform rotate-12">
                  <Star className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Ambassador Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ambassador Benefits
            </h2>
            <p className="text-xl text-gray-700">
              Wekify values your contribution and offers exclusive benefits to our ambassadors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-indigo-600" />,
                title: "Official Certification",
                description: "Receive official recognition as a Wekify Language Ambassador with digital and physical credentials."
              },
              {
                icon: <Heart className="h-8 w-8 text-indigo-600" />,
                title: "Early Access",
                description: "Be the first to access new Wekify features, tools, and language resources."
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Exclusive Network",
                description: "Connect with other ambassadors, language experts, and the Wekify team."
              },
              {
                icon: <Clock className="h-8 w-8 text-indigo-600" />,
                title: "Professional Development",
                description: "Access training, workshops, and resources to enhance your skills."
              },
            ].map((benefit, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="rounded-full bg-indigo-50 w-14 h-14 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Apply to Become an Ambassador</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Ready to make a difference in language preservation? We're looking for passionate advocates to join our global network.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2" htmlFor="full-name">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="location">
                    Location/Region
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="languages">
                    Languages You Speak
                  </label>
                  <input
                    id="languages"
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                    placeholder="Language 1, Language 2, ..."
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="motivation">
                    Why do you want to become a Wekify Ambassador?
                  </label>
                  <textarea
                    id="motivation"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                    placeholder="Share your motivation and how you plan to contribute..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-5 w-5 bg-white/20 border border-white/30 rounded focus:ring-indigo-500 text-indigo-600"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm">
                    I agree to the <a href="#" className="underline hover:text-white/80">Terms and Conditions</a> and <a href="#" className="underline hover:text-white/80">Privacy Policy</a>
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-indigo-700 rounded-full font-medium text-lg hover:bg-indigo-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700">
                Have questions about becoming a Wekify Ambassador? Find answers below.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What is expected of a Wekify Ambassador?",
                  answer: "Ambassadors promote language preservation in their communities, organize events, provide feedback on Wekify products, and contribute to our global network of language advocates."
                },
                {
                  question: "Is this a paid position?",
                  answer: "The ambassador program is primarily volunteer-based, focused on making a positive impact in language preservation. However, ambassadors receive exclusive benefits, networking opportunities, and professional development resources."
                },
                {
                  question: "How much time commitment is required?",
                  answer: "The program is flexible and can be adapted to your availability. We recommend dedicating at least 5-10 hours monthly to ambassador activities."
                },
                {
                  question: "Can I apply if my language isn't currently supported by Wekify?",
                  answer: "Absolutely! We're especially interested in expanding to new languages. Your insights would be valuable in helping us develop resources for additional languages."
                },
                {
                  question: "What is the application process like?",
                  answer: "After submitting your application, our team will review it and contact qualified candidates for a video interview. Selected ambassadors receive an onboarding package and join our next cohort."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">
                Still have questions about the ambassador program?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference in Language Preservation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our ambassador program today and help bridge technology with cultural heritage.
            </p>
            <Link
              href="#apply"
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply Now <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
