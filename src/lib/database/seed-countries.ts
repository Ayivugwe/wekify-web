
import pool from './db';
import fetch from 'node-fetch';

interface Country {
  name: { common: string; official: string };
  cca2: string;
  region: string;
  subregion: string;
  languages?: { [key: string]: string };
}

async function seedCountries() {
  try {
    // Fetch all countries data
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries: Country[] = await response.json();
    
    // First ensure all continents exist
    const continents = new Set(countries.map(c => c.region));
    for (const continent of continents) {
      await pool.query(
        'INSERT INTO continents (name, code) VALUES ($1, $2) ON CONFLICT (code) DO NOTHING',
        [continent, continent.substring(0, 2).toUpperCase()]
      );
    }

    // Then ensure all regions exist
    const regions = new Set(countries.map(c => c.subregion).filter(Boolean));
    for (const region of regions) {
      const continentName = countries.find(c => c.subregion === region)?.region;
      const continentResult = await pool.query('SELECT id FROM continents WHERE name = $1', [continentName]);
      
      if (continentResult.rows.length > 0) {
        await pool.query(
          'INSERT INTO regions (continent_id, name) VALUES ($1, $2) ON CONFLICT DO NOTHING',
          [continentResult.rows[0].id, region]
        );
      }
    }

    // Insert countries
    for (const country of countries) {
      if (!country.subregion) continue;

      const regionResult = await pool.query('SELECT id FROM regions WHERE name = $1', [country.subregion]);
      if (regionResult.rows.length > 0) {
        await pool.query(
          'INSERT INTO countries (region_id, name, code) VALUES ($1, $2, $3) ON CONFLICT (code) DO NOTHING',
          [regionResult.rows[0].id, country.name.common, country.cca2]
        );

        // Insert languages for this country
        if (country.languages) {
          const countryResult = await pool.query('SELECT id FROM countries WHERE code = $1', [country.cca2]);
          
          for (const [_, langName] of Object.entries(country.languages)) {
            // Insert language if it doesn't exist
            await pool.query(
              'INSERT INTO languages (name) VALUES ($1) ON CONFLICT (name) DO NOTHING',
              [langName]
            );

            // Get language id
            const langResult = await pool.query('SELECT id FROM languages WHERE name = $1', [langName]);
            
            // Create country-language relationship
            await pool.query(
              'INSERT INTO country_languages (country_id, language_id, is_official) VALUES ($1, $2, true) ON CONFLICT DO NOTHING',
              [countryResult.rows[0].id, langResult.rows[0].id]
            );
          }
        }
      }
    }

    console.log('Successfully seeded countries and languages');
  } catch (error) {
    console.error('Error seeding countries:', error);
  } finally {
    await pool.end();
  }
}

seedCountries();
