import { Router } from 'express';
import registrerRouter from './registrer.routes';

const router = Router();

router.use('/register', registrerRouter);

export default router;