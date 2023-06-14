import { AppDataSource } from "../data-source";
import { UserHasUrl } from "../entities/UserHasUrl";

type UserHasUrlRequest = {
  user_id: number;
};

type UserHasUrlResponse = {
  url_basic: string;
  shortned_param: string;
  id: number;
  created_on: Date
};

export class GetUserUrl {
  async execute ({user_id} : UserHasUrlRequest) : Promise <UserHasUrlResponse[]>{
    const repo = AppDataSource.getRepository(UserHasUrl);
    
    const urlRegistered : UserHasUrlResponse[] = await repo.createQueryBuilder("uhu")
      .leftJoinAndSelect(
        'url_register',
        'ur',
        'ur.id = uhu.url_register_id',
      )
      .leftJoinAndSelect(
        'url_shortned_param',
        'usp',
        'usp.url_register_id = uhu.url_register_id',
        )
      .where("uhu.user_id = :id", { id: user_id })
      .select([
        'ur.url_basic AS url_basic',
        'usp.shortned_param AS shortned_param',
        'ur.id AS id',
        'ur.created_on AS created_on',
      ])
      .execute();
      
      console.log(urlRegistered)

    return urlRegistered;
  }
}