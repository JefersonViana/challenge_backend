import { ICellPhone } from "../interfaces/iphone/ICellPhone";
import SequelizePhone from "../database/models/SequelizePhone";

export default class PhoneModel {
  private model = SequelizePhone;

  public async findAll(): Promise<ICellPhone[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  public async createPhone(phone: ICellPhone): Promise<ICellPhone> {
    const dbData = await this.model.create(phone);
    return dbData;
  }

  public async updatePhone(id: string, phone: ICellPhone): Promise<number> {
    const [dbData] = await this.model.update(phone, { where: { id } });
    return dbData;
  }

  public async deletePhone(id: string): Promise<number> {
    const dbData = await this.model.destroy({ where: { id } });
    return dbData;
  }
}
