import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_ENDPOINT = 'http://localhost:4000/'
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: API_ENDPOINT
})