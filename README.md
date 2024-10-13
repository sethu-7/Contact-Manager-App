

# Contact Manager Website

This project lets users save contacts, and view, update, or delete them.

## Setup Instructions

Follow the steps below to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud instance)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. **Clone the repository** to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the root directory**:

   ```bash
   cd <project-folder>
   ```

3. **Install dependencies**:

   ```bash
   npm install express bcrypt jsonwebtoken dotenv mongoose nodemon
   ```

4. **Create a `.env` file** in the root directory and add the following:

   ```bash
   ACCESS_TOKEN_SECRET=<jwt secret string>
   PORT=<port number>
   CONNECTION_STRING=<mongodb connection string>
   ```

   - Replace `<jwt secret string>` with a secure string for JWT.
   - Set `<port number>` to the port you want the server to run on (e.g., 5000).
   - Replace `<mongodb connection string>` with your MongoDB connection string (e.g., from MongoDB Atlas or a local instance).

### Running the Project

1. **Start the development server**:

   ```bash
   npm run dev
   ```

2. The server should now be running at `http://localhost:<port>`, where `<port>` is the port number specified in the `.env` file.

### API Endpoints

The project provides RESTful API endpoints to manage contacts.

- **Create Contact**: `POST /api/contacts`
- **Get All Contacts**: `GET /api/contacts`
- **Get Contact by ID**: `GET /api/contacts/:id`
- **Update Contact**: `PUT /api/contacts/:id`
- **Delete Contact**: `DELETE /api/contacts/:id`

### Authentication

This project uses **JWT (JSON Web Tokens)** for authentication. To access the endpoints, users must be authenticated with a valid token.

#### Sign Up

- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

#### Login

- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

Upon successful login, a **JWT token** will be provided, which should be included in the `Authorization` header for future requests.

Example:
```
Authorization: Bearer <token>
```

### Tech Stack

- **Server**: Node.js, Express.js, MongoDB
- **Middleware/Libraries**:
  - [JWT](https://jwt.io/)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [Mongoose](https://mongoosejs.com/)

### Development Tools

- **Nodemon**: For auto-restarting the server during development.
