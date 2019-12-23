import { Router } from 'express';

const router = Router();

router.use('/', (req, res) => {
  res.send(JSON.stringify({result: "pong"}));
});

export default router;
