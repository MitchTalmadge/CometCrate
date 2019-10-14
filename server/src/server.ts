import express from 'express';
import passport from 'passport';

// Environment Setup
require('./config/environment');

// Database Setup
require('./database');

// Express Setup
const port: string | number = process.env.PORT || 3000;
const app = express();

// Middleware Setup
require('./middlewares');

app.use(passport.initialize());

// Routing Setup
const routes = require('./routes').default;

app.use('/', routes);

// Finalize
app.listen(port, () => console.log(`App listening on port ${port}`));

export default app;
