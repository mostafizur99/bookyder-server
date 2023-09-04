import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IAuthUser, IOrderInput } from './order.interface';

const createOrder = async (orderInput: IOrderInput): Promise<Order> => {
  const result = await prisma.order.create({
    data: {
      userId: orderInput.userId,
      orderedBooks: {
        create: orderInput.orderedBooks,
      },
    },
    include: {
      orderedBooks: true,
    },
  });
  return result;
};

const getOrders = async (user: IAuthUser): Promise<Order[]> => {
  const { role, userId } = user;
  let result;
  if (role === 'customer') {
    result = await prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        orderedBooks: true,
      },
    });
  } else {
    result = await prisma.order.findMany({
      include: {
        orderedBooks: true,
      },
    });
  }

  return result;
};

const getOrderById = async (
  id: string,
  user: IAuthUser
): Promise<Order | null> => {
  const { role, userId } = user;
  let result;
  if (role === 'customer') {
    result = await prisma.order.findUnique({
      where: {
        id,
        userId,
      },
      include: {
        orderedBooks: true,
      },
    });
  } else {
    result = await prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        orderedBooks: true,
      },
    });
  }

  return result;
};

export const OrderService = {
  createOrder,
  getOrders,
  getOrderById,
};
