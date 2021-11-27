import Head from 'next/head';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from 'createEmotionCache';
import theme from 'styles/theme';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Country</title>
      <link rel="shortcut icon" href="/images/display/icon-512.png" />
      <link rel="apple-touch-icon" href="/images/display/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />

      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="theme-color" content="#f7552b" />
      <meta name="description" content="Displays country information." />
    </Head>

    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  </CacheProvider>
);

export default App;
