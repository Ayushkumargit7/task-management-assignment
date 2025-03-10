# Task Management App

This is a simple task management application built with React.js for the frontend and Node.js/Express.js for the backend, using MongoDB as the database and Tailwind CSS for styling.

Prerequisites
Before setting up this application, make sure you have the following installed:

Node.js and npm (Node Package Manager)

MongoDB

Setup Instructions
Backend Setup
Clone the repository and navigate to the backend directory:

bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app/backend
Install the required dependencies:

bash
npm install
Configure MongoDB connection:

Make sure MongoDB is running on your system

Frontend Setup
Open a new terminal window and navigate to the frontend directory:


cd task-management-app/frontend
Install the required dependencies:


npm install
Running the Application
Start the backend server:


cd backend
node index.js
Start the frontend:


cd frontend
npm run dev
Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

API Endpoints
GET /tasks - Retrieve all tasks

POST /tasks - Create a new task

DELETE /tasks/:id - Delete a task by ID
