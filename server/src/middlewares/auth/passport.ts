import passport from 'passport';
import { IUser, User } from '../../models/database/user.model';

passport.serializeUser((user: IUser, done: any) => {
  done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
