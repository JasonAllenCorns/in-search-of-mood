import { auth } from "@/auth"
import { processAccessToken } from "../utils/getAccessToken";

export async function GET(request: Request) {
  const session = await auth()
  if (session) {
    const { accessToken, ok, message } = await processAccessToken(session);
    // Do something with the session
    if (ok) {
      // session contains all we need, since we're calling the 'me' routes
      // quick validation of configs
      if (process && process.env && process.env.SPOTIFY_DOMAIN && accessToken) {
        const fetchUrl = new URL(`${process.env.SPOTIFY_DOMAIN}/v1/me/playlists`);
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${accessToken}`);
        const res = await fetch(fetchUrl, { headers });

        if (res.ok) {
          const playlists = await res.json();
          return Response.json({ playlists });
        }
        return Response.json({ items: [] });

      }
      return Response.json({ items: [] });
    }
    return new Response("You must be signed in.", {
      status: 401,
      headers: { 'Set-Cookie': 'testFor=echo' }
    });
  }
}