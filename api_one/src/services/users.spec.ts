import UsersService from "./users";
import UserRepository from "../repositories/users";
import User from "../models/users";

const mockUsers = [
  {
    id: 1,
    name: 'Anne',
    lastName: 'Newton',
    email: 'anne@newton.com',
    password: '123456'
  },
  {
    id: 2,
    name: 'Bob',
    lastName: 'Tesla',
    email: 'bob@tesla.net',
    password: '654321'
  },
  {
    id: 3,
    name: 'Charlie',
    lastName: 'Einstein',
    email: 'char@lie.com',
    password: '123abc'
  },
  {
    id: 4,
    name: 'Danny',
    lastName: 'Phantom',
    email: 'danny@phantom.com',
    password: '123456'
  },
  {
    id: 5,
    name: 'Ernest',
    lastName: 'Foo',
    email: 'ernest@foo.net',
    password: '987xyz'
  }
] as User[];

describe('Users Service', () => {
  let userService: UsersService;
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
    userService = new UsersService(userRepository);

    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(UsersService).toBeDefined();
  });

  it('should return all the users', async () => {
    const spyGetAllUsers = jest
      .spyOn(UserRepository.prototype, 'getAllUsers')
      .mockResolvedValue(mockUsers);

    const users = await userService.getAllUsers();

    expect(users).toHaveLength(5);
    users.forEach(user => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('lastName');
      expect(user).toHaveProperty('email');
    });
    expect(spyGetAllUsers).toHaveBeenCalledTimes(1);
  });

  it('should filter the .net email users', async () => {
    const spyFilteredUsers = jest
      .spyOn(UserRepository.prototype, 'getAllUsers')
      .mockResolvedValue(mockUsers);

    const users = await userService.getAllUsers(true);

    expect(users).toHaveLength(3);
    expect(spyFilteredUsers).toHaveBeenCalledTimes(1);
  });

  it('should return an user by id', async () => {
    const spyGetById = jest
      .spyOn(UserRepository.prototype, 'getById')
      .mockImplementation((id) => {
        const mockUser = mockUsers.find(user => user.id === id);
        return Promise.resolve(mockUser as User);
      });

    const user = await userService.getById(2);

    expect(user).toStrictEqual({
      id: 2,
      name: 'Bob',
      lastName: 'Tesla',
      email: 'bob@tesla.net',
      password: '654321'
    });
    
    expect(spyGetById).toHaveBeenCalledTimes(1);
    expect(spyGetById).toHaveBeenCalledWith(2);
  });

  it('should return null if the user is not found', async () => {
    const spyGetById = jest
      .spyOn(UserRepository.prototype, 'getById')
      .mockResolvedValue(null);

    const user = await userService.getById(7);

    expect(spyGetById).toHaveBeenCalledTimes(1);
    expect(spyGetById).toHaveBeenCalledWith(7);

    expect(user).toBeNull();
  });
});
