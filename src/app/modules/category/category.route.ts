import express from 'express';
const router = express.Router();
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';

router.post(
  '/create-category',
  validateRequest(CategoryValidation.createCategoryZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.createCategory
);
router.get('/:id', CategoryController.getCategoryById);
router.get('/', CategoryController.getCategories);
router.patch(
  '/:id',
  validateRequest(CategoryValidation.updateCategoryZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.updateCategory
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory
);

export const CategoryRoutes = router;
