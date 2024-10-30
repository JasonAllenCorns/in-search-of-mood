import NextAuth, { Account, Session, User, } from "next-auth";
import Spotify from "next-auth/providers/spotify";
import { checkAccessIsExpired, refreshTheAccessToken } from "./app/api/utils/getAccessToken";

const spotifyClientId = String(process?.env?.SPOTIFY_CLIENT_ID || "system-error-trigger-exception");
const spotifyClientSecret = String(process?.env?.SPOTIFY_CLIENT_SECRET || "system-error-trigger-exception");
// const bsAuth = String(process?.env.BASE64_AUTHORIZATION || "zzz");
const scope: string = ' user-read-private playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-top-read';
export const {
  handlers: { GET, POST },
  auth,
  unstable_update,
} = NextAuth({
  providers: [Spotify({
    clientId: spotifyClientId,
    clientSecret: spotifyClientSecret,
    authorization: {
      params: { scope }
    }
  })],
  callbacks: {
    async session({ session, token }) {
      const oSession: Session = {
        ...session,
        error: token?.error || "",
      } as Session;
      if (token.user) {
        oSession.user = { ...token.user as User };
      }

      return oSession;
    },
    async jwt({ token, account, profile, user }) {

      // The arguments user, account, profile and isNewUser are only passed the first time this callback
      // is called on a new session, after the user signs in. In subsequent calls, only token will be available.

      if (account) {
        // Save the access token and refresh token in the JWT on the initial login
        return {
          user: {
            id: user?.id,
            "name": user?.name,
            email: user?.email,
            image: user?.image,
          },
          access_token: account.access_token,
          expires_at: Math.floor(Date.now() / 1000 + (account.expires_in || 3600)),
          refresh_token: account.refresh_token,
        }
        // rather that treating this as an additive catalog of token values, treat this as multiple tokens.
        // the conditionals will be mutually exclusive
        // if (account) {} ..
        // else if the token hasn't expired yet..
      } else {
        try {
          const refreshValues = {
            access_token: (token?.access_token || "").toString(),
            refresh_token: (token?.refresh_token || "").toString(),
            expires_at: (token?.expires_at || 0).toString(),
          }

          const didExpire = await checkAccessIsExpired(refreshValues.expires_at);
          const tokenSet = didExpire ? await refreshTheAccessToken({ ...refreshValues }) : refreshValues;
          return {
            ...token,
            access_token: tokenSet.access_token,
            refresh_token: tokenSet.refresh_token,
            expires_at: tokenSet.expires_at,
          }

        } catch (tokenOrRefreshedTokenError) {
          console.error('Error handling the jwt callback for noninitial call. ErrCode: 116')
          return {
            ...token,
            error: tokenOrRefreshedTokenError?.message,
          }
        }
      }
    },
  },
  session: {
    strategy: "jwt"
  }
})