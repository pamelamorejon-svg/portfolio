import { NextRequest, NextResponse } from "next/server";

// Protect /oscar (and everything under it) with a cookie.
// The cookie is set by the server action in app/oscar/login/actions.ts
// when the user submits the correct password.

const COOKIE_NAME = "oscar_auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the login page itself, otherwise we'd loop.
  if (pathname.startsWith("/oscar/login")) {
    return NextResponse.next();
  }

  // Only guard /oscar/*
  if (!pathname.startsWith("/oscar")) {
    return NextResponse.next();
  }

  const authed = req.cookies.get(COOKIE_NAME)?.value === "1";
  if (authed) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/oscar/login";
  // Preserve where they were going so we can redirect back after login.
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/oscar/:path*"],
};
