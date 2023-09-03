import prisma from '../../../shared/prisma';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { ILoginUseResponse, ILoginUser } from './auth.interface';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const createUser = async (userInput: User): Promise<User> => {
  // default password
  if (!userInput.password) {
    userInput.password = config.default_user_pass as string;
  }

  // hash password
  userInput.password = await bcrypt.hash(
    userInput.password,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await prisma.user.create({
    data: userInput,
  });
  return result;
};

const loginUser = async (payload: ILoginUser): Promise<ILoginUseResponse> => {
  const { email, password } = payload;

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  // verify password
  if (
    isUserExist.password &&
    !(await bcrypt.compare(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  //create access token & refresh token
  const { id: userId, email: userEmail, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, email: userEmail, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, email: userEmail, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  createUser,
  loginUser,
};
