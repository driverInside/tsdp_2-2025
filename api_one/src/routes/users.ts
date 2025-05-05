import { Router } from "express";

import UserController from "../controllers/users";
import UsersService from "../services/users";
import UserRepository from "../repositories/users";

const userRepository = new UserRepository();
const usersService = new UsersService(userRepository);
const userController = new UserController(usersService);
const userRouter = Router();

userRouter.get("/", userController.getAllUsers.bind(userController));
userRouter.get("/:id", userController.getById.bind(userController));
userRouter.post("/", userController.createUser.bind(userController));

export default userRouter;

