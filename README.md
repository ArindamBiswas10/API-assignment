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

git clone https://github.com/ArindamBiswas10/auth-api.git
cd auth-api


Install dependencies:

npm install


Start the server:

node server.js or
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
Register
<img width="1895" height="1423" alt="image" src="https://github.com/user-attachments/assets/85a77736-1779-4c49-bda8-813f4e476e1a" />
Login
<img width="1320" height="1199" alt="image" src="https://github.com/user-attachments/assets/cf16ce25-eedc-4491-b5e9-e7cb0d7bbb96" />
Forgot Password
<img width="1334" height="1419" alt="image" src="https://github.com/user-attachments/assets/38f4eba0-5c59-48d0-b6a9-27ec92c66e4e" />
<img width="788" height="360" alt="image" src="https://github.com/user-attachments/assets/0792cff9-7529-4d6b-be59-685f826dbf27" />
Reset Password
<img width="1302" height="1144" alt="image" src="https://github.com/user-attachments/assets/4ac13064-a9ff-4f14-9eef-ea55532361e4" />






