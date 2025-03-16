
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT id, name, code
      FROM continents
      ORDER BY name
    `);

    return NextResponse.json({
      items: result.rows,
      totalItems: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching continents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch continents' },
      { status: 500 }
    );
  }
}
