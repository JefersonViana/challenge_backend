import { IUser } from "./IUser";

export interface IUserModel {
  getUsers(): Promise<IUser[]>;
  findByEmail(email: IUser['email']): Promise<IUser | null>;
  createUser(user: IUser): Promise<IUser | null>;
  updateUser(id: number, user: IUser): Promise<number>;
  deleteUser(id: number): Promise<number>;
}