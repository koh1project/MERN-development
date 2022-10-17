import assert from 'node:assert';

import { ApolloServer, gql } from 'apollo-server';

import { typeDefs } from './query';
import { resolvers } from './resolvers';

beforeAll(() => {});

test('Should return test data', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const response = await testServer.executeOperation({
    query: gql`
      query Hello($name: String) {
        hello(name: $name)
      }
    `,
    variables: { name: 'World' },
  });

  console.log(response.data?.hello);
  assert(response.data?.hello === 'Hello World!');
});

test('Should return user data', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const response = await testServer.executeOperation({
    query: gql`
      query GetUser($id: String) {
        user(id: $id) {
          id
          name
          email
        }
      }
    `,
    variables: { id: '1234abcd' },
  });

  expect(response.data?.user).toEqual({
    id: '1234abcd',
    name: 'name',
    email: 'email',
  });
});

afterEach(() => {});
afterAll(() => {});

// Reference: https://medium.com/@bartwijnants/testing-an-apollo-graphql-server-using-apollo-server-testing-jest-and-msw-feed7d9e05cf

// https://codesandbox.io/s/5dwxp?file=/test.js
