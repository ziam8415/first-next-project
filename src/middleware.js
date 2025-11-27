import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(request) {
  // Edge-compatible getToken
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Not logged in → redirect
  if (!token) {
    const callbackUrl = request.nextUrl.pathname;
    const loginUrl = new URL(`/login?callbackUrl=${callbackUrl}`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Logged in → continue
  return NextResponse.next();
}

export const config = {
  matcher: "/protectedRoute/:path*",
};
