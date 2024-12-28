"use client";

import React, { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerTextVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white min-h-screen font-inter overflow-hidden">
      <Head>
        <title>Wekify - Innovating Tomorrow</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={headerTextVariants}>
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-100"
              animate={{
                backgroundPosition: ["0%", "100%"],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              style={{ backgroundSize: "200%" }}
            >
              Wekify
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl max-w-2xl mx-auto mb-12 text-gray-200"
              variants={itemVariants}
            >
              Crafting digital experiences that inspire and transform
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full sm:w-64"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20"
                required
              />
            </motion.div>

            <motion.button
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              <span>Notify Me</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.p
                className="mt-4 text-green-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thanks! We&apos;ll keep you updated.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="absolute bottom-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-center space-x-6">
            {[
              { Icon: FaGithub, url: "#" },
              { Icon: FaTwitter, url: "#" },
              { Icon: FaLinkedin, url: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="text-2xl text-gray-300 hover:text-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </header>

      {/* What We Do Section */}
      <motion.section
        className="py-24 px-8 bg-black/40 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: FaRocket,
                title: "Innovative Solutions",
                description:
                  "We craft cutting-edge digital solutions that transform ideas into powerful, scalable realities.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: FaLaptopCode,
                title: "Modern Tech Stack",
                description:
                  "Built with Next.js, React, Node.js, and cloud-native technologies for maximum performance and scalability.",
                color: "from-pink-500 to-purple-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <motion.div
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon
                      className={`text-5xl mb-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.footer
        className="py-8 px-8 text-center bg-black/40 backdrop-blur-lg border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Wekify. Crafting the future of
            digital experiences.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
