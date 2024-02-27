"use client";
import React, { createContext, useContext, useState } from "react";
import {
  RecommendationFormProvider,
  RecommendationsFormContext,
  SpotifyGenres,
} from "types/types";

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
  const [recFormData, setRecFormData] = useState<RecommendationFormProvider>(
    {}
  );
  const [useArtist, setUseArtist] = useState(false);
  const [useEnergy, setUseEnergy] = useState(false);
  const [useGenre, setUseGenre] = useState(false);
  const [useTempo, setUseTempo] = useState(false);
  const [useTrack, setUseTrack] = useState(false);

  // const getSelectedGenres: GetSelectedGenres = () => { return (recFormData.genres || []); }
  const saveRecFormData = ({
    genres,
    tempo,
    energy,
  }: {
    genres: SpotifyGenres;
    tempo: string | boolean;
    energy: number;
  }) => {
    const updatedState = { ...recFormData };
    if (genres && Array.isArray(genres)) {
      updatedState.genres = genres.filter((genre) =>
        spotifyGenresList.includes(genre)
      );
    }
    if (typeof tempo === "string") {
      updatedState.tempo = tempo;
    } else if (typeof tempo === "boolean") {
      delete updatedState.tempo;
    } // anything else, then don't touch it

    if (energy && parseFloat(energy.toString())) {
      updatedState.energy = Math.min(
        Math.max(0, parseFloat(energy.toString())),
        1
      );
    }
    setRecFormData(updatedState); // TODO: reacthooks / useEffect to update local storage
  };

  // const setSelectedGenres: SetSelectedGenres = (genres: SpotifyGenres) => {
  //   const stateSafeGenreItem = genres; // TODO: clean arg values?
  //   saveRecFormData({ key: "genres", inputVal: stateSafeGenreItem });
  // };

  return (
    <RecommendationsContext.Provider
      value={{
        recFormData,
        saveRecFormData,
        useArtist,
        useEnergy,
        useGenre,
        useTempo,
        useTrack,
        setUseArtist,
        setUseEnergy,
        setUseGenre,
        setUseTempo,
        setUseTrack,
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
} // Provider def

export const useRecommendationsContext = () => {
  const context = useContext(RecommendationsContext);
  if (context === undefined)
    throw new Error(
      "useRecommendationsContext must be used inside a provider only"
    );
  return context;
};
