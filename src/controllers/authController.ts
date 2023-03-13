import { Request, Response } from 'express';
import { User } from '../models/User';

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.create(
    {
      email,
      password,
    },
    { logging: false },
  );

  res.send(user);
};

export const authController = {
  register,
};
