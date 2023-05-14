import { Request, Response } from 'express';
import { MissingParams } from '../../errors/statusCode/400';
import { UserRepository } from '../../repositories/UserRepository';

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    const paramsMissed = new MissingParams('name', 'email');
    return res.status(400).json(paramsMissed.api())
  }

  const user = await UserRepository.findByCredentials(email, password);

  if (user === 'Email not exists' || user == 'Password invalid') {
    res.status(400).json({ error: 'Email or password is invalid' })
  }

  res.json(user);
}
