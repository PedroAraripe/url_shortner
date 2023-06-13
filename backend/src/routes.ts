import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateUrlController } from "./controllers/CreateUrlController";
import { GetUserUrlController } from "./controllers/GetUserUrlController";

const routes = Router();

routes.post("/user", new CreateUserController().handle);
routes.get("/user/url", new GetUserUrlController().handle);


routes.post("/url", new CreateUrlController().handle);

export {routes};