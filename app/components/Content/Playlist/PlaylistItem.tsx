"use client";

import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { SpotifyPlaylist } from "types/types";

export default function PlaylistItem({ ...props }) {
  const playlist: SpotifyPlaylist = props?.playlist;
  const playlistAvatar: any = {
    src: playlist.images[0].url,
    size: "4", // radix-ui specific 'size' value
    radius: "large",
    fallback: "e",
  };

  return (
    <Card
      style={{ maxWidth: 240 }}
      key={playlist.id}
      data-ref={playlist.id}
    >
      <Flex
        gap="3"
        align="center"
      >
        <Avatar
          size={playlistAvatar.size}
          src={playlistAvatar.src}
          radius={playlistAvatar.radius}
          fallback={playlistAvatar.fallback}
        />
        <Box>
          <Text
            as="div"
            size="2"
            weight="bold"
            trim="start"
            mr="2"
            style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "160px" }}
          >
            {playlist.name}
          </Text>
          <Text
            as="div"
            size="2"
            color="gray"
          >
            {playlist.owner.display_name}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
