import express from 'express';
const router = express.Router();
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getUsers);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getUserById);
router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.updateUser
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser);

export const UserRoutes = router;
