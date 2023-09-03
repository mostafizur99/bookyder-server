export type IBookFilterRequest = {
  searchTerm?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  category?: string | undefined;
};
