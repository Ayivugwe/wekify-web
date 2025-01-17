import React from "react";
import Head from "next/head";
import {
  ArrowRight,
  Globe,
  Database,
  Code,
  Settings,
  Cloud,
  Lock,
  Zap,
} from "lucide-react";
import Layout from "../layout";

export default function SolutionsPage() {
  return (
    <Layout>
      <Head>
        <title>Digital Solutions & Products - Wekify</title>
        <meta
          name="description"
          content="Discover Wekify's suite of digital solutions for content management, language platforms, and custom technology implementations. Build powerful digital experiences."
        />
        <meta
          name="keywords"
          content="digital solutions, content management, language platforms, API integration, custom software"
        />
        <meta
          property="og:title"
          content="Digital Solutions & Products - Wekify"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with Wekify's innovative technology solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Solutions That Drive Digital Innovation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Build powerful digital experiences with our comprehensive suite
                of technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Core Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Digital Content Platform",
                  description:
                    "Build and manage digital content platforms with our scalable solution. Perfect for languages, cultural content, and educational materials.",
                  features: [
                    "Content Management System",
                    "User Management",
                    "Analytics Dashboard",
                    "Mobile-Ready Interface",
                  ],
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Integration Services",
                  description:
                    "Connect and extend your platforms with our robust API and integration services. Build seamless digital experiences.",
                  features: [
                    "RESTful APIs",
                    "Custom Integrations",
                    "Data Migration",
                    "Third-party Connections",
                  ],
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Custom Solutions",
                  description:
                    "Tailored technology solutions designed for your specific needs. From concept to implementation.",
                  features: [
                    "Custom Development",
                    "Platform Optimization",
                    "Technical Consultation",
                    "Maintenance & Support",
                  ],
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className="mb-6 p-3 bg-blue-50 rounded-xl w-fit 
                    group-hover:bg-blue-100 transition-all duration-300"
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="text-blue-600 font-medium group-hover:text-blue-700 
                    transition-colors flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Built for Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Cloud className="w-6 h-6" />,
                  title: "Cloud-Native",
                  description:
                    "Built on modern cloud infrastructure for scalability and reliability",
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Enterprise Security",
                  description:
                    "Industry-standard security practices and data protection",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "High Performance",
                  description:
                    "Optimized for speed and efficient resource usage",
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Customizable",
                  description:
                    "Flexible architecture that adapts to your needs",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                    transition-all duration-300 hover:shadow-lg group"
                >
                  <div
                    className="mb-4 p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 
                    transition-all duration-300"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Transform your digital presence with our powerful solutions.
                  Schedule a demo to see how we can help.
                </p>
                <button
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium 
                  hover:bg-blue-50 transition-all duration-300 group inline-flex items-center gap-2"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
