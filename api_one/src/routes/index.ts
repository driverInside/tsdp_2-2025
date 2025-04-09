import { Router } from "express";

import userController from "../controllers/users";

const rootRouter = Router();

rootRouter.use('/users', userController);

export default rootRouter;
