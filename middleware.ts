import { auth } from "./auth"

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

export default auth((req) => {
});