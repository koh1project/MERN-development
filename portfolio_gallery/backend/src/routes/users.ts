import { Router } from 'express';

import { createUser, fetchUsers } from '../controllers/users';

export const router = Router();

router.get('/', fetchUsers);
