import { ApolloServer } from 'apollo-server';
import { typeDefs } from './query';
import { resolvers } from './resolvers';

import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing';

export const server = new ApolloServer({ typeDefs, resolvers });

