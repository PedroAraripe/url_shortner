import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateUrlController } from "./controllers/CreateUrlController";
import { GetUserUrlController } from "./controllers/GetUserUrlController";
import { CreateUrlAccessLogController } from "./controllers/CreateUrlAccessLogController";
import { DeleteUserUrlController } from "./controllers/DeleteUserUrlController";
import { GetMostAcessedUrlsController } from "./controllers/GetMostAcessedUrlsController";
import { GetUrlInfoController } from "./controllers/GetUrlInfoController";

const routes = Router();

routes.post("/user", new CreateUserController().handle);
routes.get("/user/url", new GetUserUrlController().handle);
routes.delete("/user/url", new DeleteUserUrlController().handle);

routes.post("/url", new CreateUrlController().handle);
routes.post("/url/access", new CreateUrlAccessLogController().handle);
routes.get("/url/most-access", new GetMostAcessedUrlsController().handle);
routes.get("/url/:shortned_param", new GetUrlInfoController().handle);

export {routes};