import { NextResponse, type NextRequest } from "next/server";

// Expose the current path to the root layout (via a request header) so it can
// set the correct <html lang> per route: "/fr" -> fr, everything else -> en.
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Skip API routes and static assets.
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|webp|ico|mp4|xml|txt)).*)",
  ],
};
