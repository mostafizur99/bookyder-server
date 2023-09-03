import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    publicationDate: z.string({
      required_error: 'Publication Date is required',
    }),
    categoryId: z.string({
      required_error: 'Category id is required',
    }),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .optional(),
    author: z
      .string({
        required_error: 'Author is required',
      })
      .optional(),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .optional(),
    genre: z
      .string({
        required_error: 'Genre is required',
      })
      .optional(),
    publicationDate: z
      .string({
        required_error: 'Publication Date is required',
      })
      .optional(),
    categoryId: z
      .string({
        required_error: 'Category id is required',
      })
      .optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
};
