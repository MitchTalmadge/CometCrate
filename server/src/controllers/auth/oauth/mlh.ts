import passport from "passport";
import OAuth2Strategy from "passport-oauth2";
import {Request, Response, Router} from "express";

passport.use('mlh_oauth2', new OAuth2Strategy({
        authorizationURL: 'https://my.mlh.io/oauth/authorize',
        tokenURL: 'https://my.mlh.io/oauth/token',
        clientID: "test",
        clientSecret: "test",
        callbackURL: "http://localhost:3000/api/oauth/mlh/callback"
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
        console.log(accessToken + " : " + refreshToken);
        console.log(profile);
        cb(null, false, {message: "Testing"});
    }
));

const router = Router();

router.use('/login',
    passport.authenticate('mlh_oauth2')
);

router.use('/callback',
    passport.authenticate('mlh_oauth2', {failureRedirect: '/'}),
    (req: Request, res: Response) => {
        res.send("Congrats");
    }
);

export default router;
