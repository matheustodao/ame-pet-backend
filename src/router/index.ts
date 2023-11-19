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
import { getPlaceDetails } from '../useCases/maps/places/getPlaceDetails';
import { RoutesRepository } from '../repositories/RoutesRepository';
import { indexOng } from '../useCases/Ong';
import { getIncidentByUserId } from '../useCases/Incident/getIncidentByUserId';

const router = Router();

router.get('/', (req, res) => res.json({ hello: 'world' }))

router.post('/user', createUser);
router.get('/user', listUser);

router.get('/maps/nearby/clinics', getNearbyClinics),
router.get('/maps/place/:place_id', getPlaceDetails),
router.get('/maps/route', RoutesRepository.show)

router.post('/ong', createOng)
router.get('/ong', indexOng)

router.post('/login', loginUser)

router.post('/incident', createIncident)
router.get('/incident/:id', getByIdIncident)
router.get('/incident/user/:id', getIncidentByUserId)
router.patch('/incident/:id', changeStatusIncident)

export { router };
