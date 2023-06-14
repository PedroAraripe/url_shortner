import { AppDataSource } from "../data-source";
import { UserRegister } from "../entities/UserRegister";
import { UserRequest } from "../types";

export class CreateUserService {
  async execute ({login, password} : UserRequest) : Promise <UserRegister | Error>{
    const repo = AppDataSource.getRepository(UserRegister);

    if(await repo.findOne({where: {login}})) {
      return new Error("Nome para login indisponível")
    }

    const user = repo.create({
      login,
      password
    });

    await repo.save(user);

    return user;
  }
}