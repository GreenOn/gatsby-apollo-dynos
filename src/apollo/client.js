import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'http://stg-apollo.dynos.io/gql',
  fetch,
});
