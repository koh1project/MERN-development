import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { server } from './apolloServer';

const mockServer = setupServer(
  rest.get('localhost:4000', (req, res, ctx) =>
    res(ctx.json({ data: { resText: 'Res' } }))
  )
);

beforeAll(() => mockServer.listen());

test('Should return test data', async () => {
  //@ts-ignore
  const { query } = createTestClient(server);
  const { data } = await query({
    query: gql`
      {
        testQuery {
          resText
        }
      }
    `,
  });
  expect(data).toEqual({ testQuery: { resText: 'Res' } });
});

afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

// Reference: https://medium.com/@bartwijnants/testing-an-apollo-graphql-server-using-apollo-server-testing-jest-and-msw-feed7d9e05cf
