import { IUser } from "../interfaces/user/IUser";
import SequelizeUser from "../database/models/SequelizeUser";
import { IUserModel } from "../interfaces/user/IUserModel";

export default class UserModel implements IUserModel{
  private model = SequelizeUser;

  public async getUsers(): Promise<IUser[]> {
    const dbData = await this.model.findAll({ attributes: { exclude: ['password'] } });
    return dbData;
  }

  public async findByEmail(email: string): Promise<IUser | null>{
    const dbData = await this.model.findOne({
      where: { email },
      raw: true,
    });
    return dbData;
  }

  public async createUser(user: IUser): Promise<IUser | null> {
    const dbData = await this.model.create(user);
    return dbData;
  }

  public async updateUser(id: number, user: IUser): Promise<number> {
    const [dbData] = await this.model.update(user, { where: { id } });
    return dbData;
  }
  
  public async deleteUser(id: number): Promise<number> {
    const dbData = await this.model.destroy({ where: { id } });
    return dbData;
  }
}
