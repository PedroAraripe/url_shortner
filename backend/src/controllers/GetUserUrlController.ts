import { Request, Response } from "express";
import { GetUserUrl } from "../services/GetUserUrl";

export class GetUserUrlController {
  async handle(request: Request, response: Response) {
    let {user_id: q_user_id} = request.query;
    
    if(!q_user_id) {
      return response.status(400).json("User id inválido");
    }

    const user_id = Number(q_user_id);

    const service = new GetUserUrl();
    const result = await service.execute({user_id});

    return response.json(result);
  }
}