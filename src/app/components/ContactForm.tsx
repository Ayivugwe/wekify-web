"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

// Rate limiting configuration
const RATE_LIMIT = {
  MAX_SUBMISSIONS: 3, // Maximum number of submissions allowed
  TIME_WINDOW: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
};

// Sanitization function to remove potentially harmful characters
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .trim(); // Remove leading/trailing whitespace
};

// Validation function for email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validation function for name
const isValidName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 100;
};

// Validation function for message
const isValidMessage = (message: string): boolean => {
  return message.length >= 10 && message.length <= 2000;
};

// Validation function for organization (optional)
const isValidOrganization = (org: string): boolean => {
  return org.length <= 100;
};

// Rate limiting function
const checkRateLimit = (): { allowed: boolean; timeLeft?: number } => {
  if (typeof window === 'undefined') return { allowed: true };

  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
  
  // Filter out submissions older than the time window
  const recentSubmissions = submissions.filter((time: number) => 
    now - time < RATE_LIMIT.TIME_WINDOW
  );

  if (recentSubmissions.length >= RATE_LIMIT.MAX_SUBMISSIONS) {
    // Calculate time until next allowed submission
    const oldestSubmission = recentSubmissions[0];
    const timeLeft = RATE_LIMIT.TIME_WINDOW - (now - oldestSubmission);
    return { allowed: false, timeLeft };
  }

  return { allowed: true };
};

// Format time left for display
const formatTimeLeft = (ms: number): string => {
  const hours = Math.floor(ms / (60 * 60 * 1000));
  const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
  
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  return `${minutes} minute${minutes > 1 ? 's' : ''}`;
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);

  // Check rate limit on component mount
  useEffect(() => {
    const { allowed, timeLeft } = checkRateLimit();
    if (!allowed && timeLeft) {
      setRateLimitError(`Please wait ${formatTimeLeft(timeLeft)} before submitting again.`);
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!isValidName(formData.name)) {
      newErrors.name = "Name must be between 2 and 100 characters";
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.organization && !isValidOrganization(formData.organization)) {
      newErrors.organization = "Organization name must be less than 100 characters";
    }

    if (!isValidMessage(formData.message)) {
      newErrors.message = "Message must be between 10 and 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: sanitizeInput(value) }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limit before proceeding
    const { allowed, timeLeft } = checkRateLimit();
    if (!allowed) {
      setRateLimitError(`Please wait ${formatTimeLeft(timeLeft!)} before submitting again.`);
      return;
    }
    
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            organization: formData.organization ? sanitizeInput(formData.organization) : null,
            message: sanitizeInput(formData.message),
            status: "new",
          },
        ]);

      if (error) throw error;

      // Update rate limit tracking
      const submissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
      submissions.push(Date.now());
      localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
      });
      setErrors({});
      setRateLimitError(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {rateLimitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {rateLimitError}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
          Organization/Community
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.organization ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
          placeholder="Enter your organization or community name (optional)"
        />
        {errors.organization && <p className="mt-1 text-sm text-red-500">{errors.organization}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
          placeholder="Enter your message here"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting || !!rateLimitError}
          className="px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white hover:text-white shadow-sm transition-colors duration-200 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
} 