import { Router } from "express";

import UserController from "../controllers/users";
import UsersService from "../services/users";

const usersService = new UsersService();
const userController = new UserController(usersService);
const userRouter = Router();

userRouter.get("/", userController.getAllUsers.bind(userController));
userRouter.get("/:id", userController.getById.bind(userController));

export default userRouter;

