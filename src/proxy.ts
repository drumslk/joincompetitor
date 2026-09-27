import { NextResponse, type NextRequest } from "next/server";

// Expose the current path to the root layout (via a request header) so it can
// set the correct <html lang> per route: "/fr" -> fr, everything else -> en.
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // Baseline security headers on every navigable response.
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains",
  );
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );

  return response;
}

export const config = {
  // Skip API routes and static assets.
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|webp|ico|mp4|xml|txt)).*)",
  ],
};
