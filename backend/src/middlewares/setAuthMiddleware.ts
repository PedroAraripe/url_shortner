import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import { Request } from 'express';

export default function setAuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const defaultInvalidAuthResponse = () => new Error("Usuário não autenticado");
  
  const {authorization} = request.headers;

  if(!authorization) {
    defaultInvalidAuthResponse();

  } else {
    const token = authorization.replace('Bearer', '').trim();
  
    try {
      const data = jwt.verify(token, 'secret');
      request.user_id = data['id'];
  
    } catch {
      defaultInvalidAuthResponse();

    }

  }

  next();
}