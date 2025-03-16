
import { NextResponse } from "next/server";
import { pool } from "@/lib/database/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    
    if (!pool) {
      return NextResponse.json(
        { error: "Database connection not initialized" },
        { status: 500 }
      );
    }
    const search = searchParams.get("search") || "";
    const continent = searchParams.get("continent");
    const region = searchParams.get("region");
    const offset = (page - 1) * limit;

    let query = `
      SELECT 
        l.id,
        l.name,
        l.native_name,
        l.status,
        l.speakers,
        string_agg(DISTINCT c.name, ', ') as countries
      FROM languages l
      LEFT JOIN country_languages cl ON l.id = cl.language_id
      LEFT JOIN countries c ON cl.country_id = c.id
      WHERE 1=1
    `;

    const params = [limit, offset];
    let paramCount = 3;

    if (search) {
      query += ` AND (l.name ILIKE $${paramCount} OR l.native_name ILIKE $${paramCount})`;
      params.push(`%${search}%`);
      paramCount++;
    }

    if (continent) {
      query += ` AND EXISTS (
        SELECT 1 FROM countries c2
        JOIN continents cont ON c2.region_id = cont.id
        WHERE c2.id = cl.country_id AND cont.name = $${paramCount}
      )`;
      params.push(continent);
      paramCount++;
    }

    if (region) {
      query += ` AND r.name = $${paramCount}`;
      params.push(region);
      paramCount++;
    }

    query += `
      GROUP BY l.id, l.name, l.native_name, l.status, l.speakers
      ORDER BY l.name
      LIMIT $1 OFFSET $2
    `;

    const result = await pool.query(query, params);
    const countResult = await pool.query("SELECT COUNT(*) FROM languages");
    const totalItems = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(totalItems / limit);

    return NextResponse.json({
      items: result.rows || [],
      totalItems,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error fetching languages:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch languages";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
