import express from "express";
import passport from "passport";

// Environment Setup
import './config/environment';

// Database Setup
import './database';

// Express Setup
const port: string | number = process.env.PORT || 3000;
const app = express();

// Middleware Setup
import './middlewares';
app.use(passport.initialize());

// Routing Setup
import routes from "./routes";
app.use("/", routes);

// Finalize
app.listen(port, () => console.log(`App listening on port ${port}`));

export default app;
