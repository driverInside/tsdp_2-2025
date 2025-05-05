import UserRepository from "../repositories/users";
import User from "../models/users";

class UsersService {
  private usersRepository: UserRepository;

  constructor (userRepository: UserRepository) {
    this.usersRepository = userRepository;
  }

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.getAllUsers();
  }

  getById(id: number) {
    return {
      message: `User with id ${id}`
    };
  }

  createUser({ name, lastName, password, email}: { name: string, lastName: string, password: string, email: string}): Promise<User> {
    return this.usersRepository.createUser({ name, lastName, password, email} as User);
  }
}

export default UsersService;