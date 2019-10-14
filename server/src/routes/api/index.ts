import {Router} from "express";
import authRoutes from "./auth";
import pingRoutes from './ping';

const router = Router();

router.use('/auth', authRoutes);
router.use('/ping', pingRoutes);

router.get("/*", (req, res) => {
    res.status(404).send("Requested Endpoint Not Found");
});

export default router;
