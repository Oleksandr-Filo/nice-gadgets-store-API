import { Request, Response } from 'express';

const registration = async (req: Request, res: Response) => {
  res.send('Registered');
};

export const authController = {
  registration,
};
