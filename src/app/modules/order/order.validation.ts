import { z } from 'zod';

const createOrderZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'User-id is required',
    }),
    status: z.string().optional(),
    orderedBooks: z.array(
      z.object({
        bookId: z.string(),
        quantity: z.number(),
      })
    ),
  }),
});

export const OrderValidation = {
  createOrderZodSchema,
};
