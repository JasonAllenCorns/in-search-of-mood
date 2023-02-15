import { Box } from '@mui/material';

export default function FilterableViewContainer({ children }) {
  return (
    <>
      <Box component={'form'} autoComplete="false" autoCapitalize="false">
        {children}
      </Box>
    </>
  );
}
