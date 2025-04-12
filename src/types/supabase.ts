export type Continent = {
  id: number;
  name: string;
};

export type Country = {
  id: number;
  name: string;
  continent_id: number;
  continent: {
    name: string;
  };
};

export interface Currency {
  id: number;
  currency_code: string;
  country_id: number;
}

export type Language = {
  id: number;
  name: string;
  continent_id: number | null;
  country_id: number | null;
};

export interface LanguageContribution {
  id: number;
  language_name: string;
  native_name?: string;
  language_code?: string;
  country_id: number;
  contributor_id: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface Contributor {
  id: number;
  name: string;
  email: string;
  relationship_to_language: string;
  is_language_representative: boolean;
  contact_preference: 'email' | 'phone' | 'both';
  phone_number?: string;
  created_at: string;
  updated_at: string;
} 