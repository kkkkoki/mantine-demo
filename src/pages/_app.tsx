import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import NextApp, { AppContext, AppProps } from 'next/app';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { getCookie, setCookie } from 'cookies-next';
import '@/styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    pageProps.colorScheme
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Open Sans, sans serif',
          colorScheme,
          fontSizes: {
            xs: '8px',
            sm: '12px',
            md: '16px',
            lg: '20px',
            xl: '24px',
          },
          spacing: {
            xs: '4px',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '20px',
          },
          breakpoints: {
            xs: '400',
            sm: '576',
            md: '768',
            lg: '992',
            xl: '1200',
          },
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  appProps.pageProps = {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'light',
  };

  return {
    ...appProps,
  };
};
