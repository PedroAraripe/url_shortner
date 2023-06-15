import { AppDataSource } from "../data-source";
import { UserHasUrl } from "../entities/UserHasUrl";
import { UserHasUrlRequest } from "../types/common";

export class DeleteUserUrl {
  async execute ({url_register_id, user_id} : UserHasUrlRequest) : Promise <void | Error>{
    const repo = AppDataSource.getRepository(UserHasUrl);
    const foundInDB = await repo.findOne({where: {url_register_id, user_id}});

    if(!(foundInDB)) {
      return new Error("Não foi possível deletar url, pois a mesma não está listada para este usuário")
    }

    await repo.delete({url_register_id, user_id});

  }
}