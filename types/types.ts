import { Session, type Profile, User } from "next-auth";
import { JWT } from 'next-auth/jwt';

export type SpotifyProfile = Profile & {
  uri?: string,
  href?: string,
  external_urls?: {
    spotify?: string
  }
}
export interface SpotifyUser extends User {
  uri?: string,
  href?: string,
  spotifyProfileUrl?: string
}

export type SessionToken = JWT & {
  accessToken?: string,
  accessTokenExpiresAt?: string | number,
  refreshToken?: string,
  uri?: string,
  href?: string,
  spotifyProfileUrl?: string,
}

export interface SpotifySession extends Session {
  token?: SessionToken;
  expires: string;
}

export type SpotifyAccessTokenResponse = {
  "error"?: any,
  "success"?: any,
  "access_token": string,
  "token_type": "Bearer" | "Basic",
  "expires_in": number,
  "scope": string
}

export type SpotifyPlaylist = {
  "id": string,
  "collaborative": boolean,
  "description": string,
  "href": string,
  "name": string,
  "public": boolean,
  "snapshot_id": string,
  "type": string,
  "uri": string,
  //========= //
  // controls // 
  //========= //
  "limit"?: string, // default 20. max 50 //
  "next"?: string,
  "offset"?: number, // default 0. steps by limit. //
  "previous"?: string,
  //========= //
  // extended //
  //========= //
  "external_urls": {
    "spotify": string
  },
  "images":
  {
    "url": string,
    "height": number,
    "width": number
  }[],
  "owner": {
    "external_urls": {
      "spotify": string
    },
    "followers": {
      "href": string,
      "total": number
    },
    "href": string,
    "id": string,
    "type": "user" | undefined | null,
    "uri": string,
    "display_name": string
  },
  "tracks": {
    "href": string,
    "total": 0
  },
}