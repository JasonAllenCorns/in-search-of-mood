import TopBar from '@/components/bars/top/TopBar';
import ContentSearch from '@/components/views/filters/search/ContentSearch';
import SearchedContent from '@/components/views/filters/searched/SearchedContent';
import { mockSearchedContentProps } from '@/components/views/filters/searched/SearchedContent.mock';
import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export default function UserHome({ userTotalPlaylists = 0 }) {
  const [searchResults, setSearchResults] = useState([]);
  const [highlightedItemKey, setHighlightedItemKey] = useState();
  const handleSignout = () => {
    return signOut();
  };
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

  const { data: session } = useSession();

  return (
    <>
      {/* TODO: should Index get data and pass it? Should we have a provider? */}
      <TopBar handleSignout={handleSignout} user={session?.user || {}} userTotalPlaylists={userTotalPlaylists} />
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={7}>
          <Box mt={2} px={2}>
            <ContentSearch handleSearch={handleSearch} />
            <Box mt={2}>
              <SearchedContent searchResults={searchResults} handleItemSelect={handleItemSelect} highlightedItemKey={highlightedItemKey} />
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={3}>
          <h2>add to group</h2>
        </Grid2>
        <Grid2 xs={12} md={2}>
          <h2>add group to playlist</h2>
        </Grid2>
      </Grid2>
    </>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps = async () => {
  const userTotalPlaylists = 17;
  return {
    props: {
      userTotalPlaylists,
    },
  };
};
