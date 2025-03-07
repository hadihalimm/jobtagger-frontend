// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest) {
//   const accessToken = req.cookies.get('access_token')?.value;
//   console.log(accessToken);

//   if (req.nextUrl.pathname === '/sign-in') {
//     return NextResponse.next();
//   }

//   if (
//     req.nextUrl.pathname.startsWith('/_next/') || // Next.js assets
//     req.nextUrl.pathname.startsWith('/favicon.ico') || // Favicon
//     req.nextUrl.pathname.match(
//       /\.(png|jpg|jpeg|svg|gif|ico|webp|woff2|woff|ttf|otf|css|js|json)$/,
//     ) // Public assets
//   ) {
//     return NextResponse.next();
//   }

//   if (!accessToken) {
//     return NextResponse.redirect(new URL('/sign-in', req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
// };

export function middleware() {}
