import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { theme } from '@/styles/style_utils/theme';
import createEmotionCache from '@/styles/style_utils/EmotionCache';
import Layout from '@/components/app_layout';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps } }) {
  const router = useRouter;
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={emotionCache}>
          {router.pathname === '/' ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </CacheProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
