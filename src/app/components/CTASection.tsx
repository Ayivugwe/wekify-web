import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Preserve Your Language?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in our mission to document, preserve, and revitalize indigenous languages through innovative digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;