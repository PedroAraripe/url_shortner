import { AppDataSource } from "../data-source";
import { UrlRegister } from "../entities/UrlRegister";
import { UrlRegisterRequest } from "../types/common";
export class CreateUrlRegister {
  async execute ({url_basic} : UrlRegisterRequest) : Promise <UrlRegister>{
    const repo = AppDataSource.getRepository(UrlRegister);
    
    let urlRegistered = await repo.findOne({where: {url_basic}});

    if(!urlRegistered) {
      urlRegistered = repo.create({url_basic});
      await repo.save(urlRegistered);
    }

    return urlRegistered;
  }
}