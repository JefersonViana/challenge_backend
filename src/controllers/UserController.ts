import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import generateToken from '../utils/generateToken';
import { IUser } from '../interfaces/user/IUser';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async createUser(req: Request, res: Response) {
    const { username, email, password }: IUser = req.body;

    const { status, data } = await this.userService.createUser({ username, email, password });
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }

    // const token = generateToken(data.dataValues);
    // return res.status(mapStatusHTTP(status)).json({ token, data: [] });
    return res.status(mapStatusHTTP(status)).json({ data: [] });
  }
}