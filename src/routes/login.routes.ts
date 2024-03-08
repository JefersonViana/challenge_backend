import { Router, Request, Response } from 'express';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => loginController.getUserByEmail(req, res),
);

export default router;