import { User } from './../model/user';
import { RepositoryError } from '../errors/RepositoryError';
import { IncidentParams } from '../types/Incident';
import { Incident } from '../model/incident';

export class IncidentRepositoryClass {
  async create(props: IncidentParams) {
    try {
      const user = await Incident.create({
        adopt: props.adopt,
        animal_lost: props.animal_lost,
        animal_size: props.animal_size,
        category_animal: props.category_animal,
        ong: props.ong,
        user: props.user,
        longitude_latitude: props.longitude_latitude,
      });

      return user;
    } catch (err) {
      throw new RepositoryError('create:incident', err)
    }
  }

  async show(incidentId: string) {
    try {
      const userExists = await Incident.findById(incidentId).populate('user').populate('ong');

      return userExists;
    } catch (err) {
      throw new RepositoryError('show:incident', err);
    }
  }
}

export const IncidentRepository = new IncidentRepositoryClass();
