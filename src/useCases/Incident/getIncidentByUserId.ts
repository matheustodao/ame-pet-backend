import { Request, Response } from 'express';
import { IncidentRepository } from '../../repositories/IncidentRepository';
import { MissingParams } from './../../errors/statusCode/400';

export async function getIncidentByUserId(req: Request, res: Response) {
  const { id } = req.params as { id: string };

  if (!id) {
    return res.json(new MissingParams('userId').api())
  }

  const incident = await IncidentRepository.findByUserId(req.userId ?? id);

  res.json(incident);
}

