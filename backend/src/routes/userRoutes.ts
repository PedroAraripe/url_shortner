import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserUrlController } from "../controllers/DeleteUserUrlController";
import { GetUserUrlController } from "../controllers/GetUserUrlController";
import protectAuthMiddleware from "../middlewares/protectAuthMiddleware";
import setAuthMiddleware from "../middlewares/setAuthMiddleware";

const express = require('express');
const router = express.Router();

router.post("/", new CreateUserController().handle);
router.get("/url", setAuthMiddleware, protectAuthMiddleware, new GetUserUrlController().handle);
router.delete("/url", setAuthMiddleware, protectAuthMiddleware, new DeleteUserUrlController().handle);

export {router as userRouter};