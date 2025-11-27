import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // ❌ Not logged in → redirect to login
  if (!token) {
    const callbackUrl = request.nextUrl.pathname;
    const loginUrl = new URL(`/login?callbackUrl=${callbackUrl}`, request.url);

    return NextResponse.redirect(loginUrl);
  }

  // ✅ Logged in → allow access
  return NextResponse.next();
}

export const config = {
  matcher: "/protectedRoute/:path*",
};
