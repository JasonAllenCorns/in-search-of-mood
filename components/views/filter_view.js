import { SearchRounded } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

export default function FilterView(props) {
  const { children } = props;
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
              )
            }}
          />
        {/* <TextField>
          <InputBase></InputBase>
        </TextField> */}
      </Box>
    </>
  );
}
