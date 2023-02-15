import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
//import styles from '@components/views/filters/items/artists/ArtistItem.module.css';

const ArtistItem = ({ children, artist = {}, isHighlighted = false, isDimmed = false, handleItemSelect }) => {
  const artistImage = artist?.images[1]?.url;
  const artitstAltTitle = `Cover art image provided by Spotify for ${artist?.name || 'this artist'}`;
  return (
    <Card
      raised={isHighlighted}
      sx={{
        transition: 'opacity 183ms ease-out, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        opacity: isDimmed ? 0.4 : 1,
      }}
    >
      <CardActionArea onClick={handleItemSelect}>
        <CardMedia component="img" height="209" image={artistImage} alt={artitstAltTitle} />
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              whiteSpace: 'nowrap',
              maxWidth: '165px',
              textOverflow: 'ellipsis',
              overflowX: 'hidden',
            }}
          >
            {artist?.name}
          </Typography>
          <Typography
            sx={{
              typography: 'subtitle2',
              fontWeight: 'light',
            }}
          >
            ({artist?.type})
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArtistItem;
