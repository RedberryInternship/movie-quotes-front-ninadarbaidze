import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { authGoogle } from 'services';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT!,
    }),
  ],
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_GOOGLE_SECRET!,
  },
  secret: process.env.NEXT_PUBLIC_JWT_GOOGLE_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_Token) {
        token.accessToken = account.access_Token;
      }
      if (account?.userId) {
        token.userId = account.userId;
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.userId = token.userId;
      return session;
    },

    async redirect() {
      return `${process.env.NEXTAUTH_URL}/feed`;
    },

    async signIn({ account, profile }) {
      try {
        const data = {
          username: profile.name,
          email: profile.email,
        };
        const response = await authGoogle(data);
        account.access_Token = response.data.token;
        account.userId = response.data.userId as string;
        return true;
      } catch (err: any) {
        return false;
      }
    },
  },
});
