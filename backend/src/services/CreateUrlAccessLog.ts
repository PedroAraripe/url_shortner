import { guestUserId } from "../constants";
import { AppDataSource } from "../data-source";
import { UrlAcessLog } from "../entities/UrlAcessLog";
import { UserHasUrlRequest } from "../types/common";
export class CreateUrlAccessLog {
  async execute ({url_register_id, user_id} : UserHasUrlRequest) : Promise <UrlAcessLog | Error>{
    const repo = AppDataSource.getRepository(UrlAcessLog);

    const user = repo.create({
      url_register_id, 
      user_id: user_id ?? guestUserId
    });

    await repo.save(user);

    return user;
  }
}