import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scope = "playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public"


  // "user-top-read playlist-read-private user-read-email user-read-private playlist-read-collaborative";

const authOptions ={
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        params: { scope },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.id;
        token.expires_at = account.expires_at;
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {...token, ...session.user};
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    //TODO: drop this signing key into Doppler and .env
    signingKey: {"kty":"oct","kid":"nyYgfD7nFWFiQ0jl-4kZWI41zSuzoWIRsbiwfg-qFRI","alg":"HS512","k":"RbZyBkTS8TV0MIHQvBqSr82c8L8ATJfewutpQMpHeY0bYiK7lTxxht84-KawRw2XmdzWzZAimX3B7ULSQlCzBg"}
  }
};

export default NextAuth(authOptions);
