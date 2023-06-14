import { Request, Response } from "express";
import { UserRequest } from "../types/common";
import { AuthenticateUserService } from "../services/AuthenticateUser";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const {login, password} = request.body as UserRequest;

    const service = new AuthenticateUserService();
    const result = await service.execute({login, password});

    if(result instanceof Error) {
      return response.status(401).json(result.message);
    }

    return response.json(result);
  }
}