import { Request, Response } from 'express';
import LoginService from '../services/UserService';
import generateToken from '../utils/generateToken';

type User = {
  email: string;
  password: string;
};

export default class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public async getUserByEmail(req: Request, res: Response) {
    const { email, password }: User = req.body;
    const {status,  data } = await this.loginService.getUserByEmail(email);
    
    if (status === 'SUCCESSFUL' && data.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
   
    const token = generateToken(data);
    return res.status(200).json({ token: token });
  }
}