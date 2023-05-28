import { Router } from 'express';
import { createUser } from '../useCases/User/create';
import { listUser } from '../useCases/User/list';
import { loginUser } from '../useCases/User/login';
import { createOng } from '../useCases/Ong/create';
import { createIncident } from '../useCases/Incident/create';
import { getByIdIncident } from '../useCases/Incident/getById';
import { changeStatusIncident } from '../useCases/Incident/changeStatus';
import { AuthMiddleware } from '../middleware/authMiddleware';
import axios from 'axios';
import { getNearbyClinics } from '../useCases/maps/places/getNearbyClinics';

const router = Router();

router.post('/user', createUser);
router.get('/user', AuthMiddleware, listUser);

router.use('/incident', AuthMiddleware,
  router.post('/', createIncident),
  router.get('/:id', getByIdIncident),
  router.patch('/:id', changeStatusIncident),
)

router.use('/maps', AuthMiddleware,
  router.get('/nearby/clinics', getNearbyClinics)
)

router.post('/login', loginUser)

router.post('/ong', createOng)

export { router };
