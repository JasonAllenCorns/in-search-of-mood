import { SearchRounded } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';
// import styles from '@/components/views/filters/filter/ContentSearch.module.css';

const ContentSearch = ({ handleSearch }) => {
  return (
    <>
      <Box>
        <TextField
          id="base-search-term"
          variant="outlined"
          label="Search for artist or track name"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton aria-label="delete" onClick={handleSearch}>
                <SearchRounded />
              </IconButton>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default ContentSearch;
