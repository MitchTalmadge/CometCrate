import passport from 'passport';
import { Router } from 'express';
import { OAUTH_MLH_STRATEGY } from '../../../../middlewares/auth/oauth/mlh';

const router = Router();

router.use('/login',
  passport.authenticate(OAUTH_MLH_STRATEGY));

router.use('/callback',
  passport.authenticate(OAUTH_MLH_STRATEGY, { failureRedirect: undefined }),
  (req, res) => {
    res.send(`
    <script>
        window.close();
    </script>
    `);
  });

export default router;
