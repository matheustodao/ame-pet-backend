import { Request, Response } from 'express';
import { IncidentRepository } from '../../repositories/IncidentRepository';

export async function changeStatusIncident(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Missing Id' })
  }

  const ong = await IncidentRepository.updateStatus(id, status);

  res.json(ong);
}

