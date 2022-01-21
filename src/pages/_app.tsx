import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from '../components/Header';
import SidebarDrawerProvider from '../contexts/SidebarDrawerContext';
import { queryClient } from '../services/queryClient';
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ queryClient }>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Header />
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
