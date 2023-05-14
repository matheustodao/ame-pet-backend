import { Request, Response } from 'express';
import { IncidentRepository } from '../../repositories/IncidentRepository';
import { IncidentParamsApi } from '../../types/Incident';

export async function createIncident(req: Request, res: Response) {
  const {
    adopt,
    longitude_latitude,
    animal_lost,
    animal_size,
    category_animal,
    ongId,
    userId,
  } = req.body as IncidentParamsApi;

  const ong = await IncidentRepository.create({
    adopt: adopt === '1' ? true : false,
    animal_lost: animal_lost === '1' ? true : false,
    longitude_latitude,
    animal_size,
    category_animal,
    ong: ongId,
    user: userId,
  });

  res.json(ong);
}

