
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT c.id, c.name, c.code, r.name as region, cont.name as continent
      FROM countries c
      LEFT JOIN regions r ON c.region_id = r.id
      LEFT JOIN continents cont ON r.continent_id = cont.id
      ORDER BY c.name
    `);

    return NextResponse.json({
      items: result.rows,
      totalItems: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
}
