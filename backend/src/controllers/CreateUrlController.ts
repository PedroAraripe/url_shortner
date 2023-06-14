import { Request, Response } from "express";
import { CreateUrlRegister } from "../services/CreateUrlRegister";
import { CreateUrlShortnedParam } from "../services/CreateUrlShortnedParam";
import { CreateUserHasUrlService } from "../services/CreateUserHasUrl";
import { CreateUrlControllerBody } from "../types/common";
export class CreateUrlController {
  async handle(request: Request, response: Response) {
    const {url_basic} = request.body as CreateUrlControllerBody;
    const {user_id} = request;

    const serviceRegisterBase = new CreateUrlRegister();
    const resultUrlRegister = await serviceRegisterBase.execute({url_basic});

    const {id : url_register_id} = resultUrlRegister;
    
    const serviceRegisterHash = new CreateUrlShortnedParam();
    const resultHashRegister = await serviceRegisterHash.execute({url_register_id});
    
    if(user_id) {
      const serviceUserHasUrl = new CreateUserHasUrlService();
      await serviceUserHasUrl.execute({url_register_id, user_id});
    }
    
    return response.json({
      ...resultUrlRegister,
      register_hash: resultHashRegister
    });
  }
}