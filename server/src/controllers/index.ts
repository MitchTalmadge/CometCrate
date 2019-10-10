import {Request, Response, Router} from "express";
import authRoutes from "./auth";

const router = Router();

router.use('/auth', authRoutes);

router.get("/*", (req: Request, res: Response) => {
    res.status(404).send("Requested Endpoint Not Found");
});

export default router;
