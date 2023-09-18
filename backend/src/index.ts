import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

// The GraphQL schema
const typeDefs = `
  type Query {
    hello: String
  }

  type Mutation {
    dummyMutation: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
  Mutation: {
    dummyMutation: () => 'This is a dummy mutation',
    calculateRecommendations: (_:any, {matrix}:{ matrix:any }) => {
      console.log('Received matrix:', matrix)
      // Perform the matrix-vector multiplication logic and return the result
      // const result = calculateMatrixRecommendations(args.matrix);
      return matrix;
    },
  },
};

const calculateMatrixRecommendations = (matrix) => {
  // Perform the matrix calculation and generate recommendations based on the given logic
  // ... your calculation logic
  return matrix
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
