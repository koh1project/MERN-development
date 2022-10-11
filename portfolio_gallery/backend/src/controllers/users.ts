import * as mongoose from 'mongoose';

import { User, UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model<User>('User', UserSchema);
//@TODO: Remove after checking basic connection from browser to database
export const fetchUsers = async (req: Request, res: Response) => {
  const users = await User.find({});
  res.status(200).send(users);
};

//@TODO: Should be re-written from TDD process
export const createUser = async (req: Request, res: Response) => {
  // const user = new User(req.body);
  const user = new User({ name: 'test', email: 'test@mail.com' });
  await user.save();
  res.status(201).send(user);
};
