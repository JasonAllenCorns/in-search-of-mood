import { SpotifyPlaylist, SpotifySession } from "types/types";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/authOptions";
import PlaylistItem from "./PlaylistItem";
import {
  Container,
  Em,
  Flex,
  ScrollArea,
  Separator,
} from "@radix-ui/themes";
import { PlaylistListControls } from "./PlaylistListControls";

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
    <Container>
      <Em>My playlists</Em>
      <Separator
        my="3"
        size="4"
      />
      <PlaylistListControls showingHowMany={showingHowMany || 0} total={total || 0} />
      <ScrollArea
        type="hover"
        scrollbars="vertical"
        style={{ maxHeight: "60vh" }}
      >
        <Flex
          direction="column"
          pr="5"
          py="2"
          my="2"
          gap="3"
        >
          {playlists.map((playlist, idx) => (
            <PlaylistItem key={idx} playlist={playlist} />
          ))}
        </Flex>
      </ScrollArea>
    </Container>
  );
}
