import { NextResponse } from 'next/server';
import pool from '@/lib/database/db';

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
        languages.name,
        languages.native_name,
        languages.speakers,
        languages.status
      FROM languages
      ORDER BY languages.name
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