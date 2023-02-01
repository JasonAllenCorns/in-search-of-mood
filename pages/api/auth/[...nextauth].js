import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"


const client_id = process.env.SPOTIFY_CLIENTID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
const cb = process.env.SPOTIFY_REDIRECT_CB_URI;

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: client_id,
      clientSecret: client_secret,
    })
  ]
}

export default NextAuth(authOptions)