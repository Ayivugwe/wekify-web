
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT DISTINCT currency_code as code, currency_name as name
      FROM countries
      WHERE currency_code IS NOT NULL
      ORDER BY currency_name
    `);

    return NextResponse.json({
      items: result.rows,
      totalItems: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching currencies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch currencies' },
      { status: 500 }
    );
  }
}
