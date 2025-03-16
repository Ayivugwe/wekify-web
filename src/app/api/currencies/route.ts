
import { NextResponse } from "next/server";
import { pool } from "@/lib/database/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT DISTINCT c.name, c.code, c.symbol,
             STRING_AGG(DISTINCT co.name, ', ') as countries
      FROM currencies c
      LEFT JOIN country_currencies cc ON c.id = cc.currency_id
      LEFT JOIN countries co ON cc.country_id = co.id
      GROUP BY c.id, c.name, c.code, c.symbol
      ORDER BY c.name
    `);
    
    return NextResponse.json({
      items: result.rows || []
    });
  } catch (error) {
    console.error("Error fetching currencies:", error);
    return NextResponse.json(
      { error: "Failed to fetch currencies" },
      { status: 500 }
    );
  }
}
