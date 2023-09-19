import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GraphQLResolveInfo } from 'graphql';

// The GraphQL schema
const typeDefs = `
type Query {
  hello: String
}

  type Mutation {
    calculateMatrixRecommendations(matrix: [Int!]!):Boolean
  }  
`;

// A map of functions which return data for the schema.
const resolvers = {
  Mutation: {
    calculateMatrixRecommendations: (_: any, { matrix }: { matrix: number[] }) => {
      console.log('Received matrix:', matrix)
      // Perform the matrix-vector multiplication logic and return the result
      // const result = calculateMatrixRecommendations(matrix);
      const result = matrix.map(n=> n>0);
      return true;
    },
  },
};



async function main() {
  const app = express();
  const httpServer = http.createServer(app);

  // Set up Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server));

  await new Promise((resolve) =>
    httpServer.listen({ port: 4000 }, () => {
      resolve(undefined);
    }),
  );
  console.log(`🚀 Server ready at http://localhost:4000`);
}

main();
