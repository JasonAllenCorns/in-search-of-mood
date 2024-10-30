
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

  const headersList = headers();
  const access_token = headersList.get("access_token");
  const refresh_token = headersList.get("refresh_token");
  const accessTokenExpiresAt = headersList.get("accessTokenExpiresAt");

  if (access_token) {
    const { searchParams } = new URL(req.url);
    const genres = searchParams.get('genres');
    const tempo = searchParams.get('tempo');
    const energy = searchParams.get('energy');
    const fetchUrl = new URL(`${process.env.SPOTIFY_DOMAIN}/v1/recommendations`);

    const filterData = new URLSearchParams();
    if (genres) {
      filterData.append('seed_genres', genres)
    }
    if (tempo) {
      filterData.append('target_tempo', tempo);
    }
    if (energy) {
      filterData.append('target_energy', energy);
    }
    fetchUrl.search = filterData.toString();
    const res = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    const data = await res.json()
    return Response.json({ data })
  }
  return new Response('Token missing or invalid', { status: 401 })

}
