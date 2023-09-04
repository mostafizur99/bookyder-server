import express from 'express';
const router = express.Router();
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';

router.get('/', auth(), UserController.getUserProfile);

export const ProfileRoutes = router;
