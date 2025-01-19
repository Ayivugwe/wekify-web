import React from "react";
import { Book, Users, Globe } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" className="relative py-24 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600">
            We&apos;re dedicated to preserving and promoting linguistic
            diversity through innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Book,
              title: "Digital Dictionaries",
              description:
                "Creating comprehensive digital dictionaries for languages with limited online presence",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: Users,
              title: "Community Building",
              description:
                "Connecting native speakers and learners in engaging, supportive communities",
              color: "from-indigo-500 to-indigo-600",
            },
            {
              icon: Globe,
              title: "Cultural Preservation",
              description:
                "Ensuring languages and cultures thrive in the digital age",
              color: "from-violet-500 to-violet-600",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Icon Background */}
                <div
                  className={`absolute inset-0 rounded-full w-16 h-16 bg-gradient-to-r ${feature.color} 
                  opacity-10 blur group-hover:opacity-20 transition-opacity`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative mb-6 w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} 
                  flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.description}</p>

              {/* Decorative Element */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent 
                via-blue-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
