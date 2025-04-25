class UsersService {
  private users: { id: number; name: string }[] = [];
  constructor () {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  getById(id: number) {
    return {
      message: `User with id ${id}`
    };
  }

}

export default UsersService;