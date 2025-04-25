import { Router } from "express";

import userRouter from "./users";

const rootRouter = Router();

rootRouter.use('/users', userRouter);

export default rootRouter;
