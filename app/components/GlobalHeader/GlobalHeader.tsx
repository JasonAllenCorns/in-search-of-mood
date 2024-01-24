"use client";
import React from "react";
import {
  Avatar,
  Button,
  Container,
  DropdownMenu,
  Flex,
} from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import styles from "./NavigationMenu.module.css";

interface Props {
  user?: {
    name?: string | undefined;
    image?: string | undefined;
    spotifyProfileUrl?: string | undefined;
  };
}

const GlobalHeader = ({ ...props }: Props) => {
  const spotifyUrl = props?.user?.spotifyProfileUrl;
  const name = props?.user?.name || "N A";
  const image = props?.user?.image || undefined;

  const initialsFallback = [
    (name?.split(" ")[0] || "N").charAt(0),
    (name?.split(" ")[1] || "A").charAt(0),
  ].join("");
  return (
    <Container>
      <Flex
        gap="3"
        height="9"
        direction={"row-reverse"}
        style={{paddingTop: "9px", paddingBottom: "9px"}}
      >
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button
              variant="ghost"
              style={{ cursor: "pointer" }}
            >
              <Avatar
                size="3"
                radius="full"
                src={image}
                fallback={initialsFallback}
              />
              <CaretDownIcon width="30" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item className={styles.DropdownMenuItem}>My playlists</DropdownMenu.Item>
            <DropdownMenu.Separator />
            {spotifyUrl && (
              <DropdownMenu.Item className={styles.DropdownMenuItem}>
                <a
                  href={spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  My Spotify account
                </a>
              </DropdownMenu.Item>
            )}
            <DropdownMenu.Item className={styles.DropdownMenuItem}>
              <Link href="/api/auth/signin">Sign out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
      <Flex
        gap="6"
        direction="row"
      ></Flex>
    </Container>
  );
};
export default GlobalHeader;
