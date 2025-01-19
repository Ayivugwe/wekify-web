import React from "react";
import { MessageSquare, Book, Heart, Lightbulb } from "lucide-react";

const DictionarySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Kifuliiru Public Dictionary
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our flagship project focuses on Kifuliiru, a language spoken in
            Congo-Kinshasa, creating the first comprehensive digital platform
            for its preservation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MessageSquare,
              title: "Interactive Learning",
              description:
                "Engage with native speakers and learn through immersive content",
              gradient: "from-blue-500 to-blue-600",
            },
            {
              icon: Book,
              title: "Digital Resources",
              description:
                "Access comprehensive dictionary and learning materials",
              gradient: "from-indigo-500 to-indigo-600",
            },
            {
              icon: Heart,
              title: "Cultural Context",
              description:
                "Understand the rich cultural heritage behind the language",
              gradient: "from-purple-500 to-purple-600",
            },
            {
              icon: Lightbulb,
              title: "Community Input",
              description:
                "Contribute to the growth and accuracy of the platform",
              gradient: "from-violet-500 to-violet-600",
            },
          ].map((feature, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div
                className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                transition-all duration-300 h-full transform hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} 
                    flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>

                {/* Hover Effect Border */}
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent 
                  via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Sample */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto overflow-hidden">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Kifuliiru</div>
                <div className="text-lg font-semibold text-gray-900">
                  Mulembe
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">English</div>
                <div className="text-lg text-gray-900">
                  Hello, Peace, Greetings
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DictionarySection;
