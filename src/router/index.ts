import { Router } from 'express';
import { createUser } from '../useCases/User/create';
import { listUser } from '../useCases/User/list';
import { loginUser } from '../useCases/User/login';

const router = Router();

router.post('/user', createUser);
router.get('/user', listUser)

router.post('/login', loginUser)

export { router };
