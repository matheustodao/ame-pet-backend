import { Request, Response } from 'express';
import { MissingParams } from '../../errors/statusCode/400';
import { UserRepository } from '../../repositories/UserRepository';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../configs/env';

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    const paramsMissed = new MissingParams('name', 'email');
    return res.status(400).json(paramsMissed.api())
  }

  const user = await UserRepository.findByCredentials(email, password);

  if (!user) {
    return res.status(401).json({ error: 'Email or password is invalid' })
  }

  const token = jwt.sign({ user_id: user._id }, JWT_SECRET_KEY, {
    expiresIn: '1d'
  })

  res.json({
    user,
    token
  });
}
