import {
  NextAuthOptions,
  User,
  type Account
} from 'next-auth';
import SpotifyProvider from "next-auth/providers/spotify";
import { SpotifyProfile, SpotifySession, SessionToken } from 'types/types';

const spotifyClientId = String(process?.env?.SPOTIFY_CLIENT_ID || "system-error-trigger-exception");
const spotifyClientSecret = String(process?.env?.SPOTIFY_CLIENT_SECRET || "system-error-trigger-exception");
// const bsAuth = String(process?.env.BASE64_AUTHORIZATION || "zzz");
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
    async session({ session, user, token }: { session: SpotifySession, user: User, token: SessionToken }) {
      session.user = {...session.user, ...user };

      return {...session, token };
    },
    async jwt({ token, user, account, profile }: { token: any, user: User, account: Account, profile: SpotifyProfile }) {
      // The arguments user, account, profile and isNewUser are only passed the first time this callback
      // is called on a new session, after the user signs in. In subsequent calls, only token will be available.
      if (account) {
        token.accessToken = account.access_token;
        token.accessTokenExpiresAt = account.expires_at;
        token.refreshToken = account.refresh_token;
      }
      if (profile) {
        const { uri, href } = profile;
        const { external_urls: { spotify: spotifyProfileUrl } = {} } = profile;
        token.uri = uri;
        token.href = href;
        token.spotifyProfileUrl = spotifyProfileUrl;
      }

      return token;
    },
  },
  session: {
    strategy: "jwt"
  }
}
