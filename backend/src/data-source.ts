import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUserRegister1686604395064 } from "./database/migration/1686604395064-CreateUserRegister"
import { CreateUrlShortnedParam1686610905490 } from "./database/migration/1686610905490-CreateUrlShortnedParam"
import { CreateUrlRegister1686610918631 } from "./database/migration/1686610918631-CreateUrlRegister"
import { CreateUserHasUrl1686611013820 } from "./database/migration/1686611013820-CreateUserHasUrl"
import { CreateUrlAccessLog1686616201056 } from "./database/migration/1686616201056-CreateUrlAccessLog"
import { UserRegister } from "./entities/UserRegister"
import { UrlShortnedParam } from "./entities/UrlShortnedParam"
import { UrlRegister } from "./entities/UrlRegister"
import { UrlAcessLog } from "./entities/UrlAcessLog"
import { UserHasUrl } from "./entities/UserHasUrl"

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
        UserRegister,
        UrlShortnedParam,
        UrlRegister,
        UrlAcessLog,
        UserHasUrl
    ],
    migrations: [
        CreateUserRegister1686604395064,
        CreateUrlRegister1686610918631,
        CreateUrlShortnedParam1686610905490,
        CreateUserHasUrl1686611013820,
        CreateUrlAccessLog1686616201056
    ],
    subscribers: [],
})
