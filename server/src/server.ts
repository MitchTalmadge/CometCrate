import express from 'express';
import passport from 'passport';
import { ApolloServer } from 'apollo-server-express';
import session from 'express-session';
import graphQLResolvers from './graphql/resolvers';
import graphQLSchema from './graphql/schema';
import { ApolloContext } from './models/api/apollo-context.model';
import { IUser } from './models/database/user.model';

// Environment Setup
require('./config/environment');

// Database Setup
require('./database');

// Express Setup
const port: string | number = process.env.PORT || 3000;
const app = express();

// Session Setup
app.use(session({
  name: 'comet-crate.sid',
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
}));

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());

// Middleware Setup
require('./middlewares');

// Apollo Setup
const apolloServer = new ApolloServer({
  resolvers: graphQLResolvers,
  typeDefs: graphQLSchema,
  context: async ({ req, res }) => {
    const context: ApolloContext = {
      currentUser: req.user ? <IUser>req.user : undefined,
    };

    return context;
  },
});
apolloServer.applyMiddleware({
  app,
  path: '/api/essentials/graphql',
});

// Routing Setup
const routes = require('./routes').default;

app.use('/', routes);

// Finalize
app.listen(port, () => console.log(`App listening on port ${port}`));

export default app;
