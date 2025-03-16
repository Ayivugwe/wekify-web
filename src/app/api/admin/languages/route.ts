
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function POST(request: Request) {
  try {
    const { name, nativeName, speakers, status, countryId } = await request.json();
    
    // Start a transaction
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      
      // Insert the language
      const languageResult = await client.query(
        'INSERT INTO languages (name, native_name, speakers, status) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, nativeName, speakers, status]
      );
      
      // Create country-language relationship if countryId is provided
      if (countryId) {
        await client.query(
          'INSERT INTO country_languages (country_id, language_id, is_official) VALUES ($1, $2, $3)',
          [countryId, languageResult.rows[0].id, status === 'official']
        );
      }
      
      await client.query('COMMIT');
      return NextResponse.json(languageResult.rows[0]);
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating language:', error);
    return NextResponse.json(
      { error: 'Failed to create language' },
      { status: 500 }
    );
  }
}
