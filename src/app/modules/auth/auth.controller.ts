import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import _ from 'lodash';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';
import config from '../../../config';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userInput = req.body;
    const result = await AuthService.createUser(userInput);

    const resultData = JSON.parse(JSON.stringify(result));
    const newResult = _.omit(resultData, ['password']);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User created successfully!',
      data: newResult,
    });
  }
);

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);
  const { refreshToken, accessToken } = result;

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<string>(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully',
    token: accessToken,
  });
});

export const AuthController = {
  createUser,
  loginUser,
};
