
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

    // Transform the flat data into nested structure
    const transformedData: any = {};
    
    result.rows.forEach(row => {
      if (!transformedData[row.continent_name]) {
        transformedData[row.continent_name] = [];
      }
      
      let region = transformedData[row.continent_name].find(
        (r: any) => r.name === row.region_name
      );
      
      if (!region) {
        region = { name: row.region_name, countries: [] };
        transformedData[row.continent_name].push(region);
      }
      
      let country = region.countries.find(
        (c: any) => c.name === row.country_name
      );
      
      if (!country) {
        country = {
          name: row.country_name,
          code: row.country_code,
          languages: []
        };
        region.countries.push(country);
      }
      
      country.languages.push({
        name: row.language_name,
        native_name: row.native_name,
        speakers: row.speakers,
        status: row.status
      });
    });

    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error fetching language data:', error);
    return NextResponse.json({ error: 'Failed to fetch language data' }, { status: 500 });
  }
}
