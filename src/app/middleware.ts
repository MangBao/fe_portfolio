import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/cms")) {
    // check token
    const token = req.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/cms/:path*"],
};
