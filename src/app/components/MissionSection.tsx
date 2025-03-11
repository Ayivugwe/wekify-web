import React from "react";
import Image from "next/image";
import { Globe, BookOpen, Users } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto">
            We are dedicated to preserving and revitalizing indigenous languages through innovative digital solutions, starting with Kifuliiru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center hover:translate-y-[-8px]">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Globe className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Reach</h3>
            <p>
              Making language resources accessible worldwide through digital platforms to connect diaspora communities.
            </p>
          </div>

          <div className="card text-center hover:translate-y-[-8px]">
            <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-secondary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Documentation</h3>
            <p>
              Creating robust digital dictionaries, learning tools, and cultural resources for language preservation.
            </p>
          </div>

          <div className="card text-center hover:translate-y-[-8px]">
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="text-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Empowerment</h3>
            <p>
              Building platforms that allow communities to actively participate in their language's digital preservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;