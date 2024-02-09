"use client";

import {
  useRecommendationsContext,
  spotifyGenresList,
} from "context/RecommendationsProvider";
import { Select, SelectItem, select } from "@nextui-org/react";
import { SpotifyGenres } from "types/types";

export default function SpotifyGenreSelectComponent() {
  const { recFormState, saveRecFormState } = useRecommendationsContext() || {};
  const selectedGenres = recFormState?.genres || [];
  const setSelectedGenres: (keys: any) => void = (keys) => {
console.log('(jason.corns) --------------------------------------- start group: keys or something');
console.log('(jason.corns) logged details from ~/Sites/in-search-of-mood/app/components/Content/SearchContainer/SearchForm/SearchFormComponents/GenreSelectComponent.tsx');
console.log("(jason.corns) keys", keys);
console.log('(jason.corns) ----------------------------------------- end group: keys or something');
    // const genres = spotifyGenresList.filter((g) => {
    //   keys && keys.has && keys.has(String(g.id))
    // });
    let genres: SpotifyGenres = Array.from(keys || []);
    const cRecFormState = { ...recFormState };
    cRecFormState.genres = genres;
    saveRecFormState && saveRecFormState(cRecFormState);
  };
  return (
    <Select
      label="Genres"
      selectionMode="multiple"
      selectedKeys={recFormState?.genres || []}
      description="Genres of music to focus the recommendations"
      onSelectionChange={(keys) => {
        setSelectedGenres(keys);
      }}
    >
      {
        spotifyGenresList.map((genre) => (
          <SelectItem key={genre} value={genre}>
            {genre}
          </SelectItem>
        ))
      }
    </Select>
  );
}
