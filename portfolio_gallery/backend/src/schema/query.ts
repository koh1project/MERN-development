const { gql } = require('apollo-server');
export const typeDefs = gql`
  type Res {
    resText: String!
  }
  type Query {
    testQuery: Res!
  }
`;
