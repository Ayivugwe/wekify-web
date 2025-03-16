
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const countResult = await pool.query('SELECT COUNT(*) FROM languages');
    const totalItems = parseInt(countResult.rows[0].count);

    const result = await pool.query(`
      SELECT 
        l.id,
        l.name,
        l.native_name,
        l.speakers,
        l.status,
        c.name as country_name,
        c.code as country_code,
        cont.name as continent_name,
        cont.code as continent_code
      FROM languages l
      LEFT JOIN country_languages cl ON l.id = cl.language_id
      LEFT JOIN countries c ON cl.country_id = c.id
      LEFT JOIN regions r ON c.region_id = r.id
      LEFT JOIN continents cont ON r.continent_id = cont.id
      ORDER BY l.name
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

    return NextResponse.json({
      items: result.rows,
      totalItems,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit)
    });
  } catch (error) {
    console.error('Error fetching languages:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
