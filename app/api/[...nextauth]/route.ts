import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const clientId: string = process.env.SPOTIFY_CLIENT_ID || "";
const clientSecret: string = process.env.SPOTIFY_CLIENT_SECRET || "";
const scope = ' user-read-private playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-top-read';

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId,
      clientSecret,
      authorization: {
        params: { scope },
      },
    }),
  ]
};

export default NextAuth(authOptions);
