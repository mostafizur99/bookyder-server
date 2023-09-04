export type IOrderInput = {
  userId: string;
  orderedBooks: [
    {
      bookId: string;
      quantity: number;
    }
  ];
};

export type IAuthUser = {
  userId: string;
  email: string;
  role: string;
};
