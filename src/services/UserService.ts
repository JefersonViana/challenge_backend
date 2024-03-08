import { IUser } from '../interfaces/user/IUser';
import UserModel from '../models/UserModel';
import { ServiceResponse } from './ServiceResponse';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async getUsers(): Promise<ServiceResponse<IUser[]>> {
    const serviceReponse =  await this.userModel.getUsers();
    return { status: 'SUCCESSFUL', data: serviceReponse };
  }

  public async getUserByEmail(email: string): Promise<ServiceResponse<IUser>> {
    const getUser =  await this.userModel.findByEmail(email);
    if (!getUser) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    return { status: 'SUCCESSFUL', data: getUser };
  }

  public async createUser({ username, email, password }: IUser): Promise<ServiceResponse<IUser>> {
    const newUser = await this.userModel.createUser({ username, email, password });
    if (newUser) {
      return { status: 'SUCCESSFUL', data: newUser };
    }
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }
}
