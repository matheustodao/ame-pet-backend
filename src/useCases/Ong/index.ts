import { Request, Response } from 'express';
import { MissingParams } from '../../errors/statusCode/400';
import { UserParams } from '../../types/User';
import { Crypt } from '../../core/utils/crypt';
import { UserRepository } from '../../repositories/UserRepository';
import { OngParams } from '../../types/Ong';
import { OngRepository } from '../../repositories/OngRepository';

export async function indexOng(req: Request, res: Response) {
  const ong = await OngRepository.index();

  res.json(ong);
}
