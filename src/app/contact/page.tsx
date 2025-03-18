"use client";

import React, { useState } from "react";
import Layout from "../components/layout";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setFormSubmitted(true);
    
    // Reset the submission message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Start Your Platform Project
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Let's discuss how we can help you build a powerful digital platform for language preservation
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <h2 className="text-2xl font-bold mb-6 text-blue-600">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600 mt-1">info@wekify.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Location</h3>
                        <p className="text-gray-600 mt-1">
                          123 Digital Ave, <br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Follow Us</h3>
                    <div className="flex space-x-4">
                      {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-gray-100 hover:border-blue-200 transition-colors"
                        >
                          <span className="sr-only">{social}</span>
                          <div className="w-5 h-5 bg-blue-600/80 rounded-lg"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6 text-blue-600">Send Us a Message</h2>
                  
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-100 rounded-lg p-6 flex items-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
                        <p className="text-green-700">Thank you for reaching out. We'll get back to you shortly.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Tell us about your language preservation project..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Send Message
                        <Send className="h-5 w-5 ml-2" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
