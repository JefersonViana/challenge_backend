import { ICellPhone } from "../interfaces/iphone/ICellPhone";
import PhoneModel from "../models/PhoneModel";
import { ServiceResponse } from "./ServiceResponse";

export default class PhoneService {
  private phoneModel: PhoneModel;

  constructor() {
    this.phoneModel = new PhoneModel();
  }

  public async getAllPhones(): Promise<ServiceResponse<ICellPhone[]>> {
    const getAllPhones = await this.phoneModel.findAll();
    return { status: 'SUCCESSFUL', data: getAllPhones };
  }

  public async createPhone(phones: ICellPhone[]): Promise<ServiceResponse<ICellPhone[]>> {
    const data: ICellPhone[] = [];
    for (const phone of phones) {
      const d = await this.phoneModel.createPhone(phone);
      data.push(d);
    }
    return { status: 'SUCCESSFUL', data };
  }

  public async updatePhone(id: string, phone: ICellPhone): Promise<ServiceResponse<number>> {
    const data = await this.phoneModel.updatePhone(id, phone);
    return { status: 'SUCCESSFUL', data };
  }

  public async deletePhone(id: string): Promise<ServiceResponse<number>> {
    const data = await this.phoneModel.deletePhone(id);
    return { status: 'SUCCESSFUL', data };
  }
}
