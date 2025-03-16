import { Pool } from 'pg';
import { continentsData, regionsData, countriesAndLanguagesData } from './seed-data';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function seed() {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Insert continents
    for (const continent of continentsData) {
      await client.query(
        'INSERT INTO continents (name, code) VALUES ($1, $2) ON CONFLICT (code) DO NOTHING',
        [continent.name, continent.code]
      );
    }

    // Insert regions
    for (const continentRegions of regionsData) {
      const continentResult = await client.query('SELECT id FROM continents WHERE name = $1', [continentRegions.continent]);
      if (continentResult.rows.length > 0) {
        const continentId = continentResult.rows[0].id;
        for (const regionName of continentRegions.regions) {
          await client.query(
            'INSERT INTO regions (continent_id, name) VALUES ($1, $2) ON CONFLICT DO NOTHING',
            [continentId, regionName]
          );
        }
      }
    }

    // Insert countries and languages
    for (const regionData of countriesAndLanguagesData) {
      const regionResult = await client.query('SELECT id FROM regions WHERE name = $1', [regionData.region]);
      if (regionResult.rows.length > 0) {
        const regionId = regionResult.rows[0].id;

        for (const country of regionData.countries) {
          // Insert country
          const countryResult = await client.query(
            'INSERT INTO countries (region_id, name, code) VALUES ($1, $2, $3) ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name RETURNING id',
            [regionId, country.name, country.code]
          );

          const countryId = countryResult.rows[0].id;

          // Insert languages and create relationships
          for (const lang of country.languages) {
            // Insert or update language
            const languageResult = await client.query(
              'INSERT INTO languages (name, native_name, speakers, status) VALUES ($1, $2, $3, $4) ON CONFLICT (name) DO UPDATE SET speakers = EXCLUDED.speakers RETURNING id',
              [lang.name, lang.native_name, lang.speakers, lang.status]
            );

            const languageId = languageResult.rows[0].id;

            // Create country-language relationship
            await client.query(
              'INSERT INTO country_languages (country_id, language_id, is_official) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
              [countryId, languageId, lang.status === 'official']
            );
          }
        }
      }
    }

    await client.query('COMMIT');
    console.log('Database seeded successfully');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    client.release();
  }
}

seed().catch(console.error).finally(() => pool.end());