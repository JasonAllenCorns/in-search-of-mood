import { getBlurDataURL } from '@/lib/client/image.blurDataUrl';
import { FeaturedPlayListRounded, LogoutRounded } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';

const TopBar = ({ handleSignout, user = {}, userTotalPlaylists = 0 }) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              In Search of Mood
            </Typography>
            <Box sx={{ flexGrow: 0, mx: 2 }}>
              <Tooltip title={user?.name || ''}>
                <Avatar alt={user?.name || ''} src={user?.image || user?.picture || getBlurDataURL()} />
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0, mx: 2 }}>
              <Tooltip title="how many playlists you have">
                <Badge badgeContent={userTotalPlaylists} color="primary">
                  <FeaturedPlayListRounded />
                </Badge>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0, mx: 2 }}>
              <Tooltip title="Sign out of Spotify on this app">
                <IconButton onClick={handleSignout} color="accent" size="large" sx={{ p: 0 }} aria-label="Sign out of Spotify on this app">
                  <LogoutRounded fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default TopBar;
