
import { pool } from './db';
import { continentsData, regionsData, countriesAndLanguagesData } from './seed-data';

async function seed() {
  try {
    // Insert continents
    for (const continent of continentsData) {
      await pool.query(
        'INSERT INTO continents (name, code) VALUES ($1, $2) ON CONFLICT (code) DO NOTHING',
        [continent.name, continent.code]
      );
    }

    // Insert regions
    for (const region of regionsData) {
      const continentResult = await pool.query('SELECT id FROM continents WHERE name = $1', [region.continent]);
      if (continentResult.rows.length > 0) {
        await pool.query(
          'INSERT INTO regions (continent_id, name) VALUES ($1, $2)',
          [continentResult.rows[0].id, region.name]
        );
      }
    }

    // Insert countries and languages
    for (const regionData of countriesAndLanguagesData) {
      const regionResult = await pool.query('SELECT id FROM regions WHERE name = $1', [regionData.region]);
      if (regionResult.rows.length > 0) {
        const regionId = regionResult.rows[0].id;
        
        for (const country of regionData.countries) {
          // Insert country
          const countryResult = await pool.query(
            'INSERT INTO countries (region_id, name, code) VALUES ($1, $2, $3) RETURNING id',
            [regionId, country.name, country.code]
          );
          
          // Insert languages and their relationships
          for (const lang of country.languages) {
            const languageResult = await pool.query(
              'INSERT INTO languages (name, native_name, speakers, status) VALUES ($1, $2, $3, $4) ON CONFLICT (name) DO UPDATE SET speakers = EXCLUDED.speakers RETURNING id',
              [lang.name, lang.native_name, lang.speakers, lang.status]
            );
            
            await pool.query(
              'INSERT INTO country_languages (country_id, language_id, is_official) VALUES ($1, $2, $3)',
              [countryResult.rows[0].id, languageResult.rows[0].id, lang.status === 'official']
            );
          }
        }
      }
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed();
import pool from './db';

async function seed() {
  try {
    // Insert continents
    await pool.query(`
      INSERT INTO continents (name, code) VALUES
      ('Africa', 'AF'),
      ('Europe', 'EU'),
      ('Asia', 'AS'),
      ('North America', 'NA'),
      ('South America', 'SA'),
      ('Oceania', 'OC')
      ON CONFLICT (code) DO NOTHING;
    `);

    // Insert regions (example for Africa)
    const africaResult = await pool.query("SELECT id FROM continents WHERE code = 'AF'");
    const africaId = africaResult.rows[0].id;

    await pool.query(`
      INSERT INTO regions (continent_id, name) VALUES
      ($1, 'Eastern Africa'),
      ($1, 'Western Africa'),
      ($1, 'Central Africa'),
      ($1, 'Southern Africa')
      ON CONFLICT DO NOTHING;
    `, [africaId]);

    // Insert some initial languages and countries
    const easternAfricaResult = await pool.query("SELECT id FROM regions WHERE name = 'Eastern Africa'");
    const easternAfricaId = easternAfricaResult.rows[0].id;

    await pool.query(`
      INSERT INTO countries (region_id, name, code) VALUES
      ($1, 'Kenya', 'KE'),
      ($1, 'Tanzania', 'TZ'),
      ($1, 'Uganda', 'UG')
      ON CONFLICT (code) DO NOTHING;
    `, [easternAfricaId]);

    await pool.query(`
      INSERT INTO languages (name, native_name, speakers, status) VALUES
      ('Swahili', 'Kiswahili', 150000000, 'official'),
      ('Kikuyu', 'Gĩkũyũ', 6600000, 'regional'),
      ('Luganda', 'Oluganda', 4100000, 'regional')
      ON CONFLICT DO NOTHING;
    `);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed();
