import { useSpotifyContext } from '@/lib/client/context/SpotifyContext';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
//import styles from '@components/views/filters/items/artists/ArtistItem.module.css';

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const ArtistItem = (props) => {
  const router = useRouter();
  const {
    children,
    artist = {},
    isHighlighted = false,
    isDimmed = false,
  } = props;
  const artistImage = artist?.images?.[0]?.url;
  const artitstAltTitle = `Cover art image provided by Spotify for ${
    artist?.name || 'this artist'
  }`;
  const { setSelectedArtistOrAlbum } = useSpotifyContext();
  const handleSetSelectedArtistOrAlbum = (e, itm) => {
    e.preventDefault();
    console.log(itm);
    setSelectedArtistOrAlbum(itm);
    router.push(
      `/dashboard/artist/${itm?.id || '1'}/${slugify(itm?.name || 'missing')}`
    );
  };
  return (
    <Card
      raised={isHighlighted}
      sx={{
        transition:
          'opacity 183ms ease-out, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        opacity: isDimmed ? 0.4 : 1,
      }}
    >
      <CardActionArea
        onClick={(e) => {
          handleSetSelectedArtistOrAlbum(e, artist);
        }}
        href={`/dashboard/artist/${artist?.id || '1'}/${slugify(
          artist?.name || 'missing'
        )}`}
      >
        <CardMedia
          component="img"
          height="209"
          image={artistImage}
          alt={artitstAltTitle}
        />
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
