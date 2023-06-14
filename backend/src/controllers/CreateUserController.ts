import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { UserRequest } from "../types";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {login, password} = request.body as UserRequest;

    const service = new CreateUserService();
    const result = await service.execute({login, password});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}