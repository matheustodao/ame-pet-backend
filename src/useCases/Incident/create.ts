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
    status
  } = req.body as IncidentParamsApi;

  const incidentCreated = await IncidentRepository.create({
    adopt: adopt === '1' ? true : false,
    animal_lost: animal_lost === '1' ? true : false,
    longitude_latitude,
    animal_size,
    category_animal,
    status,
    ong: ongId,
    user: userId,
  });

  const incident = await IncidentRepository.findByUserId(userId);

  res.json(incident );
}

