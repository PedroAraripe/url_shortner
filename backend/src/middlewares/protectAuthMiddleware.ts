import { NextFunction, Response } from 'express';
import { Request } from 'express';

export default function protectAuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const defaultInvalidAuthResponse = () => response.status(401).send("Usuário não autenticado e não tem acesso a esta requisição");
  
  const {user_id} = request;

  if(!user_id) {
    return defaultInvalidAuthResponse();

  }

  next();
}