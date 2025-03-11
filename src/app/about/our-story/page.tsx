import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react";
import Layout from "../../components/layout";

export default function OurStoryPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              The journey of building Wekify and our mission to preserve
              indigenous languages.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-10">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-900">
                  Our Beginning
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <Image
                      src="/ayivugwe.png"
                      alt="Wekify Founding"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">The Spark</h3>
                    <p className="text-gray-600 mb-4">
                      Wekify began with a simple observation: as the digital
                      world expanded, many indigenous languages were being left
                      behind. Our founder, witnessing his own community's
                      language struggling to find a place in the digital
                      landscape, recognized an opportunity to bridge this gap.
                    </p>
                    <p className="text-gray-600">
                      What started as a small project to digitize a single
                      language dictionary has evolved into a comprehensive
                      platform supporting dozens of languages across multiple
                      continents.
                    </p>
                  </div>
                </div>

                <div className="pt-10">
                  <h3 className="text-xl font-semibold mb-4">
                    The Mission Takes Shape
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In 2019, after extensive research and collaboration with
                    linguistic experts, the Wekify platform was launched with
                    support for its first three languages. The response was
                    overwhelming, with communities eager to document and
                    preserve their linguistic heritage.
                  </p>
                  <p className="text-gray-600">
                    By 2021, we had expanded our team, refined our technology,
                    and secured partnerships with universities and cultural
                    preservation organizations worldwide. Today, Wekify stands
                    as a leader in indigenous language preservation technology,
                    with a growing community of contributors and users spanning
                    every continent.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-20 space-y-12">
              <h2 className="text-3xl font-bold text-center mb-10">
                Our Journey
              </h2>

              {[
                {
                  year: "2018",
                  title: "Research & Development",
                  description:
                    "Initial research into language preservation technologies and methodologies.",
                },
                {
                  year: "2019",
                  title: "Platform Launch",
                  description:
                    "First version of Wekify launched with support for three languages.",
                },
                {
                  year: "2020",
                  title: "Community Growth",
                  description:
                    "Expansion to ten languages and establishment of our community contribution model.",
                },
                {
                  year: "2021",
                  title: "Academic Partnerships",
                  description:
                    "Formed partnerships with universities and linguistic research institutions.",
                },
                {
                  year: "2022",
                  title: "Mobile Applications",
                  description:
                    "Released mobile applications for iOS and Android to reach more communities.",
                },
                {
                  year: "2023",
                  title: "Global Expansion",
                  description:
                    "Reached 50+ languages across five continents with enhanced AI-powered features.",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-10 pb-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200"></div>
                  <div className="absolute left-[-6px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our Vision for the Future
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "100+ Languages",
                  description:
                    "Expanding our platform to support over 100 indigenous languages by 2025.",
                },
                {
                  title: "Advanced AI Tools",
                  description:
                    "Developing cutting-edge AI to assist in translation, transcription, and language learning.",
                },
                {
                  title: "Global Community",
                  description:
                    "Building a worldwide network of language experts, developers, and cultural advocates.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Story
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Whether you're a linguist, developer, or simply passionate about
              language preservation, there are many ways to contribute to our
              mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/about/team" className="btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
