import UserRepository from "../repositories/users";
import User from "../models/users";

class UsersService {
  private usersRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.usersRepository = userRepository;
  }

  // 1. que obtenga todos los users (un arreglo)
  // 2. use la dependencia, en este caso usersRepository
  //   2.1 que la use solo una vez.
  // 3. Que no terminen en '.net'
  async getAllUsers(invalidNet: boolean = false): Promise<User[]> {
    const users = await this.usersRepository.getAllUsers();

    return invalidNet ? users.filter(user => !user.email.endsWith('.net')) : users;
  }

  // 1. Que obtenga un usuario by id
  // 1.2. use la dependencia y que solo la use una sola vez
  // --
  // 2. Que regrese null si el id no se encuentra
  // 2.1 use la dependencia y que solo la use una vez.
  getById(id: number): Promise<User | null> {
    return this.usersRepository.getById(id);
  }

  createUser({ name, lastName, password, email }: { name: string, lastName: string, password: string, email: string }): Promise<User> {
    return this.usersRepository.createUser({ name, lastName, password, email } as User);
  }
}

export default UsersService;