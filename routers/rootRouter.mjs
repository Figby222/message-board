import { Router } from "express";
import * as rootController from "../controllers/rootController.mjs";

const rootRouter = Router();

rootRouter.get("/", rootController.getRootPage);

rootRouter.get("/new", rootController.getMessageForm);

export default rootRouter;