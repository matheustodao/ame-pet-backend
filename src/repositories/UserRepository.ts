import { User } from './../model/user';
import { RepositoryError } from '../errors/RepositoryError';
import { UserParams, UserStoreParams } from '../types/User';
import { Crypt } from '../core/utils/crypt';

type FindByCredentialsResponse = UserParams | null;

export class UserRepositoryClass {
  async create(props: UserStoreParams): Promise<UserParams | null> {
    try {
      const emailAlreadyExists = await this.findByEmail(props.email);

      if (emailAlreadyExists) {
        return null;
      }

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

  async findByEmail(email: string): Promise<UserParams | null> {
    try {
      const userFound = await User.findOne({ email });

      if (!userFound) {
        return null;
      }

      return userFound;
    } catch (err) {
      throw new RepositoryError('findById:user', err);
    }
  }

  async findByCredentials(email: string, password: string): Promise<FindByCredentialsResponse> {
    try {
      const userFound = await this.findByEmail(email);

      if (userFound === null) return null;

      const validCredentials = await Crypt.compare(password, userFound.password as string)

      if (!validCredentials) {
        return null;
      }

      return userFound;
    } catch (err) {
      throw new RepositoryError('findByCredentials:user', err);
    }
  }
}

export const UserRepository = new UserRepositoryClass();
