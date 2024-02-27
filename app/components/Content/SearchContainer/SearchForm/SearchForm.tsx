"use client";
import { Button } from "@nextui-org/react";
import SearchFilterPanel from "./SearchFilterPanel";

import {
  useRecommendationsContext,
} from "@/context/RecommendationsProvider";
import { useMemo } from "react";

export default function SearchForm() {
  const { recFormData, useArtist, useEnergy, useGenre, useTempo, useTrack } = useRecommendationsContext() || {};
  const buttonClickHandler : ()=>void = () => {
    // console.log('(jason.corns) --------------------------------------- start group: useRecommendationsContext.recFormData');
    // console.log('(jason.corns) logged details from ~/Sites/in-search-of-mood/app/components/Content/SearchContainer/SearchForm/SearchForm.tsx');
    // console.log("(jason.corns) useRecommendationsContext.recFormData", recFormData);
    // console.log('(jason.corns) ----------------------------------------- end group: useRecommendationsContext.recFormData');
  }
  const stateClickHandler : ()=>void = () => {

    // console.log('(jason.corns) --------------------------------------- start group: useRecommendationsContext.recFormData');
    // console.log('(jason.corns) logged details from ~/Sites/in-search-of-mood/app/components/Content/SearchContainer/SearchForm/SearchForm.tsx');
    // console.log("(jason.corns) useArtist", useArtist);
    // console.log("(jason.corns) useEnergy", useEnergy);
    // console.log("(jason.corns) useGenre", useGenre);
    // console.log("(jason.corns) useTempo", useTempo);
    // console.log("(jason.corns) useTrack", useTrack);
    // console.log('(jason.corns) ----------------------------------------- end group: useRecommendationsContext.recFormData');
  }
  const isDisabled = useMemo<boolean | undefined>(() => {
    /**
     * per API requirements at https://developer.spotify.com/documentation/web-api/reference/get-recommendations,
     * Recommendations endpoint needs one of Seed Artist(s), Seed Genre(s), or Seed Track(s)
     * Form state should not be submittable unless one of these values is present in Provider state.
     */
    return !(useArtist || useGenre || useTrack);
  }, [useArtist, useGenre, useTrack]);
  return (
    <section
      className="my-6 block w-full"
    >
      <div className="p-3">
        <SearchFilterPanel />
      </div>
      <div className="px-4 text-left">
        <Button
          isDisabled={false}
          onClick={stateClickHandler}>
          Check State
          </Button>
      </div>
      <div className="px-4 text-right">
        <Button
          isDisabled={isDisabled}
          onClick={buttonClickHandler}
        >Let's go!</Button>
      </div>
    </section>
  );
}
