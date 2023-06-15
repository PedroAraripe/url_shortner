import { AppDataSource } from "../data-source";
import { UrlAcessLog } from "../entities/UrlAcessLog";
import { UrlRegister } from "../entities/UrlRegister";
import { UrlShortnedParam } from "../entities/UrlShortnedParam";
import { MostAcessedUrlsResponse } from "../types/common";
export class GetMostAcessedUrls {
  async execute () : Promise <MostAcessedUrlsResponse[]>{
    const repo = AppDataSource.getRepository(UrlRegister);
    
    const urlRegistered: MostAcessedUrlsResponse[] = await repo.createQueryBuilder("ur")
      .leftJoinAndSelect(
        UrlShortnedParam,
        'usp',
        'usp.url_register_id = ur.id',
      )
      .leftJoinAndSelect(
          qb => qb
             .select([
              "count(p.url_register_id) accessed_times",
              "p.url_register_id url_register_id",
             ])
             .from(UrlAcessLog, 'p')
             .groupBy('p.url_register_id'),
          'ua',
          'ua.url_register_id = ur.id' // the answer
      )
      .limit(100)
      .select([
        'ur.id AS url_register_id',
        'ur.url_basic AS url_basic',
        'CAST(coalesce(ua.accessed_times, \'0\') AS integer) AS accessed_times',
        'usp.shortned_param AS shortned_param',
        'ur.created_on AS created_on',
      ])
      .orderBy({"coalesce(ua.accessed_times, \'0\')":"DESC"})
      .execute();
      
    return urlRegistered;
  }
}