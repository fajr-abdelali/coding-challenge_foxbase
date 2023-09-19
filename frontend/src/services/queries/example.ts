import { apolloClient } from '../graphql';
import { gql } from 'graphql-tag';


export async function serviceMatrix(matrix:number[]) {
  try {
    
    console.log(matrix)
    const response = await apolloClient.mutate({
      mutation: gql`
      mutation CalculateMatrixRecommendations($matrix: [Int!]!) {
        calculateMatrixRecommendations(matrix: $matrix)
      }
      `,
      variables: {
        matrix: matrix
      },
    });
    console.log('Response from server:', response.data.calculateRecommendations);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}
