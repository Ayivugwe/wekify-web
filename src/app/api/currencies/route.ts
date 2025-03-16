
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT DISTINCT c.currency, c.currency_symbol, 
             STRING_AGG(DISTINCT c.name, ', ') as countries
      FROM countries c
      WHERE c.currency IS NOT NULL
      GROUP BY c.currency, c.currency_symbol
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
