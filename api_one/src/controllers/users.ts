import { Router, Request, Response } from "express";

const userController = Router();

// GET /users
userController.get('/', (req: Request, res: Response) => {
  const users = [
    {
      name: 'John',
      lastName: 'Doe',
      age: 30
    },
    {
      name: 'Jane',
      lastName: 'Doe',
      age: 29
    }
  ];
  res.json({
    users
  });
});

// GET /users/:id
userController.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Retrieve user with id ${id}`
  });
});
// POST /users
userController.post('/', (req: Request, res: Response) => {
  const { name, email } = req.body;
  res.json({
    message: `Create user with name ${name} and email ${email}`
  });
});
// PUT /users/:id
userController.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({
    message: `Update user with id ${id} to name ${name} and email ${email}`
  });
});
// DELETE /users/:id
userController.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Delete user with id ${id}`
  });
});
// PATCH /users/:id
userController.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({
    message: `Patch user with id ${id} to name ${name} and email ${email}`
  });
});

export default userController;
