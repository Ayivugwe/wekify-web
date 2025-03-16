
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT c.id, c.name, c.code, c.region_id, cont.name as continent_name
      FROM countries c
      LEFT JOIN continents cont ON c.region_id = cont.id
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
