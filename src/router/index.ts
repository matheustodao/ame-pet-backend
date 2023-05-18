import { Router } from 'express';
import { createUser } from '../useCases/User/create';
import { listUser } from '../useCases/User/list';
import { loginUser } from '../useCases/User/login';
import { createOng } from '../useCases/Ong/create';
import { createIncident } from '../useCases/Incident/create';
import { getByIdIncident } from '../useCases/Incident/getById';
import { changeStatusIncident } from '../useCases/Incident/changeStatus';

const router = Router();

router.post('/user', createUser);
router.get('/user', listUser)

router.post('/login', loginUser)

router.post('/ong', createOng)

router.post('/incident', createIncident)
router.get('/incident/:id', getByIdIncident)
router.patch('/incident/:id', changeStatusIncident)

export { router };
