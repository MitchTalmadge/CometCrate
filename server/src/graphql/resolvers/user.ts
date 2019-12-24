import { User } from '../../models/database/user.model';
import { ApolloContext } from '../../models/api/apollo-context.model';

export default {
  Query: {
    self: async (parent, args, context: ApolloContext) => {
      if (!context.currentUser) {
        return null;
      }

      return User.findById(context.currentUser.id);
    },
  },
};
