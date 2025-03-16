
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const result = await pool.query(`
      SELECT 
        l.id,
        l.name,
        l.code,
        l.id_country,
        c.name as country_name
      FROM languages l
      LEFT JOIN countries c ON l.id_country = c.id
      ORDER BY l.name
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

    const countResult = await pool.query('SELECT COUNT(*) FROM languages');
    const totalItems = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(totalItems / limit);

    return NextResponse.json({
      items: result.rows,
      totalItems,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.error('Error fetching languages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch languages' },
      { status: 500 }
    );
  }
}
