import "../styles/globals.css"
// import { ThemeProvider } from "@mui/material"
// import { CacheProvider } from "@emotion/react"
// import { theme } from "@/styles/style_utils/theme"
// import createEmotionCache from "@/styles/style_utils/EmotionCache"
import { SessionProvider } from "next-auth/react"

// const clientSideEmotionCache = createEmotionCache()

export default function App({ 
  Component,
  // emotionCache = clientSideEmotionCache,
  pageProps: {session, ...pageProps} }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}