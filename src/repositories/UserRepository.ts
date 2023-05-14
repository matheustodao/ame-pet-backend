import { User } from './../model/user';
import { RepositoryError } from '../errors/RepositoryError';
import { UserParams } from '../types/User';

export class UserRepositoryClass {
  async create(props: UserParams) {
    try {
      const user = await User.create({
        name: props.name,
        email: props.email,
        password: props.password
      });

      return user;
    } catch (err) {
      throw new RepositoryError('create:user', err)
    }
  }

  async show(userId: string) {
    try {
      const userExists = await User.findById(userId);

      return userExists;
    } catch (err) {
      throw new RepositoryError('show:user', err);
    }
  }

  async findByCredentials(email: string, password: string) {
    try {
      const userFound = await User.findOne({
        email: email,
        password: password,
      });

      return userFound;
    } catch (err) {
      throw new RepositoryError('findByCredentials:user', err);
    }
  }
}

export const UserRepository = new UserRepositoryClass();
