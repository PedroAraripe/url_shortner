import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUserRegister1686604395064 } from "./migration/1686604395064-CreateUserRegister"
import { CreateUrlShortnedParam1686610905490 } from "./migration/1686610905490-CreateUrlShortnedParam"
import { CreateUrlRegister1686610918631 } from "./migration/1686610918631-CreateUrlRegister"
import { CreateUserHasUrl1686611013820 } from "./migration/1686611013820-CreateUserHasUrl"
import { CreateUrlAccessLog1686616201056 } from "./migration/1686616201056-CreateUrlAccessLog"
// import { User } from "./entity/User"
console.log('acessando ddls')

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "secret",
    database: "main_db",
    synchronize: true,
    logging: true,
    entities: [
        // User
    ],
    migrations: [
        CreateUserRegister1686604395064,
        CreateUrlShortnedParam1686610905490,
        CreateUrlRegister1686610918631,
        CreateUserHasUrl1686611013820,
        CreateUrlAccessLog1686616201056

        // TODO
        // IMPLEMENT VIEWS
    ],
    subscribers: [],
})
