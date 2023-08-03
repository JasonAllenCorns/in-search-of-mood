import TrackList from '@/components/views/details/TrackList/TrackList';
import { ExpandCircleDownRounded, PlayArrowRounded } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const ArtistDetail = (props) => {
  const { artist } = props;
  const artistImage = artist?.images?.[1]?.url;
  const artitstAltTitle = `Cover art image provided by Spotify for ${
    artist?.name || 'this artist'
  }`;
  return (
    <Grid container columnGap={2}>
      <Grid item xs={12}>
        <Card sx={{ maxWidth: '100%', display: 'flex' }}>
          <CardMedia
            component="img"
            image={artistImage}
            alt={artitstAltTitle}
            sx={{
              flex: '0 0 auto',
              height: '160px',
              width: '160px',
            }}
          />
          <Box
            sx={{ display: 'flex', flex: '2 0 auto', flexDirection: 'column' }}
          >
            <CardContent>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  whiteSpace: 'nowrap',
                  maxWidth: '100%',
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

              <Button
                variant="contained"
                component="button"
                aria-label="play/pause"
                target="_blank"
                rel="noreferrer"
                href={artist?.uri}
                size="medium"
              >
                <Image
                  src={'/media/Spotify_Logo_RGB_White.png'}
                  alt="Spotify logo image marking button intent, to play media through Spotify app"
                  height="30"
                  width="100"
                />
                <PlayArrowRounded />
              </Button>
            </CardContent>
          </Box>
        </Card>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownRounded />}
            aria-controls="artist-tracklist-content"
            id="artist-tracklist-header"
          >
            <Typography>Top Tracks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TrackList artistId={artist?.id} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownRounded />}
            aria-controls="artist-details-content"
            id="artist-details-header"
          >
            <Typography>Item specs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(artist || {}).map((key, idx) => (
                  <TableRow
                    key={`row_${artist?.id}_${idx}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {key}
                    </TableCell>
                    <TableCell align="right">
                      {JSON.stringify(artist[key])}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
// const artist = {
//   external_urls: {
//     spotify: 'https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp',
//   },
//   followers: { href: null, total: 13052735 },
//   genres: ['album rock', 'classic rock', 'hard rock', 'rock'],
//   href: 'https://api.spotify.com/v1/artists/36QJpDe2go2KgaRleHCDTp',
//   id: '36QJpDe2go2KgaRleHCDTp',
//   images: [
//     {
//       height: 600,
//       url: '//localhost:3000/media/cached/207803ce008388d3427a685254f9de6a8f61dc2e.jpeg',
//       width: 600,
//     },
//     {
//       height: 200,
//       url: '//localhost:3000/media/cached/b0248a44865493e6a03832aa89854ada16ff07a8.jpeg',
//       width: 200,
//     },
//     {
//       height: 64,
//       url: '//localhost:3000/media/cached/16eb3cdae0d824b520ac17710e943a99d3ef6602.jpeg',
//       width: 64,
//     },
//   ],
//   name: 'Led Zeppelin',
//   popularity: 79,
//   type: 'artist',
//   uri: 'spotify:artist:36QJpDe2go2KgaRleHCDTp',
// };
export default ArtistDetail;
