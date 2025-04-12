import { supabase } from '@/lib/supabase';
import { Continent, Country, Currency, Language } from '@/types/supabase';

export const getContinents = async (): Promise<Continent[]> => {
  console.log("Starting getContinents function...");
  try {
    console.log("Attempting to fetch from continents table...");
    const { data, error } = await supabase
      .from('continents')
      .select('id, name')
      .order('name');
    
    console.log("Raw response:", { data, error });

    if (error) {
      console.error("Error fetching continents:", error);
      throw error;
    }

    if (!data) {
      console.warn("No data returned from continents query");
      return [];
    }

    console.log("Processed continents data:", data);
    return data;
  } catch (err) {
    console.error("Unexpected error in getContinents:", err);
    throw err;
  }
};

export const getCountries = async (): Promise<Country[]> => {
  console.log("Fetching countries from Supabase...");
  const { data, error } = await supabase
    .from('countries')
    .select(`
      id,
      name,
      continent_id,
      continent:continents(name)
    `)
    .order('name');
  
  if (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
  console.log("Countries data:", data);
  return data;
};

export async function getCurrencies(): Promise<Currency[]> {
  console.log("Starting getCurrencies function...");
  try {
    console.log("Attempting to fetch from currencies table...");
    const { data, error } = await supabase
      .from('currencies')
      .select('id, name')
      .order('name');

    console.log("Raw response:", { data, error });

    if (error) {
      console.error("Error fetching currencies:", error);
      throw error;
    }

    if (!data) {
      console.warn("No data returned from currencies query");
      return [];
    }

    console.log("Processed currencies data:", data);
    return data;
  } catch (err) {
    console.error("Unexpected error in getCurrencies:", err);
    throw err;
  }
}

export const getLanguages = async (): Promise<Language[]> => {
  console.log("Fetching languages from Supabase...");
  const { data, error } = await supabase
    .from('languages')
    .select(`
      id,
      name,
      continent_id,
      country_id
    `)
    .order('name');
  
  if (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
  
  console.log("Languages data:", data);
  return data;
};

export async function createContributor(contributor: Omit<Contributor, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('contributors')
    .insert([contributor])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createLanguageContribution(contribution: Omit<LanguageContribution, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  const { data, error } = await supabase
    .from('language_contributions')
    .insert([{ ...contribution, status: 'pending' }])
    .select()
    .single();

  if (error) throw error;
  return data;
} 