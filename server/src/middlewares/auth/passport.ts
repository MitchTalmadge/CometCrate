import passport from 'passport';
import { User } from '../../models/database/user.model';

passport.serializeUser((user: User, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: User, done: any) => {
  done(null, user);
});
