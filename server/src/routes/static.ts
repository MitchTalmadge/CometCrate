import compression from "compression";
import express from "express";
import * as path from "path";
import {Router} from "express";

const router = Router();

// Serves static files.
router.use("/", compression(), express.static(path.resolve(__dirname, "../public")));
router.get("*", compression(), async (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

export default router;
