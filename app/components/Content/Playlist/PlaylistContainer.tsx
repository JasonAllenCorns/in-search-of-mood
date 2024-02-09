import { SpotifyPlaylist, SpotifySession } from "types/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/authOptions";
import PlaylistItem from "./PlaylistItem";
import { PlaylistListControls } from "./PlaylistListControls";
import { Divider } from "@nextui-org/react";

interface PlaylistPageData {
  playlists: SpotifyPlaylist[];
  showingHowMany: number;
  total: number;
}

async function getPlaylists(): Promise<PlaylistPageData> {
  const session: SpotifySession | null | undefined = await getServerSession(
    authOptions
  );
  let playlists: SpotifyPlaylist[] = [];
  let playlistCount: number = 0;
  // "https://api.spotify.com/v1/users/1251433830/playlists?offset=0&limit=20"

  if (session) {
    const { token }: SpotifySession = session;
    const { accessToken, refreshToken, accessTokenExpiresAt } = token || {
      accessToken: "",
      refreshToken: "",
      accessTokenExpiresAt: -1,
    };

    ///v1/me/playlists
    const fetchPlaylistsUrl = `${process.env.SPOTIFY_DOMAIN}/v1/me/playlists`;
    const fetchPlaylistHeaders = {
      Authorization: `Bearer ${accessToken}`,
    };
    const res = await fetch(fetchPlaylistsUrl, {
      method: "GET",
      headers: fetchPlaylistHeaders,
    });
    if (res.ok) {
      const playlistsItems = await res.json();
      playlists = playlistsItems.items || [];
      playlistCount = playlistsItems.total || 0;
    } else {
    }
  }
  return { total: playlistCount, showingHowMany: playlists.length, playlists };
}

export default async function PlaylistContainer() {
  const listsRes = await getPlaylists();
  const { total, playlists, showingHowMany } = listsRes;
  return (
    <div className="container mx-auto">
      <span className="italic">My playlists</span>
      <Divider className="mt-6" />
      <PlaylistListControls
        showingHowMany={showingHowMany || 0}
        total={total || 0}
      />
      <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
        <div className="flex flex-col gap-y-3 pr-5 py-2 my-2">
          {playlists.map((playlist, idx) => (
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
