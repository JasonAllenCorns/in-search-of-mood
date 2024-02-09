"use client";
import {Card, CardBody} from "@nextui-org/react";
import {
  Avatar,
} from "@nextui-org/react";
import { SpotifyPlaylist } from "types/types";

export default function PlaylistItem({ ...props }) {
  const playlist: SpotifyPlaylist = props?.playlist;
  const playlistAvatar: any = {
    src: playlist.images[0].url,
  };

  return (
    <Card
      style={{ maxWidth: 240 }}
      key={playlist.id}
      data-ref={playlist.id}
      isHoverable={true}
      isPressable={true}
    >
      <CardBody className="flex flex-row gap-x-3">
        <Avatar
          src={playlistAvatar.src}
          name={playlist.name || "Playlist"}
        />
        <div>
          <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "160px" }}>
            {playlist.name}
          </div>
          <div style={{color: "#333"}}>
            {playlist.owner.display_name}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
