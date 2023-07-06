# Node_Assignment_CipherSchool
## Introduction

This Node.js assignment involves creating an API to manage products and users using the Express framework and MongoDB database. The API should allow users to create, retrieve, update, and delete products and users as needed.
Technologies Used

    Node.js
    Express.js
    MongoDB
    Mongoose
    Body-parser
    Cors
    Dotenv

## API Routes
### Products Management

    POST /api/products: Create a new product with attributes like name, description, price, etc.
    GET /api/products: Retrieve a list of all products.
    GET /api/products/:id: Retrieve details of a specific product by its ID.
    PATCH /api/products/:id: Update the details of an existing product.
    DELETE /api/products/:id: Delete a product from the system.

### User Management

    POST /api/users: Create a new user with attributes like name, email, password, address, etc.
    GET /api/users: Retrieve a list of all users.
    GET /api/users/:id: Retrieve details of a specific user by their ID.
    PATCH /api/users/:id: Update the details of an existing user.
    DELETE /api/users/:id: Delete a user from the system.

## How to Run the API

#### To run the API, follow these steps:

    Clone the repository to your local machine.
    Install dependencies by running npm install.
    Create a .env file and set the environment variables as needed.
    Start the server by running npm start.

#### The server will start listening on the specified port (or port 3000 by default). You can use a tool like Postman to test the API endpoints.
## Conclusion

#### This Node.js assignment involves creating an API to manage products and users using the Express framework and MongoDB database. By implementing the above API routes, users can create, retrieve, update, and delete products and users as needed.
