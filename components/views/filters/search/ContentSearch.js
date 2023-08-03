import { useSpotifyContext } from '@/lib/client/context/SpotifyContext';
import { SearchRounded } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';
import { useState } from 'react';
// import styles from '@/components/views/filters/filter/ContentSearch.module.css';

const ContentSearch = () => {
  const { getSearchQuery, setSearchQuery } = useSpotifyContext();

  const [localSearchTerm, setLocalSearchTerm] = useState(getSearchQuery());
  // localSearchTerm should be a globally available value for use across multiple components.

  const handleOnChange = (evt) => {
    setLocalSearchTerm(evt.target.value?.trim?.());
  };
  const handleCommitLocalSearchTerm = () => {
    setSearchQuery(localSearchTerm);
  };
  // setter function here should set the term value in the context
  return (
    <>
      <Box>
        <div>
          <TextField
            id="base-search-term"
            variant="outlined"
            label="Search for artist or track name"
            onChange={handleOnChange}
            value={localSearchTerm}
            //value={localSearchTerm}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="delete"
                  onClick={handleCommitLocalSearchTerm}
                >
                  <SearchRounded />
                </IconButton>
              ),
            }}
          />
        </div>
      </Box>
    </>
  );
};

export default ContentSearch;
