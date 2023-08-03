import ArtistDetail from '@/components/views/details/ArtistDetail/ArtistDetail';
import { useSpotifyContext } from '@/lib/client/context/SpotifyContext';
import { TaskAltRounded } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';

export default function ArtistPage() {
  const { selectedArtist } = useSpotifyContext();
  if (selectedArtist) {
    return (
      <>
        <Grid item xs={12}>
          <Link size="large" href={'/dashboard'}>
            <Button size="large" endIcon={<TaskAltRounded />}>
              Finished with this artist
            </Button>
          </Link>
        </Grid>
        <ArtistDetail artist={selectedArtist} />
      </>
    );
  }
  return <h3>Loading</h3>;
}
