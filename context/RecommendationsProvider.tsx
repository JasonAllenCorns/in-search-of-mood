"use client";
import React, { createContext, useContext, useState } from "react";
import {
  GetSelectedGenres,
  RecommendationFormState,
  RecommendationsFormContext,
  SetSelectedGenres,
  SpotifyGenres,
  SpotifyTrackTempo,
} from "types/types";

const saveToLocalStorage = ({
  currentState,
}: {
  currentState: RecommendationFormState;
}) => {
  try {
    if (window && window.localStorage && window.localStorage.setItem) {
      // TODO: this instance represents the third such identical check. Time for an abstract handler
      window.localStorage.setItem(
        "searchQuery",
        JSON.stringify({ ...currentState })
      );
    }
  } catch (e) {
    console.error(
      "Error persisting search state to local storage. Convenience form hydration will be lost.",
      e?.message
    );
  }
};

export const spotifyGenresList: SpotifyGenres = [
  "acoustic",
  "afrobeat",
  "alt-rock",
  "alternative",
  "ambient",
  "anime",
  "black-metal",
  "bluegrass",
  "blues",
  "bossanova",
  "brazil",
  "breakbeat",
  "british",
  "cantopop",
  "chicago-house",
  "children",
  "chill",
  "classical",
  "club",
  "comedy",
  "country",
  "dance",
  "dancehall",
  "death-metal",
  "deep-house",
  "detroit-techno",
  "disco",
  "disney",
  "drum-and-bass",
  "dub",
  "dubstep",
  "edm",
  "electro",
  "electronic",
  "emo",
  "folk",
  "forro",
  "french",
  "funk",
  "garage",
  "german",
  "gospel",
  "goth",
  "grindcore",
  "groove",
  "grunge",
  "guitar",
  "happy",
  "hard-rock",
  "hardcore",
  "hardstyle",
  "heavy-metal",
  "hip-hop",
  "holidays",
  "honky-tonk",
  "house",
  "idm",
  "indian",
  "indie",
  "indie-pop",
  "industrial",
  "iranian",
  "j-dance",
  "j-idol",
  "j-pop",
  "j-rock",
  "jazz",
  "k-pop",
  "kids",
  "latin",
  "latino",
  "malay",
  "mandopop",
  "metal",
  "metal-misc",
  "metalcore",
  "minimal-techno",
  "movies",
  "mpb",
  "new-age",
  "new-release",
  "opera",
  "pagode",
  "party",
  "philippines-opm",
  "piano",
  "pop",
  "pop-film",
  "post-dubstep",
  "power-pop",
  "progressive-house",
  "psych-rock",
  "punk",
  "punk-rock",
  "r-n-b",
  "rainy-day",
  "reggae",
  "reggaeton",
  "road-trip",
  "rock",
  "rock-n-roll",
  "rockabilly",
  "romance",
  "sad",
  "salsa",
  "samba",
  "sertanejo",
  "show-tunes",
  "singer-songwriter",
  "ska",
  "sleep",
  "songwriter",
  "soul",
  "soundtracks",
  "spanish",
  "study",
  "summer",
  "swedish",
  "synth-pop",
  "tango",
  "techno",
  "trance",
  "trip-hop",
  "turkish",
  "work-out",
  "world-music",
];

const RecommendationsContext = createContext<RecommendationsFormContext | null>(
  null
);

export default function RecommendationsProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [recFormState, setRecFormState] = useState<RecommendationFormState>({});

  // const getSelectedGenres: GetSelectedGenres = () => { return (recFormState.genres || []); }
  const saveRecFormState = ({
    genres,
    tempo,
  }: {
    genres: SpotifyGenres;
    tempo: SpotifyTrackTempo;
  }) => {
    const updatedState = { ...recFormState };
    if (genres && Array.isArray(genres)) {
      updatedState.genres = genres;
    }
    if (tempo && typeof tempo === "number" && tempo >= 0 && tempo <= 1) {
      updatedState.tempo = tempo;
    }
    setRecFormState(updatedState); // TODO: react hooks / useEffect to update local storage
  };

  // const setSelectedGenres: SetSelectedGenres = (genres: SpotifyGenres) => {
  //   const stateSafeGenreItem = genres; // TODO: clean arg values?
  //   saveRecFormState({ key: "genres", inputVal: stateSafeGenreItem });
  // };

  return (
    <RecommendationsContext.Provider
      value={{
        recFormState,
        saveRecFormState,
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
} // Provider def

export const useRecommendationsContext = () =>
  useContext(RecommendationsContext);
