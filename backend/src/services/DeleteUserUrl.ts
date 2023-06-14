import { AppDataSource } from "../data-source";
import { UrlAcessLog } from "../entities/UrlAcessLog";
import { UserHasUrlRequest } from "../types";

export class DeleteUserUrl {
  async execute ({url_register_id, user_id} : UserHasUrlRequest) : Promise <void | Error>{
    const repo = AppDataSource.getRepository(UrlAcessLog);

    if(!(await repo.findOne({where: {url_register_id, user_id}}))) {
      return new Error("Não foi possível deletar url, pois a mesma não está listada para este usuário")
    }

    await repo.delete({url_register_id, user_id});

  }
}