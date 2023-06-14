import { Request, Response } from "express";
import { GetMostAcessedUrls } from "../services/GetMostAcessedUrls";

export class GetMostAcessedUrlsController {
  async handle(request: Request, response: Response) {
    const service = new GetMostAcessedUrls();
    const result = await service.execute();

    return response.json(result);
  }
}