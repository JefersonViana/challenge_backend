import { Router, Request, Response } from 'express';
import PhoneController from '../controllers/PhoneController';
import ValidateToken from '../middlewares/ValidateToken';
import ValidateFieldsPhone from '../middlewares/ValidateFieldsPhone';

const phoneController = new PhoneController();

const router = Router();

router.get(
  '/',
  ValidateToken.validateToken,
  (req: Request, res: Response) => phoneController.getAllPhones(req, res)
);

router.post(
  '/',
  ValidateToken.validateToken,
  ValidateFieldsPhone.validateFieldsPhone,
  (req: Request, res: Response) => phoneController.createPhone(req, res)
);

router.put(
  '/:id',
  ValidateToken.validateToken,
  ValidateFieldsPhone.validateFieldsPhone,
  (req: Request, res: Response) => phoneController.updatePhone(req, res)
);

router.delete(
  '/:id',
  ValidateToken.validateToken,
  (req: Request, res: Response) => phoneController.deletePhone(req, res)
);

export default router;
