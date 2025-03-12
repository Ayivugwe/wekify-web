
import { NextResponse } from 'next/server';
import { getLanguageStats } from '@/lib/database';

export async function GET() {
  try {
    const stats = await getLanguageStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
