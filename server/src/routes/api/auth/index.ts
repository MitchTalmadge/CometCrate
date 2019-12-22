import { Router } from 'express';
import oauthRoutes from './oauth';
import identRoutes from './ident';

const router = Router();

router.use('/oauth', oauthRoutes);
router.use('/ident', identRoutes);

export default router;
