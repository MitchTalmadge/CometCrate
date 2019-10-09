import express from "express";
import routes from "./routes/routes";
import * as path from "path";

// Setup
const app = express();
const port: string | number = process.env.PORT || 8080;

// Routing
app.use("/", routes);

// Static Files
app.use("/", express.static(path.resolve(__dirname, "public")));
app.get("*", async (request, response) => {
    response.sendFile(path.resolve(__dirname, "public/index.html"));
});

// Finalize
app.listen(port, () => console.log(`App listening on port ${port}`));

export default app;
