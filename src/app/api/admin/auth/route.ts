
import { NextResponse } from "next/server";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Wek1fy@2024"; // You should store this securely in environment variables

export async function POST(request: Request) {
  const body = await request.json();
  
  if (body.username === ADMIN_USERNAME && body.password === ADMIN_PASSWORD) {
    return NextResponse.json({ authenticated: true });
  }
  
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
