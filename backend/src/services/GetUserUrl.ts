import { AppDataSource } from "../data-source";
import { UrlRegister } from "../entities/UrlRegister";
import { UrlShortnedParam } from "../entities/UrlShortnedParam";
import { UserHasUrl } from "../entities/UserHasUrl";
import { UserHasUrlResponse, UserLoggedHeader } from "../types";
export class GetUserUrl {
  async execute ({user_id} : UserLoggedHeader) : Promise <UserHasUrlResponse[]>{
    const repo = AppDataSource.getRepository(UserHasUrl);
    
    const urlRegistered : UserHasUrlResponse[] = await repo.createQueryBuilder("uhu")
      .leftJoinAndSelect(
        UrlRegister,
        'ur',
        'ur.id = uhu.url_register_id',
      )
      .leftJoinAndSelect(
        UrlShortnedParam,
        'usp',
        'usp.url_register_id = uhu.url_register_id',
        )
      .where("uhu.user_id = :id", { id: user_id })
      .select([
        'ur.id AS url_register_id',
        'uhu.user_id AS user_id',
        'ur.url_basic AS url_basic',
        'usp.shortned_param AS shortned_param',
        'ur.created_on AS created_on',
      ])
      .execute();
      
    return urlRegistered;
  }
}