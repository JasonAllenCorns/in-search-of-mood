import ArtistDetail from '@/components/views/details/ArtistDetail/ArtistDetail';
import { useSpotifyContext } from '@/lib/client/context/SpotifyContext';
import { TaskAltRounded } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ArtistPage() {
  const router = useRouter();
  const { selectedArtist, setSelectedArtistOrAlbum } = useSpotifyContext();
  // TODO: if relaod then cache is lost.
  //       push to local storage? re-fetch?
  const handleExitArtistDetail = (e) => {
    e.preventDefault();
    setSelectedArtistOrAlbum(null);
    router.push('/dashboard');
  };
  return (
    <>
      <Grid item xs={12}>
        <Link size="large" href={'/dasboard'} onClick={handleExitArtistDetail}>
          <Button size="large" endIcon={<TaskAltRounded />}>
            Finished with this artist
          </Button>
        </Link>
      </Grid>
      <ArtistDetail artist={selectedArtist} />
    </>
  );
}
