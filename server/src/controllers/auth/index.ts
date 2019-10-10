import {Router} from "express";
import oauthRoutes from "./oauth";

const router = Router();

router.use("/oauth", oauthRoutes);

export default router;
