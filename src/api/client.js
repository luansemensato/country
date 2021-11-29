import { ApolloClient, HttpLink } from '@apollo/client';

import { cache } from 'api/cache';

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const client = new ApolloClient({
  cache,
  link: link,
  defaultOptions: {
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
  connectToDevTools: true,
});

export default client;
