import { Router } from 'express';
import apiRoutes from './api';
import staticRoutes from './static';

const router = Router();

router.use('/api', apiRoutes);
router.use('/*', staticRoutes);

export default router;
