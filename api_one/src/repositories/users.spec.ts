import UserRepository from "./users";
import User from "../models/users";

jest.mock("../models/users");

describe('Users Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should be defined', () => {
    expect(UserRepository).toBeDefined();
  });

  it('should return all users', async () => {
    const userRepository = new UserRepository();
    const users = await userRepository.getAllUsers();

    expect(users).toHaveLength(2);
    // Check if the mock function was called
    expect(User.findAll).toHaveBeenCalledTimes(1);
  });

  it('should get an user by id', async () => {
    const userRepository = new UserRepository();
    const userId = 1;
    const user = await userRepository.getById(userId);

    expect(user).toBeDefined();
    expect(user).toHaveProperty('id', userId);
    expect(user).toHaveProperty('name', 'John');
    expect(user).toHaveProperty('lastName', 'Doe');
    expect(user).toHaveProperty('email', 'john@doe.com');

    expect(User.findByPk).toHaveBeenCalledWith(userId);
  });

  it('should create a user', async () => {
    const userRepository = new UserRepository();

    const newUser = {
      id: 3,
      name: "Alice",
      lastName: "Johnson",
      email: "alice@johnson.com",
      password: "alicepassword"
    } as User;

    const user = await userRepository.createUser(newUser);

    expect(user).toBeDefined();
    expect(user).toHaveProperty('id', 3);

    expect(user).toHaveProperty('createdAt');
    expect(user).toHaveProperty('updatedAt');

    expect(User.create).toHaveBeenCalledWith(newUser);
  });
});
