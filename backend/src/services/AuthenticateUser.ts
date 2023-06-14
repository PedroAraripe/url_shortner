import { AppDataSource } from "../data-source";
import { UserRegister } from "../entities/UserRegister";
import { AuthenticatedUserResponse, UserRequest } from "../types/common";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthenticateUserService {
  async execute ({login, password} : UserRequest) : Promise <AuthenticatedUserResponse | Error>{
    const defaultAuthErrorMessage =  () => new Error("Senha ou login inválidos");

    const repo = AppDataSource.getRepository(UserRegister);

    const user = await repo.findOne({where: {login}})

    if(!user) {
      return defaultAuthErrorMessage();
    }
    
    const isValidPassword = await bcrypt.compare(password.toString(), user.password);
    
    if(!isValidPassword) {
      return defaultAuthErrorMessage();
    }

    const token = jwt.sign({id : user.id}, 'secret', {expiresIn: '1d'});

    return {
      id: user.id,
      login: user.login,
      token,
    }
  }
}