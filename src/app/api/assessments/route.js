
import { NextResponse } from 'next/server';
import { saveLanguageAssessment, getLanguageStats, getAllAssessments } from '@/lib/database';

export async function GET() {
  try {
    const assessments = await getAllAssessments();
    return NextResponse.json({ success: true, data: assessments });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const result = await saveLanguageAssessment(data);
    
    if (result.success) {
      return NextResponse.json({ success: true, id: result.id });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
