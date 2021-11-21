import { gql } from '@apollo/client';

export const POKEMONS_QUERY = gql`
  query Pokemons($q: String) {
    pokemons(q: $q) {
      edges {
        cursor
        node {
          id
          name
          types
          classification
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
