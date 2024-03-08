import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class ValidateLogin {
  static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
    const login = req.body;
    const requiredKeys = ['username', 'email', 'password'];
    for (let index = 0; index < requiredKeys.length; index += 1) {
      const notFoundKey = requiredKeys[index];
      if (!(notFoundKey in login)) {
        return res.status(mapStatusHTTP('INVALID_DATA'))
          .json({ message: 'All fields must be filled' });
      }
    }
    if (!login.username || !login.email || !login.password) {
      return res.status(mapStatusHTTP('INVALID_DATA'))
        .json({ message: 'All fields must be filled' });
    }
    const regex = /\S+@\S+\.\S+/;
    if (login.username.length < 3 || !regex.test(login.email) || login.password.length < 6) {
      return res.status(401).json({ message: 'The fields must respect the following rules: "username" must be longer than 2 characters, "password" must be longer than 5 characters and "email" must be a valid email' });
    }
    return next();
  }
}

export default ValidateLogin;
