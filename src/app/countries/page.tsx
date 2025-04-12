"use client";

import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";
import { Button } from "../components/Button";
import { getCountries, getCurrencies } from "@/services/supabase";
import { Country, Currency } from "@/types/supabase";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface FilterParams {
  search: string;
  continent: string | null;
}

const ITEMS_PER_PAGE = 20;

export default function CountriesPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({
    search: "",
    continent: null,
  });
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Country;
    direction: "asc" | "desc";
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("Starting to fetch data...");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log("Fetching countries and currencies...");
      
      const [countriesData, currenciesData] = await Promise.all([
        getCountries(),
        getCurrencies()
      ]);

      console.log("Countries data:", countriesData);
      console.log("Currencies data:", currenciesData);
      
      if (!countriesData || countriesData.length === 0) {
        console.warn("No countries data received");
        setError("No countries found in the database");
        return;
      }

      setCountries(countriesData);
      setCurrencies(currenciesData || []);
    } catch (error) {
      console.error("Error in fetchData:", error);
      setError(error instanceof Error ? error.message : "Failed to load data");
      setCountries([]);
      setCurrencies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (key: keyof FilterParams, value: string | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSort = (key: keyof Country) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev?.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getCurrencyForCountry = (countryId: number) => {
    return currencies.find(currency => currency.country_id === countryId);
  };

  const filteredCountries = countries.filter(country => {
    const currency = getCurrencyForCountry(country.id);
    const matchesSearch = 
      country.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      country.continent.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      (currency && currency.currency_code.toLowerCase().includes(filters.search.toLowerCase()));
    
    const matchesContinent = !filters.continent || country.continent.name === filters.continent;
    
    return matchesSearch && matchesContinent;
  });

  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (!sortConfig) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Get unique continents for the filter
  const uniqueContinents = Array.from(
    new Set(countries.map(country => country.continent.name))
  ).sort();

  // Pagination calculations
  const totalPages = Math.ceil(sortedCountries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCountries = sortedCountries.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  console.log("Current state:", {
    isLoading,
    error,
    countriesCount: countries.length,
    currenciesCount: currencies.length,
    filteredCount: filteredCountries.length,
    sortedCount: sortedCountries.length,
    currentPage,
    totalPages,
    filters
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Countries & Currencies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive directory of countries and their currencies.
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
                    placeholder="Search countries, continents, or currency codes..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                  />
                </div>
                <select
                  value={filters.continent || ""}
                  onChange={(e) => handleFilterChange("continent", e.target.value || null)}
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                >
                  <option value="">All Continents</option>
                  {uniqueContinents.map((continent) => (
                    <option key={continent} value={continent}>
                      {continent}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </FadeIn>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Countries Table */}
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
                        Country
                        {sortConfig?.key === "name" && (
                          sortConfig.direction === "asc" ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Continent
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Currency
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
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                        </td>
                      </tr>
                    ))
                  ) : paginatedCountries.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                        {countries.length === 0 ? "No countries found" : "No matching countries found"}
                      </td>
                    </tr>
                  ) : (
                    paginatedCountries.map((country) => {
                      const currency = getCurrencyForCountry(country.id);
                      return (
                        <tr key={country.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {country.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {country.continent.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {currency ? currency.currency_code : 'N/A'}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {!isLoading && totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                    <span className="font-medium">
                      {Math.min(endIndex, sortedCountries.length)}
                    </span>{" "}
                    of <span className="font-medium">{sortedCountries.length}</span> results
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={page === currentPage ? "default" : "outline"}
                          onClick={() => handlePageChange(page)}
                          className="w-10 h-10 flex items-center justify-center"
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
