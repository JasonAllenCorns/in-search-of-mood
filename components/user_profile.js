import { Badge, Box, Paper } from '@mui/material';
// import LogoutRounded from '@mui/icons-material/LogoutRounded';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import Image from 'next/image';

export default function UserProfile(props) {
  const { user, playlistCount, blurDataURL } = props;
  return (
    <>
      <Paper sx={{ p: 2 }} elevation={1}>
        <Box sx={{ borderRadius: '4px', p: 0, overflow: 'hidden', display: 'inline-block', height: 300 }}>
          {/* ^^^can't set the bottom border radius... */}
          <Image src={user?.image || user?.picture || blurDataURL} alt="Your Spotify profile image" blurDataURL placeholder="blur" width={225} height={300} />
        </Box>
        <Badge badgeContent={playlistCount} color="primary">
          <FeaturedPlayListIcon />
        </Badge>
        {/* <Button onClick={handleSignout} aria-label='Sign out of Spotify on this app'>
          <LogoutRounded />
        </Button> */}
      </Paper>
    </>
  );
}
