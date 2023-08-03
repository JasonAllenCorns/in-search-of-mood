import { createContext, useContext, useEffect, useState } from 'react';

import { mockSearchedContentProps } from '@/components/views/filters/searched/SearchedContent.mock';

const SpotifyContext = createContext({});

const stringCleaner = (val) => {
  try {
    return encodeURIComponent(val); // TODO: this is a cheap handler for controlled values. Replace with a string-safe input cleanser
  } catch (e) {
    console.log(e);
  }
  return 'could not encode the string. type it again.';
};

export const SpotifyProvider = ({ children }) => {
  const [batchQueue, setBatchQueue] = useState();
  const [playlists, setPlaylists] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState();
  const [selectedArtist, setSelectedArtist] = useState();

  const setStoreSearchResults = (searchResults = []) => {
    if (window && window.localStorage && window.localStorage.setItem) {
      window.localStorage.setItem(
        'searchResults',
        JSON.stringify(searchResults)
      );
    }
    setSearchResults(searchResults);
  };
  const setSelectedArtistOrAlbum = (item) => {
    const { type = 'artist' } = item || {};
    const varKeyHash = {
      artist: 'selectedArtist',
      album: 'selectedAlbum',
    };
    if (window && window.localStorage && window.localStorage.setItem) {
      window.localStorage.setItem(varKeyHash[type], JSON.stringify(item));
    }
    type === 'artist' ? setSelectedArtist(item) : setSelectedAlbum(item);
  };
  const setInputSearchQuery = (item) => {
    const cleansedItem =
      typeof item === 'string' || typeof item === 'number'
        ? item?.trim?.()
        : null;
    if (window && window.localStorage && window.localStorage.setItem) {
      // TODO: this instance represents the third such identical check. Time for an abstract handler
      window.localStorage.setItem('searchQuery', stringCleaner(cleansedItem));
    }

    setSearchQuery(cleansedItem);
  };
  const getSearchQuery = () => {
    try {
      return (searchQuery || '') && decodeURIComponent(searchQuery);
    } catch (e) {
      console.log(e);
    }
    return searchQuery;
  };
  const getSelectedAlbum = () => {
    return selectedAlbum;
  };
  const getSearchResults = () => {
    return searchResults?.length ? searchResults : [];
  };
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.localStorage &&
      window.localStorage.getItem
    ) {
      if (!selectedArtist) {
        try {
          const artistLocalDetails = localStorage.getItem('selectedArtist');
          setSelectedArtist(JSON.parse(artistLocalDetails));
        } catch (e) {
          console.log(e);
        }
      }
      if (!searchQuery) {
        // de-nullify values here to save string-checking in downstream components
        try {
          const lastLocalSearchQuery = localStorage.getItem('searchQuery');
          setSearchQuery(lastLocalSearchQuery);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [selectedArtist, searchQuery]);

  useEffect(() => {
    // TODO: need to _get_ search results based on search term

    if (searchQuery) {
      const { artistSearchResults } = mockSearchedContentProps.base;
      const matchingResults = artistSearchResults.filter((artist) =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(matchingResults);
    } else {
      setSearchResults(null);
    }
  }, [searchQuery]);

  // const getSelectedArtistOrAlbum = () => {};
  // const batchValue = useMemo(() => {
  //   return [batchQueue, setBatchQueue];
  // }, [batchQueue]);
  //   const contextValue = useMemo(() => {
  //     return [appState, setAppState];
  //  }, [appState, setAppState]);

  return (
    <SpotifyContext.Provider
      value={{
        batchQueue,
        setBatchQueue,
        playlists,
        setPlaylists,
        getSearchQuery,
        setSearchQuery: setInputSearchQuery,
        getSearchResults,
        setSearchResults: setStoreSearchResults,
        getSelectedAlbum,
        selectedArtist,
        setSelectedArtistOrAlbum,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotifyContext = () => useContext(SpotifyContext);
