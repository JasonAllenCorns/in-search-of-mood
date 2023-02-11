import { SearchRounded } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';

export default function FilterView() {
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
              <IconButton aria-label="delete">
                <SearchRounded />
              </IconButton>
            ),
          }}
        />
      </Box>
    </>
  );
}
