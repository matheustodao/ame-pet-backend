import { User } from './../model/user';
import { RepositoryError } from '../errors/RepositoryError';
import { UserParams } from '../types/User';
import { Ong } from '../model/ong';
import { OngParams } from '../types/Ong';

export class OngRepositoryClass {
  async create(props: OngParams) {
    try {
      const user = await Ong.create({
        cnpj: props.cnpj,
        longitude_latitude: props.longitude_latitude,
        name: props.name
      });

      return user;
    } catch (err) {
      throw new RepositoryError('create:ong', err)
    }
  }

  async show(ongId: string) {
    try {
      const userExists = await Ong.findById(ongId);

      return userExists;
    } catch (err) {
      throw new RepositoryError('show:ong', err);
    }
  }
}

export const OngRepository = new OngRepositoryClass();
