'use client';

import React, { useEffect, useState } from 'react';
import { getContinents, getCountries, getCurrencies, getLanguages } from '@/services/supabase';
import { Continent, Country, Currency, Language } from '@/types/supabase';

const TestPage = () => {
  const [continents, setContinents] = useState<Continent[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [continentsData, countriesData, currenciesData, languagesData] = await Promise.all([
          getContinents(),
          getCountries(),
          getCurrencies(),
          getLanguages()
        ]);

        setContinents(continentsData);
        setCountries(countriesData);
        setCurrencies(currenciesData);
        setLanguages(languagesData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Supabase Data Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Continents */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Continents</h2>
          <div className="space-y-2">
            {continents.map((continent) => (
              <div key={continent.id} className="border-b pb-2">
                <p className="font-medium">{continent.name}</p>
                <p className="text-sm text-gray-600">Code: {continent.code}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Countries</h2>
          <div className="space-y-2">
            {countries.map((country) => (
              <div key={country.id} className="border-b pb-2">
                <p className="font-medium">{country.name}</p>
                <p className="text-sm text-gray-600">Code: {country.code}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Currencies */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Currencies</h2>
          <div className="space-y-2">
            {currencies.map((currency) => (
              <div key={currency.id} className="border-b pb-2">
                <p className="font-medium">{currency.name}</p>
                <p className="text-sm text-gray-600">
                  {currency.code} ({currency.symbol})
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <div className="space-y-2">
            {languages.map((language) => (
              <div key={language.id} className="border-b pb-2">
                <p className="font-medium">{language.name}</p>
                <p className="text-sm text-gray-600">
                  {language.native_name} ({language.code})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage; 