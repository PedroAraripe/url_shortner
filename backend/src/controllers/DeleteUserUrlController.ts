import { Request, Response } from "express";
import { DeleteUserUrl } from "../services/DeleteUserUrl";
import { UserHasUrlRequest } from "../types/common";

export class DeleteUserUrlController {
  async handle(request: Request, response: Response) {
    const {url_register_id} = request.body as UserHasUrlRequest;
    const {user_id} = request;

    console.log('what', url_register_id, user_id)

    const service = new DeleteUserUrl();
    const result = await service.execute({url_register_id, user_id});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    
    return response.status(200).json("Deletado com sucesso");
  }
}