import { AppDataSource } from "../data-source";
import { UserHasUrl } from "../entities/UserHasUrl";

type UserHasUrlRequest = {
  url_register_id: number;
  user_id: number;
};

export class CreateUserHasUrlService {
  async execute ({url_register_id, user_id} : UserHasUrlRequest) : Promise <UserHasUrl | Error>{
    const repo = AppDataSource.getRepository(UserHasUrl);

    const user = repo.create({url_register_id, user_id});

    await repo.save(user);

    return user;
  }
}