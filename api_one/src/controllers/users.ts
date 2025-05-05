import { Request, Response } from "express";
import UsersService from "../services/users";

class UserController {
  userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    if (users.length === 0) {
      res.status(404).json({
        message: "No users found"
      });

      return;
    }
    res.json(users);
  }

  getById(req: Request, res: Response) { 
    const { id } = req.params;
    
    res.json({
      message: `User with id ${id}`
    });
  }

  async createUser(req: Request, res: Response) {
    const { name, lastName, password, email } = req.body;

    const user = await this.userService.createUser({
      name,
      lastName,
      password,
      email
    })

    res.status(201).json({
      message: "User created",
      user
    });
  }
}

export default UserController;
