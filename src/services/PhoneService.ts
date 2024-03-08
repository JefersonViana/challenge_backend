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
    if (getAllPhones) {
      return { status: 'SUCCESSFUL', data: getAllPhones };
    }
    return { status: 'SUCCESSFUL', data: [] };
  }

  public async createPhone(phones: ICellPhone[]): Promise<ServiceResponse<ICellPhone[]>> {
    for (const phone of phones) {
      await this.phoneModel.createPhone(phone);
    }
    const data = await this.phoneModel.findAll();
    return { status: 'SUCCESSFUL', data };
  }
}
