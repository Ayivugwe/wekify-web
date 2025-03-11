import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Preserving Indigenous Languages Through Digital Innovation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Wekify empowers communities to document, learn, and celebrate their languages with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
                Explore Solutions
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-primary transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-[500px] w-full">
              <Image
                src="/logo.png"
                alt="Wekify Platform"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-16 rounded-t-[50px] -mb-1"></div>
    </section>
  );
};

export default HeroSection;