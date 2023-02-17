import { TaskAltRounded } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const ArtistDetail = (props) => {
  const { artist } = props;
  const artistImage = artist?.images?.[0]?.url;
  const artitstAltTitle = `Cover art image provided by Spotify for ${
    artist?.name || 'this artist'
  }`;
  return (
    <Grid container columnGap={2}>
      <Grid item xs={12}>
        <Button size="large" endIcon={<TaskAltRounded />}>
          Finished with this artist
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardMedia
            component="img"
            height="350"
            sx={{
              objectPosition: 'center',
            }}
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
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6}>
        <h3>{artist?.type}</h3>
      </Grid>
    </Grid>
  );
};

export default ArtistDetail;
