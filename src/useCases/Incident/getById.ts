import { Request, Response } from 'express';
import { IncidentRepository } from '../../repositories/IncidentRepository';

export async function getByIdIncident(req: Request, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Missing Id' })
  }

  const ong = await IncidentRepository.show(id);

  res.json(ong);
}

