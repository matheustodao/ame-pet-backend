import { User } from './../model/user';
import { RepositoryError } from '../errors/RepositoryError';
import { UserParams } from '../types/User';
import { Crypt } from '../core/utils/crypt';

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

  async findByEmail(email: string) {
    try {
      const userFound = await User.findOne({ email });

      if (!userFound) {
        return 'Email not exists';
      }

      return userFound;
    } catch (err) {
      throw new RepositoryError('findById:user', err);
    }
  }

  async findByCredentials(email: string, password: string) {
    try {
      const userFound = await this.findByEmail(email);

      if (userFound === 'Email not exists') return userFound;

      const validCredentials = await Crypt.compare(password, userFound.password as string)

      if (!validCredentials) {
        return 'Password invalid';
      }

      return userFound;
    } catch (err) {
      throw new RepositoryError('findByCredentials:user', err);
    }
  }
}

export const UserRepository = new UserRepositoryClass();
