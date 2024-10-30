import PlaylistItem from "./PlaylistItem";
import { PlaylistListControls } from "./PlaylistListControls";
import { Divider } from "@nextui-org/react";
import { SpotifyPlaylist, SpotifySession } from "@/types/types";
import { auth } from "@/auth";
import { processAccessToken } from "@/app/api/utils/getAccessToken";


export default async function PlaylistContainer() {
  let playlistTotal = 0;
  let showingHowMany = 0;
  let playlists = [];

  const session = await auth() as SpotifySession;
  if (session) {
    const { access_token, ok, message } = await processAccessToken(session);
    // Do something with the session
    if (ok) {
      // session contains all we need, since we're calling the 'me' routes
      // quick validation of configs
      if (process && process.env && process.env.SPOTIFY_DOMAIN && access_token) {
        const fetchUrl = new URL(`${process.env.SPOTIFY_DOMAIN}/v1/me/playlists`);
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${access_token}`);
        const res = await fetch(fetchUrl, { headers });

        if (res.ok) {
          const resPlaylists = await res.json();
          playlists = resPlaylists?.items;
        }

      }
    }
  }


  return (
    <div className="container mx-auto">
      <span className="italic">My playlists</span>
      <Divider className="mt-6" />
      <PlaylistListControls
        showingHowMany={showingHowMany || 0}
        total={playlistTotal || 0}
      />
      <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
        <div className="flex flex-col gap-y-3 pr-5 py-2 my-2">
          {playlists.map((playlist: SpotifyPlaylist, idx: number) => (
            <PlaylistItem
              key={idx}
              playlist={playlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
