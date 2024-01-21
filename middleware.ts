import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
  console.log('(jason.corns) --------------------------------------- start group: write');
  console.log('(jason.corns) logged details from ~/Sites/in-search-of-mood/middleware.ts');
  console.log("(jason.corns) request", request);
  console.log('(jason.corns) ----------------------------------------- end group: write');

  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/dashboard',
}