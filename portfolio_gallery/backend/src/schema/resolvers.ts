export const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name}!`,
    user: (_: any, { id }: { id: string }) => ({
      id: id,
      name: 'name',
      email: 'email',
    }),
  },
};
