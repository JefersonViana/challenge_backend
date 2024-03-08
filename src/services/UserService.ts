import UserModel from '../models/UserModel';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async getUsers() {
    const serviceReponse =  await this.userModel.getUsers();
    return serviceReponse;
  }

  public async getUserByEmail(email: string) {
    const getUser =  await this.userModel.findByEmail(email);
    if (!getUser) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    return { status: 'SUCCESSFUL', data: getUser };
  }

  public async createUser({ username, email, password }: any) {
    const newUser = await this.userModel.createUser({ username, email, password });
    return { status: 'SUCCESSFUL', data: newUser };
  }
}
