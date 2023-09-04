## Bookyder Service

### Description:

This is a backend server developed with `PostgreSQL`, `Prisma`, `Express.js` having user authentication and some other Routes.

### Live Link: https://example.com

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/login (POST)
- api/v1/users (GET)
- api/v1/users/59160856-f7cd-4a18-a94a-58468a43113e (Single GET)
- api/v1/users/59160856-f7cd-4a18-a94a-58468a43113e (PATCH)
- api/v1/users/f8e31abb-5d3c-4c83-9b5e-d1fd7b149ddf" (DELETE)
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/e8b46c97-5c2c-49cd-8dd8-d038675e9ef (Single GET)
- api/v1/categories/e8b46c97-5c2c-49cd-8dd8-d038675e9ef (PATCH)
- api/v1/categories/e8b46c97-5c2c-49cd-8dd8-d038675e9ef (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/ee425364-20f5-45f8-b46f-0c4bdf3e2ac5/category (GET)
- api/v1/books/f35562ef-878d-432a-8090-e8d3afe3cede (GET)
- api/v1/books/f35562ef-878d-432a-8090-e8d3afe3cede (PATCH)
- api/v1/books/c1c28fde-d7fc-4ab8-be90-c2cd9c776c79 (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/81343d58-50c9-4d03-a8c8-c2a20d6338cf(GET)
