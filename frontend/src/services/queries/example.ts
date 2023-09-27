import { apolloClient } from '../graphql';
import { gql } from 'graphql-tag';


export async function serviceMatrix(matrix: number[]) {
  try {
    const response = await apolloClient.mutate({
      mutation: gql`
      mutation CalculateMatrixRecommendations($matrix: [Int!]!) {
        calculateMatrixRecommendations(matrix: $matrix){
            id
            title
            price
            description
            category
            image
            rating {
              rate
              count
            }
        }
      }
      `,
      variables: {
        matrix: matrix
      },
    });
    return response.data.calculateMatrixRecommendations
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}
