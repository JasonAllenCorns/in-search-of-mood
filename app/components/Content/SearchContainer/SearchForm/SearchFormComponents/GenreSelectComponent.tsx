"use client";

import { useRecommendationsContext } from "context/RecommendationsProvider";
import Select from "react-dropdown-select";
import { SpotifyGenres } from "types/types";

export default function SpotifyGenreSelectComponent() {
  const { recFormState, saveRecFormState } = useRecommendationsContext() || {};
  const selectedGenres = recFormState?.genres || [];
  const setSelectedGenres: (genres: SpotifyGenres) => void = (genres) => {
    const cRecFormState = { ...recFormState };
    cRecFormState.genres = genres;
    saveRecFormState && saveRecFormState(cRecFormState);
  };
  const spotifySpotifyGenresList = [
    { id: 1, value: "acoustic" },
    { id: 2, value: "afrobeat" },
    { id: 3, value: "alt-rock" },
    { id: 4, value: "alternative" },
    { id: 5, value: "ambient" },
    { id: 6, value: "anime" },
    { id: 7, value: "black-metal" },
    { id: 8, value: "bluegrass" },
    { id: 9, value: "blues" },
    { id: 10, value: "bossanova" },
    { id: 11, value: "brazil" },
    { id: 12, value: "breakbeat" },
    { id: 13, value: "british" },
    { id: 14, value: "cantopop" },
    { id: 15, value: "chicago-house" },
    { id: 16, value: "children" },
    { id: 17, value: "chill" },
    { id: 18, value: "classical" },
    { id: 19, value: "club" },
    { id: 20, value: "comedy" },
    { id: 21, value: "country" },
    { id: 22, value: "dance" },
    { id: 23, value: "dancehall" },
    { id: 24, value: "death-metal" },
    { id: 25, value: "deep-house" },
    { id: 26, value: "detroit-techno" },
    { id: 27, value: "disco" },
    { id: 28, value: "disney" },
    { id: 29, value: "drum-and-bass" },
    { id: 30, value: "dub" },
    { id: 31, value: "dubstep" },
    { id: 32, value: "edm" },
    { id: 33, value: "electro" },
    { id: 34, value: "electronic" },
    { id: 35, value: "emo" },
    { id: 36, value: "folk" },
    { id: 37, value: "forro" },
    { id: 38, value: "french" },
    { id: 39, value: "funk" },
    { id: 40, value: "garage" },
    { id: 41, value: "german" },
    { id: 42, value: "gospel" },
    { id: 43, value: "goth" },
    { id: 44, value: "grindcore" },
    { id: 45, value: "groove" },
    { id: 46, value: "grunge" },
    { id: 47, value: "guitar" },
    { id: 48, value: "happy" },
    { id: 49, value: "hard-rock" },
    { id: 50, value: "hardcore" },
    { id: 51, value: "hardstyle" },
    { id: 52, value: "heavy-metal" },
    { id: 53, value: "hip-hop" },
    { id: 54, value: "holidays" },
    { id: 55, value: "honky-tonk" },
    { id: 56, value: "house" },
    { id: 57, value: "idm" },
    { id: 58, value: "indian" },
    { id: 59, value: "indie" },
    { id: 60, value: "indie-pop" },
    { id: 61, value: "industrial" },
    { id: 62, value: "iranian" },
    { id: 63, value: "j-dance" },
    { id: 64, value: "j-idol" },
    { id: 65, value: "j-pop" },
    { id: 66, value: "j-rock" },
    { id: 67, value: "jazz" },
    { id: 68, value: "k-pop" },
    { id: 69, value: "kids" },
    { id: 70, value: "latin" },
    { id: 71, value: "latino" },
    { id: 72, value: "malay" },
    { id: 73, value: "mandopop" },
    { id: 74, value: "metal" },
    { id: 75, value: "metal-misc" },
    { id: 76, value: "metalcore" },
    { id: 77, value: "minimal-techno" },
    { id: 78, value: "movies" },
    { id: 79, value: "mpb" },
    { id: 80, value: "new-age" },
    { id: 81, value: "new-release" },
    { id: 82, value: "opera" },
    { id: 83, value: "pagode" },
    { id: 84, value: "party" },
    { id: 85, value: "philippines-opm" },
    { id: 86, value: "piano" },
    { id: 87, value: "pop" },
    { id: 88, value: "pop-film" },
    { id: 89, value: "post-dubstep" },
    { id: 90, value: "power-pop" },
    { id: 91, value: "progressive-house" },
    { id: 92, value: "psych-rock" },
    { id: 93, value: "punk" },
    { id: 94, value: "punk-rock" },
    { id: 95, value: "r-n-b" },
    { id: 96, value: "rainy-day" },
    { id: 97, value: "reggae" },
    { id: 98, value: "reggaeton" },
    { id: 99, value: "road-trip" },
    { id: 100, value: "rock" },
    { id: 101, value: "rock-n-roll" },
    { id: 102, value: "rockabilly" },
    { id: 103, value: "romance" },
    { id: 104, value: "sad" },
    { id: 105, value: "salsa" },
    { id: 106, value: "samba" },
    { id: 107, value: "sertanejo" },
    { id: 108, value: "show-tunes" },
    { id: 109, value: "singer-songwriter" },
    { id: 110, value: "ska" },
    { id: 111, value: "sleep" },
    { id: 112, value: "songwriter" },
    { id: 113, value: "soul" },
    { id: 114, value: "soundtracks" },
    { id: 115, value: "spanish" },
    { id: 116, value: "study" },
    { id: 117, value: "summer" },
    { id: 118, value: "swedish" },
    { id: 119, value: "synth-pop" },
    { id: 120, value: "tango" },
    { id: 121, value: "techno" },
    { id: 122, value: "trance" },
    { id: 123, value: "trip-hop" },
    { id: 124, value: "turkish" },
    { id: 125, value: "work-out" },
    { id: 126, value: "world-music" },
  ];
  return (
    <Select
      multi
      clearable
      options={spotifySpotifyGenresList}
      values={selectedGenres}
      onChange={(selectedValue: SpotifyGenres) => {
        setSelectedGenres(selectedValue);
      }}
      labelField="value"
      valueField="value"
      searchBy="value"
      style={{
        background: "#333",
        border: "#333 !important",
        color: "#fff",
      }}
    />
  );
}
