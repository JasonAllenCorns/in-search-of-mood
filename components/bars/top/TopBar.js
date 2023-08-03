import { getBlurDataURL } from '@/lib/client/image.blurDataUrl';
import { FeaturedPlayListRounded, LogoutRounded } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';

const TopBar = ({ handleSignout }) => {
  const { data: session } = useSession();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              In Search of Mood
            </Typography>
            <Box sx={{ flexGrow: 0, mx: 2 }}>
              <Tooltip title={session?.user?.name || ''}>
                <Avatar
                  alt={session?.user?.name || ''}
                  src={
                    session?.user?.image ||
                    session?.user?.picture ||
                    getBlurDataURL()
                  }
                />
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0, mx: 2 }}>
              <Tooltip title="how many playlists you have">
                <Badge
                  badgeContent={session?.user?.userTotalPlaylists || 0}
                  color="primary"
                >
                  <FeaturedPlayListRounded />
                </Badge>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0, mx: 2 }}>
              <Tooltip title="Sign out of Spotify on this app">
                <IconButton
                  onClick={handleSignout}
                  color="accent"
                  size="large"
                  sx={{ p: 0 }}
                  aria-label="Sign out of Spotify on this app"
                >
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
