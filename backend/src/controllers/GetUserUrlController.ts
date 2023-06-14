import { Request, Response } from "express";
import { GetUserUrl } from "../services/GetUserUrl";

export class GetUserUrlController {
  async handle(request: Request, response: Response) {
    const {user_id} = request;
    
    const service = new GetUserUrl();
    const result = await service.execute({user_id});

    return response.json(result);
  }
}