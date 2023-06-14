import { AppDataSource } from "../data-source";
import { UrlRegister } from "../entities/UrlRegister";
import { UrlShortnedParam } from "../entities/UrlShortnedParam";
import { UrlInfoRequest, UrlInfoResponse } from "../types/common";

export class GetUrlnfo {
  async execute ({shortned_param}: UrlInfoRequest) : Promise <UrlInfoResponse>{
    const repo = AppDataSource.getRepository(UrlRegister);
    
    const urlRegistered: UrlInfoResponse = await repo.createQueryBuilder("ur")
      .leftJoinAndSelect(
        UrlShortnedParam,
        'usp',
        'usp.url_register_id = ur.id',
        )
        .where("shortned_param = :shortned_param", { shortned_param })
        .select([
          'ur.id AS url_register_id',
          'ur.url_basic AS url_basic',
          'usp.shortned_param AS shortned_param',
          'ur.created_on AS created_on',
        ])
        .getRawOne()
      
    return urlRegistered;
  }
}