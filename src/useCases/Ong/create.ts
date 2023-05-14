import { Request, Response } from 'express';
import { MissingParams } from '../../errors/statusCode/400';
import { UserParams } from '../../types/User';
import { Crypt } from '../../core/utils/crypt';
import { UserRepository } from '../../repositories/UserRepository';
import { OngParams } from '../../types/Ong';
import { OngRepository } from '../../repositories/OngRepository';

export async function createOng(req: Request, res: Response) {
  const { name, longitude_latitude, cnpj } = req.body;

  const ong = await OngRepository.create({
    cnpj,
    longitude_latitude,
    name
  });

  res.json(ong);
}
