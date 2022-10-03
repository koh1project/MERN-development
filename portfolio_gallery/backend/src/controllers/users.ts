import * as mongoose from 'mongoose';
import { User, UserSchema } from '../models';
import { Request, Response } from 'express';

const User = mongoose.model<User>('User', UserSchema);

export class UsersController {
  public async createUser(req: Request, res: Response) {
    // const user = new User(req.body);
    const user = new User({ name: 'test', email: 'test@mail.com' });
    await user.save();
    res.status(201).send(user);
  }

  public async fetchUsers(req: Request, res: Response) {
    const users = await User.find({});
    res.status(200).send(users);
  }
}
