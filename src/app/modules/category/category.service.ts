import { Category, User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { ICategoryResponse } from './category.interface';

const createCategory = async (
  categoryInput: Category
): Promise<ICategoryResponse> => {
  const result = await prisma.category.create({
    data: categoryInput,
    select: {
      title: true,
    },
  });
  return result;
};

const getCategories = async (): Promise<ICategoryResponse[]> => {
  const result = await prisma.category.findMany({
    select: {
      id: true,
      title: true,
    },
  });
  return result;
};

const getCategoryById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    // select: {
    //   id: true,
    //   title: true,
    // },
    include: {
      books: true,
    },
  });
  return result;
};

const updateCategory = async (
  id: string,
  payload: Partial<User>
): Promise<ICategoryResponse> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
    select: {
      id: true,
      title: true,
    },
  });
  return result;
};

const deleteCategory = async (id: string): Promise<ICategoryResponse> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
    },
  });
  return result;
};

export const CategoryService = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
