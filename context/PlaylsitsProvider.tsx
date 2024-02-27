"use client";
import {
  SpotifyPlaylist,
  SpotifySession,
  UserPlaylistContext,
  UserPlaylistProvider,
} from "@/types/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const PlaylistContext = createContext<UserPlaylistContext | null>(null);
const tempDataPlaylists: {
  playlists: {
    href: string;
    items: [] | SpotifyPlaylist[];
    limit?: number | string | null;
    next?: string | number | null;
    offset?: string | number | null;
    previous?: string | number | null;
    total: number;
  };
} = {
  playlists: {
    href: "https://api.spotify.com/v1/users/1251433830/playlists?offset=0&limit=20",
    items: [
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/6jyDIt96OfW8i4rK09e7zR",
        },
        href: "https://api.spotify.com/v1/playlists/6jyDIt96OfW8i4rK09e7zR",
        id: "6jyDIt96OfW8i4rK09e7zR",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2732ac9e040600333ecee1507fe",
            width: 640,
          },
        ],
        name: "Scores to work to",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id: "Myw1MDUyMWVkODY4MWNhMzJjNjc1ZjU3N2YzMTUzOWNiZDk2MmY0YTIx",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/6jyDIt96OfW8i4rK09e7zR/tracks",
          total: 96,
        },
        type: "playlist",
        uri: "spotify:playlist:6jyDIt96OfW8i4rK09e7zR",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/4zUSXDpaOa5HLcmpfyk4iR",
        },
        href: "https://api.spotify.com/v1/playlists/4zUSXDpaOa5HLcmpfyk4iR",
        id: "4zUSXDpaOa5HLcmpfyk4iR",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b2731385f5151617aa5e0e9977f0ab67616d0000b27371e01645abce04dda00e1c0cab67616d0000b273a715f4b68eeb1f73469f5140ab67616d0000b273ec47c630879616a85b0b361d",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b2731385f5151617aa5e0e9977f0ab67616d0000b27371e01645abce04dda00e1c0cab67616d0000b273a715f4b68eeb1f73469f5140ab67616d0000b273ec47c630879616a85b0b361d",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b2731385f5151617aa5e0e9977f0ab67616d0000b27371e01645abce04dda00e1c0cab67616d0000b273a715f4b68eeb1f73469f5140ab67616d0000b273ec47c630879616a85b0b361d",
            width: 60,
          },
        ],
        name: "00s base playlist",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "NTAsMWQwNDY0YTBlMmE0MjAyMDdiMTMzNTAyYTE0ZmRmNmI3ZDQ1YzgwMA==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/4zUSXDpaOa5HLcmpfyk4iR/tracks",
          total: 45,
        },
        type: "playlist",
        uri: "spotify:playlist:4zUSXDpaOa5HLcmpfyk4iR",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/6H65SJN1TTDKZHjovdEmK9",
        },
        href: "https://api.spotify.com/v1/playlists/6H65SJN1TTDKZHjovdEmK9",
        id: "6H65SJN1TTDKZHjovdEmK9",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27304db0e3bcd166c1d6cfd81f9ab67616d0000b2730a80b890ab011362fd7aa73bab67616d0000b273107d182a8d39586f8f3f23a0ab67616d0000b273f5ea32b7c7b4ee3a4583d5df",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b27304db0e3bcd166c1d6cfd81f9ab67616d0000b2730a80b890ab011362fd7aa73bab67616d0000b273107d182a8d39586f8f3f23a0ab67616d0000b273f5ea32b7c7b4ee3a4583d5df",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b27304db0e3bcd166c1d6cfd81f9ab67616d0000b2730a80b890ab011362fd7aa73bab67616d0000b273107d182a8d39586f8f3f23a0ab67616d0000b273f5ea32b7c7b4ee3a4583d5df",
            width: 60,
          },
        ],
        name: "Blues Rock that Rocks",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MjgsZDZiYzRjZDIzMjhkOWE3NzQ3Zjc0OWU1YjQ1MzE2YWZlZGU0YzQ2Ng==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/6H65SJN1TTDKZHjovdEmK9/tracks",
          total: 516,
        },
        type: "playlist",
        uri: "spotify:playlist:6H65SJN1TTDKZHjovdEmK9",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/28I7AwR8reYykW1PZgAoPE",
        },
        href: "https://api.spotify.com/v1/playlists/28I7AwR8reYykW1PZgAoPE",
        id: "28I7AwR8reYykW1PZgAoPE",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27306ea44e117c35d508999b1ecab67616d0000b2735b2021bffcac06621f3cfac6ab67616d0000b273c17beab3e27f18af397a00b2ab67616d0000b273ce8218fa50502602f85feb6e",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b27306ea44e117c35d508999b1ecab67616d0000b2735b2021bffcac06621f3cfac6ab67616d0000b273c17beab3e27f18af397a00b2ab67616d0000b273ce8218fa50502602f85feb6e",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b27306ea44e117c35d508999b1ecab67616d0000b2735b2021bffcac06621f3cfac6ab67616d0000b273c17beab3e27f18af397a00b2ab67616d0000b273ce8218fa50502602f85feb6e",
            width: 60,
          },
        ],
        name: "Acoustic country songs you oughta learn",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MTUsODUwOTIwYjhhYzBjNDQ0MTA5ZDg5MGEzOTNkMTZhYTcxNjZhZGZiZA==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/28I7AwR8reYykW1PZgAoPE/tracks",
          total: 97,
        },
        type: "playlist",
        uri: "spotify:playlist:28I7AwR8reYykW1PZgAoPE",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/6ag7OXvlRbC9RBXQDbLA5l",
        },
        href: "https://api.spotify.com/v1/playlists/6ag7OXvlRbC9RBXQDbLA5l",
        id: "6ag7OXvlRbC9RBXQDbLA5l",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b2730df268957f5abaa2a92bf673ab67616d0000b27352e179688ffc8da49e081badab67616d0000b2736b742298f7f36717855c4cafab67616d0000b273ab7bf9071e70798a6c07f73e",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b2730df268957f5abaa2a92bf673ab67616d0000b27352e179688ffc8da49e081badab67616d0000b2736b742298f7f36717855c4cafab67616d0000b273ab7bf9071e70798a6c07f73e",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b2730df268957f5abaa2a92bf673ab67616d0000b27352e179688ffc8da49e081badab67616d0000b2736b742298f7f36717855c4cafab67616d0000b273ab7bf9071e70798a6c07f73e",
            width: 60,
          },
        ],
        name: "Strengths Based Playlist",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MzUsZjM3YTYxNjEyYzBiNDZkNmExZDRiZjMyODBjOWQ3MWJjYWRmNzQ0ZQ==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/6ag7OXvlRbC9RBXQDbLA5l/tracks",
          total: 33,
        },
        type: "playlist",
        uri: "spotify:playlist:6ag7OXvlRbC9RBXQDbLA5l",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/2wJhMg6DJpJw57Y6pTB7yI",
        },
        href: "https://api.spotify.com/v1/playlists/2wJhMg6DJpJw57Y6pTB7yI",
        id: "2wJhMg6DJpJw57Y6pTB7yI",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b273204f41d52743c6a9efd62985ab67616d0000b273593dc79bc85aa974a98d8cd6ab67616d0000b2736c44679425e2695001b35d72ab67616d0000b273d50b2dcb415302b5864fc07b",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b273204f41d52743c6a9efd62985ab67616d0000b273593dc79bc85aa974a98d8cd6ab67616d0000b2736c44679425e2695001b35d72ab67616d0000b273d50b2dcb415302b5864fc07b",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b273204f41d52743c6a9efd62985ab67616d0000b273593dc79bc85aa974a98d8cd6ab67616d0000b2736c44679425e2695001b35d72ab67616d0000b273d50b2dcb415302b5864fc07b",
            width: 60,
          },
        ],
        name: "Life is short; live it now",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "NjQsZjZlNDM5ZDgzNzA5NmQyN2U0ZTllMWY2ZDRiZjgyY2YwODBhMmJhZg==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/2wJhMg6DJpJw57Y6pTB7yI/tracks",
          total: 39,
        },
        type: "playlist",
        uri: "spotify:playlist:2wJhMg6DJpJw57Y6pTB7yI",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/21SupvNU7AndigMFNqTsZ4",
        },
        href: "https://api.spotify.com/v1/playlists/21SupvNU7AndigMFNqTsZ4",
        id: "21SupvNU7AndigMFNqTsZ4",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b273086fd08b0a9e09401a634902ab67616d0000b27366a38b753013c0e66084830cab67616d0000b273f0d55e973f83cbfe90dded16ab67616d0000b273f959fa12f3157d5968aca89d",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b273086fd08b0a9e09401a634902ab67616d0000b27366a38b753013c0e66084830cab67616d0000b273f0d55e973f83cbfe90dded16ab67616d0000b273f959fa12f3157d5968aca89d",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b273086fd08b0a9e09401a634902ab67616d0000b27366a38b753013c0e66084830cab67616d0000b273f0d55e973f83cbfe90dded16ab67616d0000b273f959fa12f3157d5968aca89d",
            width: 60,
          },
        ],
        name: "No More Hollywood Endings",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MTgsZjdiNjNmM2M3ZmE2OGY2OGI1ZWRkZjZkYTRkYjM3NGQ2NWFiNTM4Ng==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/21SupvNU7AndigMFNqTsZ4/tracks",
          total: 337,
        },
        type: "playlist",
        uri: "spotify:playlist:21SupvNU7AndigMFNqTsZ4",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/00wVUAJyFGP4I7t8gZ0EId",
        },
        href: "https://api.spotify.com/v1/playlists/00wVUAJyFGP4I7t8gZ0EId",
        id: "00wVUAJyFGP4I7t8gZ0EId",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27327bd7d234a31296df34b9a64ab67616d0000b27341be6d9cf0ec0067d095a072ab67616d0000b273542cbb9bc4b310479020223fab67616d0000b273cc5ff69ede344df741c46aea",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b27327bd7d234a31296df34b9a64ab67616d0000b27341be6d9cf0ec0067d095a072ab67616d0000b273542cbb9bc4b310479020223fab67616d0000b273cc5ff69ede344df741c46aea",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b27327bd7d234a31296df34b9a64ab67616d0000b27341be6d9cf0ec0067d095a072ab67616d0000b273542cbb9bc4b310479020223fab67616d0000b273cc5ff69ede344df741c46aea",
            width: 60,
          },
        ],
        name: "Petty-esque",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "NDYsYzg5ZjNjMmI0M2UyZGZkZDEzYTMxNzcxYThmYzEyZDA0YWM5MTUyOA==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/00wVUAJyFGP4I7t8gZ0EId/tracks",
          total: 45,
        },
        type: "playlist",
        uri: "spotify:playlist:00wVUAJyFGP4I7t8gZ0EId",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/0mDxkT99KDev7SkdAF43NR",
        },
        href: "https://api.spotify.com/v1/playlists/0mDxkT99KDev7SkdAF43NR",
        id: "0mDxkT99KDev7SkdAF43NR",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b2730130d132122c260db2bebfabab67616d0000b27333ddc5c6cbcd5246b39fdac3ab67616d0000b27352581ab63adac4952165313cab67616d0000b273f52b888480cfd15542ee9507",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b2730130d132122c260db2bebfabab67616d0000b27333ddc5c6cbcd5246b39fdac3ab67616d0000b27352581ab63adac4952165313cab67616d0000b273f52b888480cfd15542ee9507",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b2730130d132122c260db2bebfabab67616d0000b27333ddc5c6cbcd5246b39fdac3ab67616d0000b27352581ab63adac4952165313cab67616d0000b273f52b888480cfd15542ee9507",
            width: 60,
          },
        ],
        name: "Tom Petty Acoustic",
        owner: {
          display_name: "rngreen8992",
          external_urls: {
            spotify: "https://open.spotify.com/user/rngreen8992",
          },
          href: "https://api.spotify.com/v1/users/rngreen8992",
          id: "rngreen8992",
          type: "user",
          uri: "spotify:user:rngreen8992",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MjQsMTY3ZmNkOTBlNmU4MDZhZGFlMjUzNDRmNDNjMzFlMzM5ODQ3NDhlOA==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/0mDxkT99KDev7SkdAF43NR/tracks",
          total: 21,
        },
        type: "playlist",
        uri: "spotify:playlist:0mDxkT99KDev7SkdAF43NR",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/0IfP7zvUJwLbdpWVuk3M17",
        },
        href: "https://api.spotify.com/v1/playlists/0IfP7zvUJwLbdpWVuk3M17",
        id: "0IfP7zvUJwLbdpWVuk3M17",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b2736a025154c73c41e501813d59ab67616d0000b27391b246743456e285a20a46edab67616d0000b273a8a965df6a845b265ee19106ab67616d0000b273bbf0146981704a073405b6c2",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b2736a025154c73c41e501813d59ab67616d0000b27391b246743456e285a20a46edab67616d0000b273a8a965df6a845b265ee19106ab67616d0000b273bbf0146981704a073405b6c2",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b2736a025154c73c41e501813d59ab67616d0000b27391b246743456e285a20a46edab67616d0000b273a8a965df6a845b265ee19106ab67616d0000b273bbf0146981704a073405b6c2",
            width: 60,
          },
        ],
        name: "Aerosmith Vegas Shows",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MjgsOWQ0NjM4Y2VlODhjNDRjOTQzMDY5MzM3NzNhOGFkMjRmOTlkZDRiZQ==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/0IfP7zvUJwLbdpWVuk3M17/tracks",
          total: 27,
        },
        type: "playlist",
        uri: "spotify:playlist:0IfP7zvUJwLbdpWVuk3M17",
      },
      {
        collaborative: false,
        description: "Old goodies and new hits - all in one place!",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/2yCqbxs4ztf1kmRTIIujeo",
        },
        href: "https://api.spotify.com/v1/playlists/2yCqbxs4ztf1kmRTIIujeo",
        id: "2yCqbxs4ztf1kmRTIIujeo",
        images: [
          {
            height: null,
            url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbd8498f27c4aa2500397bb1b1",
            width: null,
          },
        ],
        name: "This is Symphonic Metal",
        owner: {
          display_name: "Metal Playlists",
          external_urls: {
            spotify: "https://open.spotify.com/user/21pnenxutojkjfr67ggutfltq",
          },
          href: "https://api.spotify.com/v1/users/21pnenxutojkjfr67ggutfltq",
          id: "21pnenxutojkjfr67ggutfltq",
          type: "user",
          uri: "spotify:user:21pnenxutojkjfr67ggutfltq",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "NDI0LDcxZjk3M2YwZDFlYzc4Y2FiNTk1NGM2NTIyYTU2NTA5ZDA4OGI5ZjM=",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/2yCqbxs4ztf1kmRTIIujeo/tracks",
          total: 117,
        },
        type: "playlist",
        uri: "spotify:playlist:2yCqbxs4ztf1kmRTIIujeo",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/2XEagIHbL1pzbDSB9VNm44",
        },
        href: "https://api.spotify.com/v1/playlists/2XEagIHbL1pzbDSB9VNm44",
        id: "2XEagIHbL1pzbDSB9VNm44",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b2738c28d7443694de36c67be905ab67616d0000b273eb5a4a3ad6b9548ce4ca2c03ab67616d0000b273f08d82ff69ae975e6e5f395eab67616d0000b273fc4f17340773c6c3579fea0d",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b2738c28d7443694de36c67be905ab67616d0000b273eb5a4a3ad6b9548ce4ca2c03ab67616d0000b273f08d82ff69ae975e6e5f395eab67616d0000b273fc4f17340773c6c3579fea0d",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b2738c28d7443694de36c67be905ab67616d0000b273eb5a4a3ad6b9548ce4ca2c03ab67616d0000b273f08d82ff69ae975e6e5f395eab67616d0000b273fc4f17340773c6c3579fea0d",
            width: 60,
          },
        ],
        name: "Burn it down ",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MjIsNTNjZTZkZjBjNmM0MDFhN2Q3OTM4MzFlNmUwODdkOTkwNTBhMGZjOA==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/2XEagIHbL1pzbDSB9VNm44/tracks",
          total: 21,
        },
        type: "playlist",
        uri: "spotify:playlist:2XEagIHbL1pzbDSB9VNm44",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/7sL7I6MRGjAxUGLPQlCGx1",
        },
        href: "https://api.spotify.com/v1/playlists/7sL7I6MRGjAxUGLPQlCGx1",
        id: "7sL7I6MRGjAxUGLPQlCGx1",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27318ff558bc3312afde75e782dab67616d0000b2737a644d7658aae9abcafcec6aab67616d0000b2739c4b6a5894b3c82e46fc93c4ab67616d0000b273cea7f5a45ac54e08e4403947",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b27318ff558bc3312afde75e782dab67616d0000b2737a644d7658aae9abcafcec6aab67616d0000b2739c4b6a5894b3c82e46fc93c4ab67616d0000b273cea7f5a45ac54e08e4403947",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b27318ff558bc3312afde75e782dab67616d0000b2737a644d7658aae9abcafcec6aab67616d0000b2739c4b6a5894b3c82e46fc93c4ab67616d0000b273cea7f5a45ac54e08e4403947",
            width: 60,
          },
        ],
        name: "Bones of J.R. Jones songography",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MjMsY2U3OWM2NzZhYjYzZWM5ODIwY2U2MGVlZjYyNjVkNDA5YjVkYjJlZg==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/7sL7I6MRGjAxUGLPQlCGx1/tracks",
          total: 70,
        },
        type: "playlist",
        uri: "spotify:playlist:7sL7I6MRGjAxUGLPQlCGx1",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/1HsHrHEVQsvOfbayeeKllZ",
        },
        href: "https://api.spotify.com/v1/playlists/1HsHrHEVQsvOfbayeeKllZ",
        id: "1HsHrHEVQsvOfbayeeKllZ",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b2730b51f8d91f3a21e8426361aeab67616d0000b273107d182a8d39586f8f3f23a0ab67616d0000b2734f08944b5cb3be8ca14ba705ab67616d0000b2738399047ff71200928f5b6508",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b2730b51f8d91f3a21e8426361aeab67616d0000b273107d182a8d39586f8f3f23a0ab67616d0000b2734f08944b5cb3be8ca14ba705ab67616d0000b2738399047ff71200928f5b6508",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b2730b51f8d91f3a21e8426361aeab67616d0000b273107d182a8d39586f8f3f23a0ab67616d0000b2734f08944b5cb3be8ca14ba705ab67616d0000b2738399047ff71200928f5b6508",
            width: 60,
          },
        ],
        name: "Rock I Like",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MzQxLDBmYmYxMzQ0OTdlMTlkMDRmN2EyMjcwNjU0NzlhNGIzNDBlZmU3Njk=",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/1HsHrHEVQsvOfbayeeKllZ/tracks",
          total: 375,
        },
        type: "playlist",
        uri: "spotify:playlist:1HsHrHEVQsvOfbayeeKllZ",
      },
      {
        collaborative: false,
        description: "Hit the road and scream your heart out!",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdF699XuZIvg",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXdF699XuZIvg",
        id: "37i9dQZF1DXdF699XuZIvg",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f0000000325f2da455b383095aa5a46bd",
            width: null,
          },
        ],
        name: "Highway to Yell",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MTY5NTI5ODcxNywwMDAwMDAwMGZkOWVkMjg5MzBiNDc2YTE2YWUxNWZiNDJjYmUxMDRl",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXdF699XuZIvg/tracks",
          total: 75,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DXdF699XuZIvg",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/75ErJBZ5Y27NAalQnL8wX5",
        },
        href: "https://api.spotify.com/v1/playlists/75ErJBZ5Y27NAalQnL8wX5",
        id: "75ErJBZ5Y27NAalQnL8wX5",
        images: [
          {
            height: null,
            url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb23afe64b980f9e222ac1efe5",
            width: null,
          },
        ],
        name: "Corporation Of Nausea Mix",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id: "Myw1NTg1NjlmMzQwZDAxNDMwOTIyMDlhN2JiNWEwZTRmMTIxYmJlOTA3",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/75ErJBZ5Y27NAalQnL8wX5/tracks",
          total: 14,
        },
        type: "playlist",
        uri: "spotify:playlist:75ErJBZ5Y27NAalQnL8wX5",
      },
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/57uLYqdAtPNrmOEXlv2Xqc",
        },
        href: "https://api.spotify.com/v1/playlists/57uLYqdAtPNrmOEXlv2Xqc",
        id: "57uLYqdAtPNrmOEXlv2Xqc",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27339521e60d8d11783d9f5e3b1ab67616d0000b27356ec3791cef5cbb29e78c36fab67616d0000b273bc032f86301fe5f26eacfe55ab67616d0000b273bf1e8c1488b3f04d5f8e3b25",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b27339521e60d8d11783d9f5e3b1ab67616d0000b27356ec3791cef5cbb29e78c36fab67616d0000b273bc032f86301fe5f26eacfe55ab67616d0000b273bf1e8c1488b3f04d5f8e3b25",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b27339521e60d8d11783d9f5e3b1ab67616d0000b27356ec3791cef5cbb29e78c36fab67616d0000b273bc032f86301fe5f26eacfe55ab67616d0000b273bf1e8c1488b3f04d5f8e3b25",
            width: 60,
          },
        ],
        name: "Curses",
        owner: {
          display_name: "Jason A. Corns",
          external_urls: {
            spotify: "https://open.spotify.com/user/1251433830",
          },
          href: "https://api.spotify.com/v1/users/1251433830",
          id: "1251433830",
          type: "user",
          uri: "spotify:user:1251433830",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MTUsODJmMTA4Y2VkNWJjYjk3MDNlY2ZmNjI4OTEwYjk1YTRiMTQ1Y2VkZQ==",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/57uLYqdAtPNrmOEXlv2Xqc/tracks",
          total: 14,
        },
        type: "playlist",
        uri: "spotify:playlist:57uLYqdAtPNrmOEXlv2Xqc",
      },
      {
        collaborative: false,
        description:
          "Live fast, die awesome! A great mix of the best rockabilly tracks.",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX0xLQsW8b5Zx",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX0xLQsW8b5Zx",
        id: "37i9dQZF1DX0xLQsW8b5Zx",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f00000003c79d85f02b0563cdb602a236",
            width: null,
          },
        ],
        name: "Rockabilly Mania",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MTY5ODQxMDY1OSwwMDAwMDAwMGU4NDVkZGJmOWY5NzFhNmJlNDRiNDEyODk2M2JjNWNl",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX0xLQsW8b5Zx/tracks",
          total: 60,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DX0xLQsW8b5Zx",
      },
      {
        collaborative: false,
        description:
          "A calm and relaxing Christmas piano soundtrack for the Holidays",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbPHTEEyQ6Hv",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXbPHTEEyQ6Hv",
        id: "37i9dQZF1DXbPHTEEyQ6Hv",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f000000036783780cb377fb861f86b170",
            width: null,
          },
        ],
        name: "Christmas Peaceful Piano",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MTcwMjk4NDk5NCwwMDAwMDAwMDI2MjAwM2VhMTdhMWNlNTRjZjVmOGVmZDRmZGQzM2E0",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXbPHTEEyQ6Hv/tracks",
          total: 99,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DXbPHTEEyQ6Hv",
      },
      {
        collaborative: false,
        description:
          "All your favourite Christmas carols sung for you by a vocal ensemble.",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4jxmdWGk453",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX4jxmdWGk453",
        id: "37i9dQZF1DX4jxmdWGk453",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f00000003605da1bd01a2efb08818292c",
            width: null,
          },
        ],
        name: "Christmas Carols",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: true,
        snapshot_id:
          "MTcwMjk4NTM4NCwwMDAwMDAwMGVmZDNiOWVkYTE2YThlZTUyYzA4ZDgwODMwMGMxMzgw",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX4jxmdWGk453/tracks",
          total: 49,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DX4jxmdWGk453",
      },
    ],
    limit: 20,
    next: "https://api.spotify.com/v1/users/1251433830/playlists?offset=20&limit=20",
    offset: 0,
    previous: null,
    total: 22,
  },
};

export default function PlaylistProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>(tempDataPlaylists.playlists.items);
  const [playlistTotal, setPlaylistTotal] = useState(tempDataPlaylists.playlists.total);
  const [limit, setLimit] = useState(20);
  return (
    <PlaylistContext.Provider
      value={{ playlists, playlistTotal, limit }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

export const usePlaylistContext = () => {
  const context = useContext(PlaylistContext);
  if (context === undefined)
    throw new Error("usePlaylistContext must be used inside a provider only");
  return context;
};
