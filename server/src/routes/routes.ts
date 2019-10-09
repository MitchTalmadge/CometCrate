import express from "express";
import path from "path";

const router = express.Router();

router.use("/api", async (req, res) => {
    res.send("Api here");
});

export default router;
