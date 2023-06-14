import { Request, Response } from "express";
import { GetUrlnfo } from "../services/GetUrlnfo";
import { UrlInfoRequest } from "../types";

export class GetUrlInfoController {
  async handle(request: Request, response: Response) {
    const {shortned_param} = request.params as UrlInfoRequest;
    const service = new GetUrlnfo();

    if(!shortned_param) {
      return response.status(400).json("Hash de url inválida");
    }
    const result = await service.execute({shortned_param});

    return response.json(result);
  }
}