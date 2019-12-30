import { User } from '../../models/database/user.model';
import { ApolloContext } from '../../models/api/apollo-context.model';

// noinspection JSUnusedGlobalSymbols
export default {
  Query: {
    self: async (parent, args, context: ApolloContext) => {
      if (!context.currentUser) {
        return null;
      }

      return User.findById(context.currentUser.id);
    },
  },

  Mutation: {
    signOut: async (parent, args, context: ApolloContext) => {
      if (!context.currentUser) {
        return null;
      }

      context.req.session.destroy((err) => {
        if (err) {
          console.error('Failed to destroy a session on logout.');
          console.error(err);
        }

        return null;
      });
    },
  },
};
