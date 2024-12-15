import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createClient } from 'graphql-ws';

const wsClient = createClient({
  url: 'ws://localhost:4000/graphql',  
});

const client = new ApolloClient({
  link: wsClient,
  cache: new InMemoryCache(),
});

export default client;
