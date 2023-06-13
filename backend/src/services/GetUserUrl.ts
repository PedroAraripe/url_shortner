import { AppDataSource } from "../data-source";
import { UserHasUrl } from "../entities/UserHasUrl";

type UserHasUrlRequest = {
  user_id: number;
};

export class GetUserUrl {
  async execute ({user_id} : UserHasUrlRequest) : Promise <UserHasUrl[]>{
    const repo = AppDataSource.getRepository(UserHasUrl);
    
    const urlRegistered = await repo.find({
      relations: ["url_register"],
      where: {user_id},
    });

    return urlRegistered;
  }
}