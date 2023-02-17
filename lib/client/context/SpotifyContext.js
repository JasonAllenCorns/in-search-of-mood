import { createContext, useContext, useState } from 'react';

const SpotifyContext = createContext({});

export const SpotifyProvider = ({ children }) => {
  const [batchQueue, setBatchQueue] = useState();
  const [playlists, setPlaylists] = useState([]);
  const [profile, setProfile] = useState({});
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState();
  const [selectedArtist, setSelectedArtist] = useState();

  const handleSetUserProfile = ({ user, userExtended }) => {
    setProfile({ ...user, ...userExtended });
  };
  const handleSelectedArtistOrAlbum = ({ type, item }) => {
    type === 'artist' ? setSelectedArtist(item) : setSelectedAlbum(item);
  };

  return (
    <SpotifyContext.Provider
      value={{
        batchQueue,
        setBatchQueue,
        playlists,
        setPlaylists,
        profile,
        setProfile: handleSetUserProfile,
        query,
        setQuery,
        searchResults,
        setSearchResults,
        selectedAlbum,
        selectedArtist,
        handleSelectedArtistOrAlbum,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotifyContext = () => useContext(SpotifyContext);
