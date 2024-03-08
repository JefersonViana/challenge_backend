import { Router } from 'express';
import registrerRouter from './registrer.routes';
import loginRouter from './login.routes';

const router = Router();

router.use('/register', registrerRouter);
router.use('/login', loginRouter);

export default router;