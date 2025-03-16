
import { NextResponse } from "next/server";
import { pool } from "@/lib/database/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT c.id, c.name, c.code, cont.name as continent_name
      FROM countries c
      LEFT JOIN continents cont ON c.region_id = cont.id
      ORDER BY c.name
    `);
    
    return NextResponse.json({
      items: result.rows || []
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
    return NextResponse.json(
      { error: "Failed to fetch countries" },
      { status: 500 }
    );
  }
}
