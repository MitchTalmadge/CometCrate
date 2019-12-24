import passport from 'passport';
import { IUser, User } from '../../models/database/user.model';

passport.serializeUser((user: IUser, done: any) => {
  console.log(`Serializing ${user!.id}`);
  done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
  console.log(`Deserializing ${id}`);
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
