import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: client_id,
      clientSecret: client_secret,
    }),
  ],
  callbacks: {
    jwt({ token, account, profile }) {
      // per docs at https://next-auth.js.org/configuration/callbacks#jwt-callback,
      // account and profile are only included in the first execution of this callback
      // and callbacks may be executed N>1 times.
      if (account) {
        token.access_token = account.access_token || 'ERR_NO_AXS_TKN';
        token.refresh_token = token.refreshToken || account.refresh_token || 'ERR_NO_RRS_TKN';
      }
      if (profile) {
        token.id = profile.id || 'ERR_NO_PIL_ID';
      }
      return token;
    },
    session({ session, token }) {
      // per docs at https://next-auth.js.org/configuration/callbacks#session-callback,
      // session callback executes after the jwt callback and values can be read from the
      // token.
      session.user = { ...token, ...session.user };
      if (token?.id) {
        session.id = token.id;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
