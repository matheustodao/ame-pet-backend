import { Router } from 'express';
import { createUser } from '../useCases/User/create';
import { listUser } from '../useCases/User/list';

const router = Router();

router.post('/user', createUser);
router.get('/user', listUser)

export { router };
