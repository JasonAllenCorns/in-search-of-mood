import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const spotifyClientId = String(process?.env?.SPOTIFY_CLIENT_ID || "system-error-trigger-exception");
const spotifyClientSecret = String(process?.env?.SPOTIFY_CLIENT_SECRET || "system-error-trigger-exception");


const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret
    })
  ]
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
