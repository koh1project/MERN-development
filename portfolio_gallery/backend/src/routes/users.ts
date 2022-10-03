import { Router } from 'express';
import { UsersController } from '../controllers';

const UsersRouter = Router();

const usersController: UsersController = new UsersController();

UsersRouter.get('/', usersController.fetchUsers);
// UsersRouter.get('/create', usersController.createUser);

export { UsersRouter };
