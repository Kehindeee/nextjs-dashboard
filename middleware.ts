import NextAuth, { Session } from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest } from 'next/server';

interface AuthConfig {
  secret: string;
  pages: {
    signIn: string;
  };
  callbacks: {
    authorized({ auth, request: { nextUrl } }: { request: NextRequest; auth: Session | null; }): boolean | Response;
  };
  providers: never[];
}

const updatedAuthConfig: AuthConfig = {
  ...authConfig,
  secret: process.env.AUTH_SECRET || 'YAhV6qf9sq5xnyCDBwD9Iaf6IdcwWJrlTR0A1yt/ILE='
};

export default NextAuth(updatedAuthConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};