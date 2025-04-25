import { Request, Response } from "express";
import UsersService from "../services/users";

class UserController {
  userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  getAllUsers(req: Request, res: Response) {
    const users = this.userService.getAllUsers();
    if (users.length === 0) {
      return res.status(404).json({
        message: "No users found"
      });
    }
    res.json(users);
  }

  getById(req: Request, res: Response) { 
    const { id } = req.params;
    
    res.json({
      message: `User with id ${id}`
    });
  }
}

export default UserController;
