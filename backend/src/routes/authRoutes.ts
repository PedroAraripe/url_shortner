import { AuthenticateUserController } from "../controllers/AuthenticateUser";

const express = require('express');
const router = express.Router();

router.post("/", new AuthenticateUserController().handle);

export {router as authRouter};