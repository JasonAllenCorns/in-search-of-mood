/**
 * THIS IS THE API ENDPOINT AND PROBABLY NOT THE FILE YOU'RE LOOKING FOR
 */

import { auth } from "@/auth"
import { processAccessToken } from "../utils/getAccessToken";
import { SpotifySession } from "@/types/types";

export async function GET(request: Request) {
  const session = await auth()
  if (session) {
    // const { access_token, ok, message } = await processAccessToken(session);
    // // Do something with the session
    // if (ok) {
    //   // session contains all we need, since we're calling the 'me' routes
    //   // quick validation of configs
    //   if (process && process.env && process.env.SPOTIFY_DOMAIN && access_token) {
    //     const fetchUrl = new URL(`${process.env.SPOTIFY_DOMAIN}/v1/me/playlists`);
    //     const headers = new Headers();
    //     headers.set('Authorization', `Bearer ${access_token}`);
    //     const res = await fetch(fetchUrl, { headers });

    //     if (res.ok) {
    //       const playlists = await res.json();
    //       return Response.json({ playlists });
    //     }
    //     return Response.json({ items: [] });

    //   }
    //   return Response.json({ items: [] });
    // }
    // return new Response("You must be signed in.", {
    //   status: 401,
    //   headers: { 'Set-Cookie': 'testFor=echo' }
    // });
  }
}