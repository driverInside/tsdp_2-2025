import { Router, Request, Response } from "express";

const userController = Router();

userController.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Retrieve all users'
  });
});

export default userController;
