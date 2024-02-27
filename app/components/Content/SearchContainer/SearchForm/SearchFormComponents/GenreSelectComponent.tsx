"use client";

import React, { Key } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import {
  useRecommendationsContext,
  spotifyGenresList,
} from "context/RecommendationsProvider";
import { SpotifyGenres } from "types/types";

const SpotifyGenreSelectComponent: React.FC = () => {
  const { recFormData, saveRecFormData, setUseGenre } =
    useRecommendationsContext() || {};

  const setSelectedGenres = (genres: Key[]) => {
    const selectedGenres: SpotifyGenres = [];
    genres?.map((k) => {
      if (spotifyGenresList.includes(k.toString())) {
        selectedGenres.push(k.toString());
      }
    });
    setUseGenre?.(selectedGenres.length > 0);
    const updatedFormState = { ...recFormData, genres: selectedGenres };
    saveRecFormData?.(updatedFormState);
  };

  return (
    <Select
      label="Genres"
      selectionMode="multiple"
      selectedKeys={recFormData?.genres || []}
      description="Genres of music to focus the recommendations"
      onSelectionChange={(selectedKeys) => {
        setSelectedGenres(Array.from(selectedKeys));
      }}
    >
      {spotifyGenresList.map((genre: string) => (
        <SelectItem
          key={genre}
          value={genre}
        >
          {genre}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SpotifyGenreSelectComponent;
