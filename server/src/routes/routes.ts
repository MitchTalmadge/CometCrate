import express from "express";
import path from "path";

const router = express.Router();

router.use("/api", async (req, res) => {
    res.send("Api here");
});

router.use("/", express.static("static"));

router.get("*", async (request, response) => {
    response.sendFile(path.resolve(__dirname, "../static/index.html"));
});

export default router;
