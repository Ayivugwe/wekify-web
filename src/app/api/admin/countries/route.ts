
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function POST(request: Request) {
  try {
    const { name, code, regionId } = await request.json();
    
    const result = await pool.query(
      'INSERT INTO countries (name, code, region_id) VALUES ($1, $2, $3) RETURNING *',
      [name, code, regionId]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating country:', error);
    return NextResponse.json(
      { error: 'Failed to create country' },
      { status: 500 }
    );
  }
}
