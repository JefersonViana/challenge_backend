import { Router, Request, Response } from 'express';
import RegistrerController from '../controllers/UserController';
import ValidateLogin from '../middlewares/ValidateFields';

const registrerController = new RegistrerController();

const router = Router();

router.post(
  '/',
  ValidateLogin.validateFields,
  (req: Request, res: Response) => registrerController.createUser(req, res)
);

export default router;