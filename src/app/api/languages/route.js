
import { NextResponse } from 'next/server';
import { getAllLanguages, getLanguagesByContinent, searchLanguages } from '@/lib/database/languages';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const continent = searchParams.get('continent');
    const search = searchParams.get('search');

    let data;
    
    if (search) {
      data = await searchLanguages(search);
    } else if (continent) {
      data = await getLanguagesByContinent(continent);
    } else {
      data = await getAllLanguages();
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
