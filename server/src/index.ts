import express from "express";
import routes from "./routes/routes";

// Setup
const app = express();
const port: string | number = process.env.PORT || 3000;

// Routing
app.use("/", routes);

// Finalize
app.listen(port,() => console.log(`App listening on port ${port}`));

export default app;
