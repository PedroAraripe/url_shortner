import { AppDataSource } from "../data-source";
import { UserHasUrl } from "../entities/UserHasUrl";

type UserHasUrlRequest = {
  url_register_id: number;
  user_id: number;
};

export class CreateUserHasUrlService {
  async execute ({url_register_id, user_id} : UserHasUrlRequest) : Promise <UserHasUrl | Error>{
    const repo = AppDataSource.getRepository(UserHasUrl);

    let userHasUrl = await repo.findOne({where: {url_register_id, user_id}});

    if(userHasUrl) {
      return new Error("Url já foi adicionada a lista do usuário");
    }

    userHasUrl = repo.create({url_register_id, user_id});
    await repo.save(userHasUrl);
    
    return userHasUrl;
  }
}