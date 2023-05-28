import { Request, Response } from 'express';
import { MissingParams } from '../../errors/statusCode/400';
import { UserStoreParams } from '../../types/User';
import { Crypt } from '../../core/utils/crypt';
import { UserRepository } from '../../repositories/UserRepository';

export async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const paramsMissed = new MissingParams('name', 'email', 'password');
    return res.status(400).json(paramsMissed.api())
  }

  const passwordHashed = await Crypt.hash(password);

  const newUser: UserStoreParams = {
    name: name,
    email: email,
    password: passwordHashed,
  };

  const user = await UserRepository.create(newUser);

  if (!user) {
    return res.status(409).json({ error: 'Esse Email já existe' });
  }

  res.json(user);
}
