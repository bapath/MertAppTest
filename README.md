# MERN Stack Task Manager

A full-stack application built with the MERN stack (MongoDB, Express.js, React, and Node.js) for managing tasks.

## Project Structure

This project is organized into two main folders:

- **client**: React frontend application
- **server**: Node.js/Express.js backend application

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed
- Responsive user interface
- MongoDB database for data persistence

## Prerequisites

- Node.js and npm installed
- MongoDB installed locally or MongoDB Atlas account
- Internet connection for fetching dependencies

## Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd mern-task-app
```

### 2. Set up the server

```bash
cd server
npm install
```

Update the `config.js` file with your MongoDB connection URI.

### 3. Set up the client

```bash
cd ../client
npm install
```

### 4. Running the application in development mode

#### Start the backend server:

```bash
cd server
npm run dev
```

This will start the server on http://localhost:5000

#### Start the frontend development server:

```bash
cd client
npm start
```

This will start the React development server on http://localhost:3000

## API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a specific task by ID
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## Deployment

This project can be deployed to Azure App Service using GitHub Actions. The deployment process is automated through a GitHub workflow.

### GitHub Deployment

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/mern-task-app.git
git push -u origin main
```

2. Configure GitHub Actions:
   - GitHub workflow is already configured in `.github/workflows/azure-deploy.yml`
   - Add the following secrets in your GitHub repository:
     - `AZURE_WEBAPP_PUBLISH_PROFILE`: Your Azure Web App publish profile
     - `AZURE_CREDENTIALS`: Azure Service Principal credentials (optional)
     - `MONGODB_URI`: Your MongoDB Atlas connection string
   
3. Run the workflow:
   - Automatically triggers on push to main branch
   - Can be manually triggered from GitHub Actions tab

For detailed deployment instructions, refer to the `deployment_guide.txt` file in the root directory.

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

### Frontend
- React
- Axios
- CSS3

## License

This project is licensed under the MIT License.
