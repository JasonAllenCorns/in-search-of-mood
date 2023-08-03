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
  const { children, artist = {} } = props;
  const artistImage = artist?.images?.[0]?.url;
  const artitstAltTitle = `Cover art image provided by Spotify for ${
    artist?.name || 'this artist'
  }`;
  const { setSelectedArtistOrAlbum } = useSpotifyContext();
  const handleSetSelectedArtistOrAlbum = (e, itm) => {
    e.preventDefault();
    setSelectedArtistOrAlbum(itm);
    router.push(
      `/dashboard/artist/${itm?.id || '1'}/${slugify(itm?.name || 'missing')}`
    );
  };
  return (
    <Card>
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
