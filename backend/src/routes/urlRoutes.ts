import { CreateUrlAccessLogController } from "../controllers/CreateUrlAccessLogController";
import { CreateUrlController } from "../controllers/CreateUrlController";
import { GetMostAcessedUrlsController } from "../controllers/GetMostAcessedUrlsController";
import { GetUrlInfoController } from "../controllers/GetUrlInfoController";
import setAuthMiddleware from "../middlewares/setAuthMiddleware";

const express = require('express');
const router = express.Router();

router.post("/url", setAuthMiddleware, new CreateUrlController().handle);
router.post("/url/access", new CreateUrlAccessLogController().handle);
router.get("/url/most-access", new GetMostAcessedUrlsController().handle);
router.get("/url/:shortned_param", new GetUrlInfoController().handle);

export {router as urlRouter};