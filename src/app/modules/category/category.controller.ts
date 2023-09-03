import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const categoryInput = req.body;
    const result = await CategoryService.createCategory(categoryInput);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category created successfully',
      data: result,
    });
  }
);

const getCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getCategories();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories fetched successfully',
    data: result,
  });
});

const getCategoryById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getCategoryById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    data: result,
  });
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await CategoryService.updateCategory(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
