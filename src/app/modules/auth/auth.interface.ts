export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUseResponse = {
  accessToken: string;
  refreshToken?: string;
};
