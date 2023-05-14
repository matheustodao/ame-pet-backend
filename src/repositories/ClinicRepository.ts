import { RepositoryError } from '../errors/RepositoryError';
import { Clinic } from '../model/clinic';
import { ClinicParams } from '../types/Clinic';

class ClinicRepositoryClass {
  async createService(props: ClinicParams['services']) {
    try {
      const service = await Clinic.create({
        services: {
          name: props.name,
          price: props.price
        }
      });

      return service;
    } catch (err) {
      throw new RepositoryError('create:clinic', err);
    }
  }

  async create({ userId, ...props }: Omit<ClinicParams, 'services'>) {
    try {
      const clinic = await Clinic.create({
        userId,
        cnpj: props.cnpj,
        brandName: props.brandName,
        legalName: props.legalName,
        responsible: props.responsible,
        address: props.address
      });

      return clinic;
    } catch (err) {
      throw new RepositoryError('createUser:clinic', err);
    }
  }
}

export const ClinicRepository = new ClinicRepositoryClass();
