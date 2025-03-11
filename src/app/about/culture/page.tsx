import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Shield,
  Star,
  Users,
  Lightbulb,
  RefreshCw,
} from "lucide-react";
import Layout from "../../components/layout";

export default function CulturePage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Culture
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              The values, principles, and working environment that makes Wekify
              unique.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-primary" />,
                  title: "Compassion",
                  description:
                    "We approach our work with deep empathy for the communities we serve, recognizing the cultural importance of language preservation.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary" />,
                  title: "Integrity",
                  description:
                    "We commit to ethical practices in all aspects of our work, ensuring that communities maintain ownership of their linguistic data.",
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-primary" />,
                  title: "Innovation",
                  description:
                    "We continuously seek creative solutions to complex language preservation challenges through technology and design.",
                },
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: "Collaboration",
                  description:
                    "We believe in the power of working together with communities, linguists, developers, and institutions to achieve our mission.",
                },
                {
                  icon: <Star className="w-8 h-8 text-primary" />,
                  title: "Excellence",
                  description:
                    "We strive for the highest quality in our technology, methodology, and community engagement.",
                },
                {
                  icon: <RefreshCw className="w-8 h-8 text-primary" />,
                  title: "Adaptability",
                  description:
                    "We remain flexible in our approaches, adapting to the unique needs of each language community we serve.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-xl inline-block">
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

        {/* Working at Wekify */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Working at Wekify</h2>
                <p className="text-xl mb-8 opacity-90">
                  Our team comes from diverse backgrounds, united by a passion
                  for language, culture, and technology. We foster an
                  environment where innovation thrives and every voice is
                  valued.
                </p>
                <ul className="space-y-4">
                  {[
                    "Cross-functional collaboration across teams",
                    "Regular field work with language communities",
                    "Continuous learning and professional development",
                    "Flexible work arrangements",
                    "Transparent and open communication",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/ayivugwe.png"
                  alt="Working at Wekify"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Community Engagement */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Community Engagement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Field Work Programs",
                  description:
                    "Our teams regularly work directly with communities to document languages, record oral histories, and train local technologists.",
                },
                {
                  title: "Educational Initiatives",
                  description:
                    "We partner with schools and universities to support language learning and research in linguistic preservation.",
                },
                {
                  title: "Technology Workshops",
                  description:
                    "We conduct regular workshops to train community members in using digital tools for language documentation and teaching.",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              What Our Team Says
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  quote:
                    "Working at Wekify means having the opportunity to make a real difference in preserving cultural heritage while pushing the boundaries of technology.",
                  name: "Sarah Chen",
                  title: "Software Developer",
                },
                {
                  quote:
                    "I've never been part of a team so passionate about its mission. Every day we're solving challenging problems that have meaningful impact on communities.",
                  name: "Dayo Ogunlana",
                  title: "Linguistic Specialist",
                },
                {
                  quote:
                    "The collaborative environment at Wekify encourages innovation. We're constantly learning from each other and from the communities we serve.",
                  name: "Miguel Santos",
                  title: "UX Designer",
                },
                {
                  quote:
                    "What makes Wekify special is how we blend technological innovation with deep respect for cultural heritage and linguistic diversity.",
                  name: "Priya Sharma",
                  title: "Product Manager",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
                >
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Are you passionate about language preservation and innovation?
              We're always looking for talented individuals to join our mission.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
