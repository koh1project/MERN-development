import { Resolvers } from './resolvers-types';
export const resolvers: Resolvers = {
  Query: {
    user: (parent, args, context, info) => ({
      id: args.id,
      name: 'name',
      email: 'email',
    }),
  },
};
