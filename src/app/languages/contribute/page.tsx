"use client";

import React, { useState } from "react";
import Layout from "../../components/layout";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/Button";
import { getCountries, createContributor, createLanguageContribution } from "@/services/supabase";
import { Country } from "@/types/supabase";
import { useRouter } from "next/navigation";

interface FormData {
  // Contributor Information
  name: string;
  email: string;
  relationship_to_language: string;
  is_language_representative: boolean;
  contact_preference: "email" | "phone" | "both";
  phone_number: string;

  // Language Information
  language_name: string;
  native_name: string;
  language_code: string;
  country_id: string;
}

export default function ContributeLanguagePage() {
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    relationship_to_language: "",
    is_language_representative: false,
    contact_preference: "email",
    phone_number: "",
    language_name: "",
    native_name: "",
    language_code: "",
    country_id: "",
  });

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError("Failed to load countries");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // First, create the contributor
      const contributor = await createContributor({
        name: formData.name,
        email: formData.email,
        relationship_to_language: formData.relationship_to_language,
        is_language_representative: formData.is_language_representative,
        contact_preference: formData.contact_preference,
        phone_number: formData.phone_number,
      });

      // Then, create the language contribution
      await createLanguageContribution({
        language_name: formData.language_name,
        native_name: formData.native_name,
        language_code: formData.language_code,
        country_id: parseInt(formData.country_id),
        contributor_id: contributor.id,
      });

      // Redirect to success page
      router.push("/languages/contribute/success");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to submit contribution");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contribute a Language
            </h1>
            <p className="text-xl text-gray-600">
              Help us expand our language database by contributing information about a language you know.
            </p>
          </FadeIn>

          <FadeIn className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contributor Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Your Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="relationship_to_language" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Relationship to the Language
                  </label>
                  <textarea
                    id="relationship_to_language"
                    name="relationship_to_language"
                    value={formData.relationship_to_language}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="e.g., Native speaker, Language teacher, Researcher, etc."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="is_language_representative"
                    name="is_language_representative"
                    checked={formData.is_language_representative}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_language_representative" className="text-sm text-gray-700">
                    I am a representative of this language community
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    {["email", "phone", "both"].map((preference) => (
                      <label key={preference} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="contact_preference"
                          value={preference}
                          checked={formData.contact_preference === preference}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <span className="text-sm text-gray-700">
                          {preference.charAt(0).toUpperCase() + preference.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {(formData.contact_preference === "phone" || formData.contact_preference === "both") && (
                  <div>
                    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                )}
              </div>

              {/* Language Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Language Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="language_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Language Name (in English)
                    </label>
                    <input
                      type="text"
                      id="language_name"
                      name="language_name"
                      value={formData.language_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="native_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Native Name
                    </label>
                    <input
                      type="text"
                      id="native_name"
                      name="native_name"
                      value={formData.native_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="language_code" className="block text-sm font-medium text-gray-700 mb-1">
                      Language Code (ISO 639-3)
                    </label>
                    <input
                      type="text"
                      id="language_code"
                      name="language_code"
                      value={formData.language_code}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                      placeholder="e.g., eng, spa, fra"
                    />
                  </div>

                  <div>
                    <label htmlFor="country_id" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Country
                    </label>
                    <select
                      id="country_id"
                      name="country_id"
                      value={formData.country_id}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white shadow-sm"
                >
                  Submit Contribution
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
} 