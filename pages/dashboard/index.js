import ArtistDetail from '@/components/views/details/ArtistDetail/ArtistDetail';
import ContentSearch from '@/components/views/filters/search/ContentSearch';
import SearchedContent from '@/components/views/filters/searched/SearchedContent';
import { mockSearchedContentProps } from '@/components/views/filters/searched/SearchedContent.mock';
import { useSpotifyContext } from '@/lib/client/context/SpotifyContext';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function UserHome() {
  const {
    searchResults,
    setSearchResults,
    selectedArtistOrAlbum,
    setSelectedArtistOrAlbum,
  } = useSpotifyContext();

  const [highlightedItemKey, setHighlightedItemKey] = useState();
  const [selectedViewState, setSelectedViewState] = useState();
  const handleSearch = () => {
    setSearchResults(mockSearchedContentProps.base.artistSearchResults);
    handleItemSelect(null);
    return true;
  };
  const handleItemSelect = (itemId) => {
    if (itemId === highlightedItemKey) {
      return setHighlightedItemKey(null);
    }
    return setHighlightedItemKey(itemId);
  };

  const handleSelectedArtistOrAlbum = (itm) => {
    const assignedScreenViewFromItemType = {
      artist: 'artistDetail',
      album: 'albumDetail',
      trackList: null,
    };
    handleItemSelect(itm?.id || null);
    setSelectedArtistOrAlbum(itm);
    setSelectedViewState(assignedScreenViewFromItemType[itm?.type || null]);
  };

  return (
    <>
      {/* TODO: should Index get data and pass it? Should we have a provider? */}
      <MainContent
        handleSearch={handleSearch}
        searchResults={searchResults}
        selectedContentType={selectedViewState}
        selectedArtistOrAlbum={selectedArtistOrAlbum}
        handleSelectedArtistOrAlbum={handleSelectedArtistOrAlbum}
        highlightedItemKey={highlightedItemKey}
      />
    </>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps = async () => {
  const userExtended = {
    userTotalPlaylists: 44,
  };
  return {
    props: {
      userExtended,
    },
  };
};

const MainContent = (context) => {
  const {
    selectedContentType,
    handleSearch,
    searchResults,
    handleSelectedArtistOrAlbum,
    highlightedItemKey,
  } = context;
  switch (selectedContentType) {
    case 'artistDetail':
      return <ArtistDetail artist={context?.selectedArtistOrAlbum} />;
    case 'albumDetail':
      return <h2>Album details</h2>;
    default:
      return (
        <>
          <ContentSearch handleSearch={handleSearch} />
          <Box mt={2}>
            <SearchedContent
              searchResults={searchResults}
              handleSelectedArtistOrAlbum={handleSelectedArtistOrAlbum}
              highlightedItemKey={highlightedItemKey}
            />
          </Box>
        </>
      );
  }
};
