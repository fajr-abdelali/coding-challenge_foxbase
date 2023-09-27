import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GraphQLResolveInfo } from 'graphql';
import axios from 'axios';
import { Product } from './types';


// The GraphQL schema
const typeDefs = `
type Product {
  id: Int
  title: String
  price: Float
  description:String
  category:String
  image:String
  rating:Rating
}

type Rating{
  rate:Float
  count:Int
}

type Query {
  hello: String
  products: [Product]
}

  type Mutation {
    calculateMatrixRecommendations(matrix: [Int!]!):[Product]
  }  
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    products: async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Unable to fetch products');
      }
    },
  },
  Mutation: {
    calculateMatrixRecommendations: async (_: any, { matrix }: { matrix: number[] }) => {
      try {
        const products = await fetchProductsFromAPI();
        const productsFiltered = Recommendation(products, matrix);
        return productsFiltered;
      } catch(error) {
        console.error('Error calculating matrix:', error);
        throw new Error('Unable to calculate matrix');
      }
    },
  },
};

const Recommendation = (products:Product[], matrix: number[]) => {

  const matrixCalculated= matrix.reduce((acc,mtx)=>{return acc*mtx},1)
  products= products.filter(product=> product.rating.rate >= matrixCalculated)
  return products;
}

const fetchProductsFromAPI = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error calculating matrix:', error);
    throw new Error('Unable to calculate matrix');
  }
}



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
