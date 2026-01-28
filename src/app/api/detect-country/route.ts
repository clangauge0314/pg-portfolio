import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const country = request.headers.get('x-vercel-ip-country') || 
                    request.headers.get('cf-ipcountry') || 
                    null;

    let language: 'ko' | 'ja' | 'en' = 'en';
    
    if (country === 'KR') {
      language = 'ko';
    } else if (country === 'JP') {
      language = 'ja';
    }

    return NextResponse.json({ country, language });
  } catch (error) {
    console.error('Failed to detect country:', error);
    return NextResponse.json({ country: null, language: 'en' });
  }
}
