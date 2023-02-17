import Layout from '@/components/app_layout';
import { SpotifyProvider } from '@/lib/client/context/SpotifyContext';
import createEmotionCache from '@/styles/style_utils/EmotionCache';
import { theme } from '@/styles/style_utils/theme';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter;

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={emotionCache}>
          {router.pathname === '/' ? (
            <Component {...pageProps} />
          ) : (
            <SpotifyProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SpotifyProvider>
          )}
        </CacheProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
