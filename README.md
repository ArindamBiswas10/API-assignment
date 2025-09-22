# Auth API

## Project Overview
A simple Node.js/Express backend for authentication flows: Register, Login, Forgot Password, and Reset Password. Supports JSON requests and returns responses with status messages and tokens.

Features

User Registration

User Login (returns JWT token)

Forgot Password (sends token via email)

Reset Password using token

Input validation and error handling




## Installation
Clone the repository:

git clone https://github.com/yourusername/auth-api.git
cd auth-api


Install dependencies:

npm install


Create a .env file (example):

PORT=3000
DB_URL=your_database_url
JWT_SECRET=your_jwt_secret


Start the server:

node server.js
# or if you have nodemon
nodemon server.js

## Example Requests
Register:

POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "pass123"
}


Login:

POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "username": "john",
  "password": "pass123"
}


Forgot Password:

POST http://localhost:3000/api/auth/forget-password
Content-Type: application/json

{
  "email": "john@example.com"
}


Reset Password:

POST http://localhost:3000/api/auth/reset-password
Content-Type: application/json

{
  "token": "RESET_TOKEN",
  "newPassword": "newpass123"
}


## Screenshots
