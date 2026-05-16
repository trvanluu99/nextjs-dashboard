import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], // matcher specify that proxy should run on specific paths, the protected routes will not even start rendering until the Proxy verifies the authentication, enhancing both the security and performance of your application.
};