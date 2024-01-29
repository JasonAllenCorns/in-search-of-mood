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

const RecommendationsContext = createContext<RecommendationsFormContext | null>(null);

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
    genres: SpotifyGenres,
    tempo: SpotifyTrackTempo
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
        saveRecFormState
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
} // Provider def

export const useRecommendationsContext = () =>
  useContext(RecommendationsContext);
