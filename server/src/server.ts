import express from 'express';
import passport from 'passport';
import { ApolloServer } from 'apollo-server-express';
import graphQLResolvers from './graphql/resolvers';
import graphQLSchema from './graphql/schema';
import { ApolloContext } from './models/api/apollo-context.model';

// Environment Setup
require('./config/environment');

// Database Setup
require('./database');

// Apollo Setup
const apolloServer = new ApolloServer({
  resolvers: graphQLResolvers,
  typeDefs: graphQLSchema,
  context: async ({ req, res }) => {
    const context: ApolloContext = {
      currentUser: undefined,
    };

    return context;
  },
});

// Express Setup
const port: string | number = process.env.PORT || 3000;
const app = express();
apolloServer.applyMiddleware({
  app,
  path: '/api/essentials/graphql',
});

// Middleware Setup
require('./middlewares');

app.use(passport.initialize());

// Routing Setup
const routes = require('./routes').default;

app.use('/', routes);

// Finalize
app.listen(port, () => console.log(`App listening on port ${port}`));

export default app;
