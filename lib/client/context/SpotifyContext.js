import { createContext, useContext, useState } from 'react';

const SpotifyContext = createContext({});

export const SpotifyProvider = ({ children }) => {
  const [batchQueue, setBatchQueue] = useState();
  const [playlists, setPlaylists] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState();
  const [selectedArtist, setSelectedArtist] = useState();

  const setSelectedArtistOrAlbum = (item) => {
    const { type = 'artist' } = item || {};
    type === 'artist' ? setSelectedArtist(item) : setSelectedAlbum(item);
  };

  return (
    <SpotifyContext.Provider
      value={{
        batchQueue,
        setBatchQueue,
        playlists,
        setPlaylists,
        query,
        setQuery,
        searchResults,
        setSearchResults,
        selectedAlbum,
        selectedArtist,
        setSelectedArtistOrAlbum,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotifyContext = () => useContext(SpotifyContext);
