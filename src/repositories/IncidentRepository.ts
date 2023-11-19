import { User } from './../model/user';
import { RepositoryError } from '../errors/RepositoryError';
import { IncidentParams, IncidentStatus } from '../types/Incident';
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

  async findByUserId(userId: string) {
    try {
      const multiplesIncidents = await Incident.find()
        .where({
          user: userId,
          status: 'ongoing'
        })
        .populate('user')
        .populate('ong');

      const recentIncidentOngoing = multiplesIncidents[multiplesIncidents?.length - 1];

      return recentIncidentOngoing;
    } catch (err) {
      throw new RepositoryError('get:incident by user id', err);
    }
  }

  async updateStatus(incidentId: string, status: IncidentStatus) {
    try {
      const updated = await Incident.findOneAndUpdate({
        _id: incidentId
      }, { status }, { new: true })

      return updated;
    } catch (err) {
      throw new RepositoryError('updateStatus:incident', err);
    }
  }
}

export const IncidentRepository = new IncidentRepositoryClass();
