
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function POST(request: Request) {
  try {
    const { name, code } = await request.json();
    
    const result = await pool.query(
      'INSERT INTO continents (name, code) VALUES ($1, $2) RETURNING *',
      [name, code]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating continent:', error);
    return NextResponse.json(
      { error: 'Failed to create continent' },
      { status: 500 }
    );
  }
}
