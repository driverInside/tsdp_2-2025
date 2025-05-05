import User from '../models/users';

class UserRepository {
  constructor() {}

  getAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  createUser(user: User): Promise<User> {
    return User.create(user);
  }

  getById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }
}

export default UserRepository;
