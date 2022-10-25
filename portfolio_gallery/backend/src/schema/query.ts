import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: String!
    name: String
    email: String
  }

  type Query {
    hello(name: String): String!
    user(id: String): User!
  }
`;
