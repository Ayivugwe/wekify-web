
import { NextResponse } from 'next/server';
import { pool } from '@/lib/database/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const result = await pool.query(`
      SELECT l.*, c.name as country_name, c.code as country_code,
             r.name as region_name, cont.name as continent_name
      FROM languages l
      JOIN country_languages cl ON l.id = cl.language_id
      JOIN countries c ON cl.country_id = c.id
      JOIN regions r ON c.region_id = r.id
      JOIN continents cont ON r.continent_id = cont.id
      WHERE l.id = $1
    `, [params.id]);

    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
