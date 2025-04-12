"use client";

import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";
import { Button } from "../components/Button";
import { getContinents } from "@/services/supabase";
import { Continent } from "@/types/supabase";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface FilterParams {
  search: string;
}

export default function ContinentsPage() {
  const [continents, setContinents] = useState<Continent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({
    search: "",
  });
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Continent;
    direction: "asc" | "desc";
  } | null>(null);

  useEffect(() => {
    console.log("Starting to fetch continents...");
    fetchContinents();
  }, []);

  const fetchContinents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log("Calling getContinents()...");
      const data = await getContinents();
      console.log("Received data:", data);
      
      if (!data || data.length === 0) {
        console.warn("No data received from getContinents()");
        setError("No continents found in the database");
        return;
      }

      setContinents(data);
    } catch (error) {
      console.error("Error in fetchContinents:", error);
      setError(error instanceof Error ? error.message : "Failed to load continents");
      setContinents([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (key: keyof FilterParams, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSort = (key: keyof Continent) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev?.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const filteredContinents = continents.filter(continent =>
    continent.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  const sortedContinents = [...filteredContinents].sort((a, b) => {
    if (!sortConfig) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  console.log("Current state:", {
    isLoading,
    error,
    continentsCount: continents.length,
    filteredCount: filteredContinents.length,
    sortedCount: sortedContinents.length
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Continents Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive directory of continents.
            </p>
          </FadeIn>

          {/* Search and Filters */}
          <FadeIn className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search continents..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                  />
                </div>
                <Button type="submit" className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Apply Filters
                </Button>
              </div>
            </form>
          </FadeIn>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Continents Table */}
          <FadeIn className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center gap-2">
                        Name
                        {sortConfig?.key === "name" && (
                          sortConfig.direction === "asc" ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        )}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {isLoading ? (
                    [...Array(10)].map((_, index) => (
                      <tr key={`loading-row-${index}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                        </td>
                      </tr>
                    ))
                  ) : sortedContinents.length === 0 ? (
                    <tr>
                      <td colSpan={1} className="px-6 py-8 text-center text-gray-500">
                        {continents.length === 0 ? "No continents found" : "No matching continents found"}
                      </td>
                    </tr>
                  ) : (
                    sortedContinents.map((continent) => (
                      <tr key={continent.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {continent.name}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
