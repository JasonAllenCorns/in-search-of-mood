import { DefaultSession, type Profile, User } from "next-auth";

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

export interface SpotifySession extends Omit<DefaultSession, "user"> {
  user?: SpotifyUser;
  expires: string;
}
