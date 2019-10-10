import passport from "passport";
import {Request, Response, Router} from "express";
import {OAUTH_MLH_STRATEGY} from "../../../middlewares/auth/oauth/mlh";

const router = Router();

router.use('/login',
    passport.authenticate(OAUTH_MLH_STRATEGY)
);

router.use('/callback',
    passport.authenticate(OAUTH_MLH_STRATEGY, {failureRedirect: '/'}),
    (req: Request, res: Response) => {
        res.send("Congrats");
    }
);

export default router;
