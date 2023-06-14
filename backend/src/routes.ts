import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateUrlController } from "./controllers/CreateUrlController";
import { GetUserUrlController } from "./controllers/GetUserUrlController";
import { CreateUrlAccessLogController } from "./controllers/CreateUrlAccessLogController";
import { DeleteUserUrlController } from "./controllers/DeleteUserUrlController";
import { GetMostAcessedUrlsController } from "./controllers/GetMostAcessedUrlsController";
import { GetUrlInfoController } from "./controllers/GetUrlInfoController";
import { AuthenticateUserController } from "./controllers/AuthenticateUser";
import setAuthMiddleware from "./middlewares/setAuthMiddleware";
import protectAuthMiddleware from "./middlewares/protectAuthMiddleware";

const routes = Router();

routes.post("/auth", new AuthenticateUserController().handle);
routes.post("/user", new CreateUserController().handle);
routes.get("/user/url", setAuthMiddleware, protectAuthMiddleware, new GetUserUrlController().handle);
routes.delete("/user/url", setAuthMiddleware, protectAuthMiddleware, new DeleteUserUrlController().handle);

routes.post("/url", setAuthMiddleware, new CreateUrlController().handle);
routes.post("/url/access", new CreateUrlAccessLogController().handle);
routes.get("/url/most-access", new GetMostAcessedUrlsController().handle);
routes.get("/url/:shortned_param", new GetUrlInfoController().handle);

export {routes};