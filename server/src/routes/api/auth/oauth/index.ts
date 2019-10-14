import { Router } from 'express';
import mlhRoutes from './mlh';

const router = Router();

router.use('/mlh', mlhRoutes);

export default router;
