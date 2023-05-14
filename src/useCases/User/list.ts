import { Request, Response } from 'express';
import { User } from '../../model/user';

export async function listUser(req: Request, res: Response) {
  const users = await User.find();

  res.json(users);
}
