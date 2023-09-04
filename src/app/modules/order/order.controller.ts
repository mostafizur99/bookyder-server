import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';
import { IAuthUser } from './order.interface';

const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const categoryInput = req.body;
    const result = await OrderService.createOrder(categoryInput);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book created successfully',
      data: result,
    });
  }
);

const getOrders = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as IAuthUser;
  const result = await OrderService.getOrders(user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.user as IAuthUser;
  const result = await OrderService.getOrderById(id, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getOrders,
  getOrderById,
};
