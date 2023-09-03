import { z } from 'zod';
import { userRole } from '../user/user.constant';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.enum([...userRole] as [string, ...string[]]),
    contactNo: z.string({
      required_error: 'Contact No is required',
    }),
    address: z.string({
      required_error: 'Adress is required',
    }),
    profileImg: z.string({
      required_error: 'Profile img is required',
    }),
  }),
});

const loginZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const AuthValidation = {
  createUserZodSchema,
  loginZodSchema,
};
