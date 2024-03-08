import { Request, Response } from 'express';
import PhoneService from '../services/PhoneService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../services/UserService';

export default class PhoneController {
  private phoneService: PhoneService;
  private userService: UserService;

  constructor() {
    this.phoneService = new PhoneService();
    this.userService = new UserService();
  }

  public async getAllPhones(_req: Request, res: Response) {
    const { status, data } = await this.phoneService.getAllPhones();
    return res.status(mapStatusHTTP(status)).json({ data });
  }

  public async createPhone(req: Request, res: Response) {
    const { status, data } = await this.phoneService.createPhone(req.body.payload);
    return res.status(mapStatusHTTP(status)).json({ data });
  }

  public async updatePhone(req: Request, res: Response) {
    const { status, data } = await this.phoneService.updatePhone(req.params.id, req.body.payload[0]);
    return res.status(mapStatusHTTP(status)).json({ data });
  }

  public async deletePhone(req: Request, res: Response) {
      const { status, data } = await this.phoneService.deletePhone(req.params.id);
      return res.status(mapStatusHTTP(status)).json({ data });
  }
}