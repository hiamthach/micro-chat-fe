import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/config/constants/env.const';

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
