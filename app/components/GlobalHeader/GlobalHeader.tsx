"use client";
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarContent,
} from "@nextui-org/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { SpotifyProfile } from "types/types";

interface Props {
  user?: {
    name?: string | undefined;
    image?: string | undefined;
    spotifyProfile?: SpotifyProfile;
  };
}

const GlobalHeader = ({ ...props }: Props) => {
  const spotifyUrl = props?.user?.spotifyProfile?.external_urls?.spotify || "";
  const name = props?.user?.name || "N A";
  const image = props?.user?.image || undefined;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar
      className="max-w-7xl mx-auto"
      maxWidth="full"
    >
      <NavbarContent justify="start"></NavbarContent>
      <NavbarContent className="hidden sm:flex gap-3">&nbsp;</NavbarContent>
      <NavbarContent justify="end">
        <Dropdown
          placement="bottom-end"
          isOpen={isOpen}
          onOpenChange={(open) => {
            setIsOpen(open);
          }}
        >
          <DropdownTrigger>
            <Button
              variant="light"
              radius="full"
              size="lg"
              endContent={
                <ChevronDownIcon
                  className={`w-6 h-6 transform-gpu ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              }
              className="pl-1 pr-4 justify-between"
            >
              <Avatar
                className="my-4"
                name={name}
                size="md"
                src={image}
              />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
          >
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              textValue={`Signed in as ${name}`}
            >
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{name}</p>
            </DropdownItem>
            <DropdownItem
              key="divider"
              textValue="Horizontal line visually separating readonly name above from actionable links below"
            >
              <Divider orientation="horizontal" />
            </DropdownItem>
            <DropdownItem
              key="spotifyProfile"
              href={spotifyUrl}
              target="_new"
              textValue="Link to your Spotify profoile"
            >
              My Profile
            </DropdownItem>
            <DropdownItem
              color="danger"
              key="signout"
              href="/api/auth/signin"
              textValue="Link to signout of this application"
            >
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
export default GlobalHeader;
