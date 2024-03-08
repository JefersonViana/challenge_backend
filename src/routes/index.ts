import { Router } from 'express';
import registrerRouter from './registrer.routes';
import loginRouter from './login.routes';
import phoneRouter from './phone.routes';

const router = Router();

router.use('/register', registrerRouter);
router.use('/login', loginRouter);
router.use('/phones', phoneRouter)

export default router;