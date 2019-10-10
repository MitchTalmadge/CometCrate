import passport from "passport";
import OAuth2Strategy from "passport-oauth2";
import axios from "axios";

export const OAUTH_MLH_STRATEGY = 'oauth_mlh';

let mlhOAuthStrategy = new OAuth2Strategy({
        authorizationURL: 'https://my.mlh.io/oauth/authorize',
        tokenURL: 'https://my.mlh.io/oauth/token',
        clientID: process.env.OAUTH_MLH_CLIENT_ID,
        clientSecret: process.env.OAUTH_MLH_CLIENT_SECRET,
        callbackURL: process.env.OAUTH_MLH_CALLBACK_URL,
        scope: ["email", "phone_number", "birthday", "education"]
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
        console.log(profile);
        cb(null, {name: "joe"});
    }
);

mlhOAuthStrategy.userProfile = (accessToken: string, done: any) => {
    axios.get("https://my.mlh.io/api/v2/user.json?", {
        data: {
            "access_token": accessToken
        }
    })
        .then(response => {
            done(null, response);
        })
        .catch(err => {
            done(err);
        })
};

passport.use(OAUTH_MLH_STRATEGY, mlhOAuthStrategy);

