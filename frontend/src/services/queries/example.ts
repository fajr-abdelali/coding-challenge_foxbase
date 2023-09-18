import { apolloClient } from '../graphql';
import { gql } from 'graphql-tag';

export async function serviceMatrix() {
  try {
    const response = await apolloClient.query({
      query: gql`
        query Query {
          hello
        }
      `,
    });
    console.log('Response from server:', response.data.hello);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}
