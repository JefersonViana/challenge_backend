import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { phoneSchema } from '../utils/schemas';
import { ICellPhone } from '../interfaces/iphone/ICellPhone';

class ValidateFieldsPhone {
  private static validateFields(phone: ICellPhone[], req: Request, res: Response, next: NextFunction) {
    for (const item of phone) {
      const { error } = phoneSchema.validate(item);
      if (error) {
        return res.status(mapStatusHTTP('INVALID_DATA')).json({ error: error.message });
      }
    }
    req.body.payload = phone;
    next();
  }

  static validateFieldsPhone(req: Request, res: Response, next: NextFunction): Response | void{
    const payload = req.body;
    const isArray = Array.isArray(payload);
    const newListPhones: ICellPhone[] = [];
    if (isArray && payload.length) {
      for (const item of payload) {
        const { name, brand, model, data } = item;
        for (const subitem of data) {
          const { price, color } = subitem as any;
          newListPhones.push({ name, brand, model, price, color});
        }
      }
      return ValidateFieldsPhone.validateFields(newListPhones, req, res, next);
    }

    if (payload.details) {
      newListPhones.push({ name: payload.name, price: payload.price, ...payload.details })
      return ValidateFieldsPhone.validateFields(newListPhones, req, res, next);
    }
    newListPhones.push({ ...payload });
    return ValidateFieldsPhone.validateFields(newListPhones, req, res, next);
  }
}

export default ValidateFieldsPhone;