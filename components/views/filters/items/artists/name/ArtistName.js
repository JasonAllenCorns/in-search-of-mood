import { Box, Typography } from '@mui/material';
// import styles from './ArtistName.module.css';

const ArtistName = ({ name = 'Unknown Artist', type = 'artist' }) => {
  return (
    <>
      <Typography
        m={2}
        sx={{
          whiteSpace: 'nowrap',
          maxWidth: '165px',
          textOverflow: 'ellipsis',
          overflowX: 'hidden',
        }}
      >
        {name}
      </Typography>
      <Box pb={2} px={2}>
        <Typography
          sx={{
            typography: 'subtitle2',
            fontWeight: 'light',
          }}
        >
          ({type})
        </Typography>
      </Box>
    </>
  );
};

export default ArtistName;
