import { create } from "domain";

const mockUserModel = {
  findAll: jest.fn(() => Promise.resolve([
    {
      id: 1,
      name: "John",
      lastName: "Doe",
      email: "john@doe.com",
      password: "password123",
    },
    {
      id: 2,
      name: "Jane",
      lastName: "Smith",
      email: "jane@doe.com",
      password: "987654321",
    },
  ])),
  findByPk: jest.fn((id) => {
    return Promise.resolve({
      id,
      name: "John",
      lastName: "Doe",
      email: "john@doe.com",
      password: "123456",
    });
  }),
  create: jest.fn((user) => {
    return Promise.resolve({
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...user,
    })
  }),
};

export default mockUserModel;
