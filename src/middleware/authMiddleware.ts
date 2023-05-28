import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../configs/env';

interface JWTTokenResponse {
  user_id: string,
  iat: number,
  exp: number
}

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Missing authorization header' });
  }

  const token = authorization.replace(/(bearer|Bearer)/, '').trim();

  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    const { user_id } = data as JWTTokenResponse;

    req.userId = user_id

    return next();
  } catch {
    return res.status(401).json({ error: 'Missing authorization header' });
  }
}