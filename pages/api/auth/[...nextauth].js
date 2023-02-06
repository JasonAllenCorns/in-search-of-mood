import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";


const client_id = process.env.SPOTIFY_CLIENTID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const scope = "playlist-read-private playlist-modify-private playlist-modify-public user-read-email playlist-read-collaborative";

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: client_id,
      clientSecret: client_secret,
      authorization: {
        params: { scope },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.id;
        token.expires_at = account.expires_at;
        token.accessToken = account.access_token;
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});
