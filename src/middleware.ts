
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  
  // Remove trailing slashes
  if (pathname.endsWith('/') && pathname !== '/') {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }
  
  // Handle www to non-www redirect for SEO (assuming non-www is preferred)
  if (url.hostname.startsWith('www.')) {
    const newHostname = url.hostname.replace(/^www\./, '');
    url.hostname = newHostname;
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api (API routes)
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. all files in the public folder
     */
    '/((?!api|_next|static|_vercel|.*\\..*).*)',
  ],
};
