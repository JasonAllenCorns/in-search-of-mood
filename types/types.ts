import { Session, type Profile, User } from 'next-auth';
export type SpotifyProfile = Profile & {
  external_urls?: {
    spotify?: string
  },
  "name"?: string,
  picture?: string,
  href?: string,
  sub?: string,
  uri?: string,
  spotifyProfileUrl?: string,
}

export type SpotifySessionAuthUser = User & {
  access_token ?: string;
  refresh_token?: string;
  expires_at?: string | number;
}

export interface SpotifySession extends Session {
  user: SpotifySessionAuthUser;
  expires: string;
}

export type SpotifyAccessTokenResponse = {
  error?: any,
  success?: any,
  access_token: string,
  token_type: "Bearer" | "Basic",
  expires_in: number,
  scope: string
}

export type SpotifyPlaylist = {
  id: string,
  collaborative?: boolean,
  description?: string,
  href?: string,
  "name"?: string,
  public?: boolean,
  snapshot_id?: string,
  type?: string,
  uri?: string,
  //========= //
  // controls // 
  //========= //
  limit?: string, // default 20. max 50 //
  next?: string,
  offset?: number, // default 0. steps by limit. //
  previous?: string,
  //========= //
  // extended //
  //========= //
  primary_color?: string | null,
  external_urls?: {
    spotify?: string
  },
  images?:
  {
    url?: string,
    height?: number | null,
    width?: number | null,
  }[],
  owner?: {
    external_urls?: {
      spotify?: string
    },
    followers?: {
      href?: string,
      total?: number
    },
    href?: string,
    id?: string,
    type?: "user" | undefined | null,
    uri?: string,
    display_name?: string
  },
  tracks?: {
    href?: string,
    total?: number
  },
}


export type SpotifyGetPlaylists = {
  href: string;
  items: [] | SpotifyPlaylist[];
  limit?: number | string | null;
  next?: string | number | null;
  offset?: string | number | null;
  previous?: string | number | null;
  total?: string | number | null;
};


export type SpotifyGenres = string[];
export type SetSelectedGenres = (arg0: SpotifyGenres | []) => void;


export interface RecommendationFormProvider {
  genres?: SpotifyGenres | never[];
  tempo?: string;
  energy?: number;
  useArtist?: boolean;
  useEnergy?: boolean;
  useGenre?: boolean;
  useTempo?: boolean;
  useTrack?: boolean;
}

export type RecommendationsFormContext = {
  useArtist?: boolean;
  useEnergy?: boolean;
  useGenre?: boolean;
  useTempo?: boolean;
  useTrack?: boolean;
  setUseArtist: (arg0: boolean) => void;
  setUseEnergy: (arg0: boolean) => void;
  setUseGenre: (arg0: boolean) => void;
  setUseTempo: (arg0: boolean) => void;
  setUseTrack: (arg0: boolean) => void;
  recFormData: RecommendationFormProvider;
  saveRecFormData: (recommendationsForm: RecommendationFormProvider | {}) => void;
}

export interface UserPlaylistProvider {
  playlists: SpotifyPlaylist[] | never[];
}

export type UserPlaylistContext = {
  playlists: SpotifyPlaylist[];
  playlistTotal: number;
  limit: number;
}