import { AppDataSource } from "../data-source";
import { UrlShortnedParam } from "../entities/UrlShortnedParam";

type UrlShortnedParamRequest = {
  url_register_id: number;
};

export class CreateUrlShortnedParam {
  async execute ({url_register_id} : UrlShortnedParamRequest) : Promise <UrlShortnedParam>{
    const repo = AppDataSource.getRepository(UrlShortnedParam);

    let urlShortnedParam = await repo.findOne({where: {url_register_id}});

    if(!urlShortnedParam) {
      urlShortnedParam = repo.create({url_register_id});
      await repo.save(urlShortnedParam);
    }

    return urlShortnedParam;
  }
}