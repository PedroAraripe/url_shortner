import { Request, Response } from "express";
import { CreateUrlAccessLog } from "../services/CreateUrlAccessLog";

export class CreateUrlAccessLogController {
  async handle(request: Request, response: Response) {
    const {url_register_id, user_id} = request.body;

    const service = new CreateUrlAccessLog();
    const result = await service.execute({url_register_id, user_id});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}