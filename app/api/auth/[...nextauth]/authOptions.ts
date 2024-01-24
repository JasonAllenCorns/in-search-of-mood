import {
  NextAuthOptions,
  Session,
  User,
  type Account
} from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from "next-auth/providers/spotify";
import { SpotifyProfile , SpotifyUser} from 'types/types';
// import { getToken } from "next-auth/jwt"

const spotifyClientId = String(process?.env?.SPOTIFY_CLIENT_ID || "system-error-trigger-exception");
const spotifyClientSecret = String(process?.env?.SPOTIFY_CLIENT_SECRET || "system-error-trigger-exception");

const scope: string = ' user-read-private playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-top-read';



export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret,
      authorization: {
        params: { scope }
      }
    })
  ],
  callbacks: {
    async session({ session, user, token }: {session: Session, user: User, token: JWT}) {
      session.user = { ...token, ...session.user, ...user };
      
      return session;
    },
    async jwt({ token, user, account, profile }: {token: JWT, user: User, account: Account, profile: SpotifyProfile}) {
      if (account) {
        // account is present; must be first time setting the JWT
        token.access_token = account.access_token
        if (account.refresh_token) {
          token.refresh_token = account.access_token;
        }
      }
      if (profile) {
        const { uri, href } = profile;
        const { external_urls: {spotify: spotifyProfileUrl} = {}} = profile;
        token.uri = uri;
        token.href = href;  
        token.spotifyProfileUrl = spotifyProfileUrl;
      }
      return token
    }
  },
  session: {
    strategy: "jwt"
  }
}