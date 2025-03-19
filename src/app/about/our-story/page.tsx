import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Award, Search, Rocket, Users, GraduationCap, Smartphone, Globe, Network } from "lucide-react";
import Layout from "../../components/layout";
import { Button } from "../../components/Button";

export default function OurStoryPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-primary-700/70 mb-10 max-w-3xl mx-auto">
              The journey of building Wekify and our mission to preserve
              indigenous languages.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-2xl border border-primary-100 p-8 md:p-12">
              <div className="flex items-center mb-10">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="ml-4 text-2xl font-bold text-primary-800">
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
                      className="rounded-xl border border-primary-100"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-primary-800">The Spark</h3>
                    <p className="text-primary-700/70 mb-4">
                      Wekify began with a simple observation: as the digital
                      world expanded, many indigenous languages were being left
                      behind. Our founder, witnessing his own community's
                      language struggling to find a place in the digital
                      landscape, recognized an opportunity to bridge this gap.
                    </p>
                    <p className="text-primary-700/70">
                      What started as a small project to digitize a single
                      language dictionary has evolved into a comprehensive
                      platform supporting dozens of languages across multiple
                      continents.
                    </p>
                  </div>
                </div>

                <div className="pt-10">
                  <h3 className="text-xl font-semibold mb-4 text-primary-800">
                    The Mission Takes Shape
                  </h3>
                  <p className="text-primary-700/70 mb-4">
                    In 2019, after extensive research and collaboration with
                    linguistic experts, the Wekify platform was launched with
                    support for its first three languages. The response was
                    overwhelming, with communities eager to document and
                    preserve their linguistic heritage.
                  </p>
                  <p className="text-primary-700/70">
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
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary-800">
                Our Journey
              </h2>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-100"></div>

                {/* Timeline items */}
                <div className="space-y-16">
                  {[
                    {
                      year: "2018",
                      title: "Research & Development",
                      description: "Initial research into language preservation technologies and methodologies.",
                      icon: Search,
                    },
                    {
                      year: "2019",
                      title: "Platform Launch",
                      description: "First version of Wekify launched with support for three languages.",
                      icon: Rocket,
                    },
                    {
                      year: "2020",
                      title: "Community Growth",
                      description: "Expansion to ten languages and establishment of our community contribution model.",
                      icon: Users,
                    },
                    {
                      year: "2021",
                      title: "Academic Partnerships",
                      description: "Formed partnerships with universities and linguistic research institutions.",
                      icon: GraduationCap,
                    },
                    {
                      year: "2022",
                      title: "Mobile Applications",
                      description: "Released mobile applications for iOS and Android to reach more communities.",
                      icon: Smartphone,
                    },
                    {
                      year: "2023",
                      title: "Global Expansion",
                      description: "Reached 50+ languages across five continents with enhanced features.",
                      icon: Globe,
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                      
                      {/* Content */}
                      <div className={`w-1/2 ${index % 2 === 0 ? 'ml-auto pl-8' : 'pr-8'}`}>
                        <div className="bg-white rounded-xl border border-primary-100 p-6 hover:border-primary-200 transition-colors">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary-50 p-2 rounded-lg">
                              <item.icon className="w-5 h-5 text-primary-600" />
                            </div>
                            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-primary-800">{item.title}</h3>
                          <p className="text-primary-700/70">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary-800">
              Our Vision for the Future
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "100+ Languages",
                  description: "Expanding our platform to support over 100 indigenous languages by 2025.",
                  icon: Globe,
                },
                {
                  title: "Community Tools",
                  description: "Developing comprehensive tools for community-led language documentation and teaching.",
                  icon: Users,
                },
                {
                  title: "Global Network",
                  description: "Building a worldwide network of language experts, developers, and cultural advocates.",
                  icon: Network,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-primary-100 p-6 hover:border-primary-200 transition-colors"
                >
                  <div className="bg-primary-50 p-3 rounded-lg w-fit mb-4">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-800">
                    {item.title}
                  </h3>
                  <p className="text-primary-700/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">
              Join Our Story
            </h2>
            <p className="text-xl text-primary-700/70 mb-10">
              Whether you're a linguist, developer, or simply passionate about
              language preservation, there are many ways to contribute to our
              mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/team">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
