import { AppDataSource } from "../data-source";
import { UrlAcessLog } from "../entities/UrlAcessLog";

type UrlAccessLogRequest = {
  url_register_id: number;
  user_id: number;
};

export class CreateUrlAccessLog {
  async execute ({url_register_id, user_id} : UrlAccessLogRequest) : Promise <UrlAcessLog | Error>{
    const repo = AppDataSource.getRepository(UrlAcessLog);

    const user = repo.create({url_register_id, user_id});

    await repo.save(user);

    return user;
  }
}