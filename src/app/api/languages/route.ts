
import { NextResponse } from 'next/server';
import pool from '@/lib/database/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT 
        continents.name as continent_name,
        regions.name as region_name,
        countries.name as country_name,
        countries.code as country_code,
        languages.name as language_name,
        languages.native_name,
        languages.speakers,
        languages.status
      FROM continents
      JOIN regions ON regions.continent_id = continents.id
      JOIN countries ON countries.region_id = regions.id
      JOIN country_languages ON country_languages.country_id = countries.id
      JOIN languages ON languages.id = country_languages.language_id
      ORDER BY continents.name, regions.name, countries.name, languages.name
    `);

    // Transform the flat data into a nested structure
    const languageData = result.rows.reduce((acc, row) => {
      // Initialize continent if it doesn't exist
      if (!acc[row.continent_name]) {
        acc[row.continent_name] = [];
      }

      // Find or create region
      let region = acc[row.continent_name].find(r => r.name === row.region_name);
      if (!region) {
        region = {
          name: row.region_name,
          countries: []
        };
        acc[row.continent_name].push(region);
      }

      // Find or create country
      let country = region.countries.find(c => c.name === row.country_name);
      if (!country) {
        country = {
          name: row.country_name,
          code: row.country_code,
          languages: []
        };
        region.countries.push(country);
      }

      // Add language if it doesn't exist
      const languageExists = country.languages.some(l => l.name === row.language_name);
      if (!languageExists) {
        country.languages.push({
          name: row.language_name,
          native_name: row.native_name,
          speakers: row.speakers,
          status: row.status
        });
      }

      return acc;
    }, {});

    return NextResponse.json(languageData);
  } catch (error) {
    console.error('Error fetching language data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
