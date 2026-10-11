# Student Task Manager

A simple full-stack web application built using React, Node.js, Express.js, and MongoDB. It allows students to create, view, update, and delete tasks.

## Features

- Add a new task
- Display all tasks stored in MongoDB
- Update an existing task
- Delete a task
- Validate empty task titles
- REST API integration
- Basic responsive and user-friendly interface

## Technologies Used

**Frontend**
- React
- Vite
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- Mongoose
- MongoDB Atlas
- dotenv
- cors

## Project Structure

```text
student-task-manager/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
├── .gitignore
└── README.md
```

## Requirements

- Node.js and npm
- A MongoDB Atlas account or a local MongoDB server

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd student-task-manager
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder using `.env.example` as a template.

Add your MongoDB connection details:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Use the correct database name and your own MongoDB credentials.

### 3. Start the backend

From the `backend` folder, run:

```bash
npm run dev
```

The backend runs at:

`http://localhost:5000`

### 4. Install and start the frontend

Open a new terminal from the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

`http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Example request body

```json
{
  "title": "Complete assignment"
}
```

## Database

The application uses MongoDB to store tasks. Each task contains a title and a MongoDB-generated `_id`.

## Validation

- Task titles cannot be empty.
- Invalid task IDs are rejected.
- Appropriate HTTP status codes and JSON responses are returned.

## Security

- Keep database credentials in your local `.env` file.
- Never commit real credentials to GitHub.
- Use `.env.example` to document the required environment variables without exposing secrets.

## Author

Developed as a Student Task Manager coding assessment project.