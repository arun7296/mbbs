import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/learn/:path*",
    "/practice/:path*",
    "/test/:path*",
    "/clinical/:path*",
    "/progress/:path*",
    "/revise/:path*",
    "/study-plan/:path*",
    "/aetcom/:path*",
  ],
};
