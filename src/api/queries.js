import { gql } from '@apollo/client';

export const COUNTRY = gql`
  query country($code: ID!) {
    country(code: $code) {
      name
      native
      emoji
      states {
        name
        code
      }
    }
  }
`;
