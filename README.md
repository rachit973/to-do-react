# to-do-react
#To-Do List Application

A full-stack to-do list application built using React for the front-end, Node.js for the back-end, and MongoDB for the database. This application allows users to add, view, edit, delete, and mark tasks as completed. The back-end handles data storage and provides a RESTful API for task management. The app is responsive and designed to work well on both desktop and mobile devices.

Technologies Used
Front-End:

React
Axios (for making API calls)
CSS for styling and responsiveness

Back-End:

Node.js
Express.js
MongoDB with Mongoose
CORS
Deployment:

Vercel for the front-end
Heroku (or any other platform of your choice) for the back-end
Getting Started
Follow these steps to set up the application locally.

Prerequisites
Make sure you have the following installed:

Node.js
MongoDB
Git






Installation
Clone the repository:
git clone https://github.com/your-username/todo-list-app.git

Navigate to the project directory:
cd todo-list-app

Set up the Back-End:
Navigate to the server folder:
cd server

Install dependencies:
npm install

Create a .env file and add your MongoDB connection string:
MONGO_URI=<your_mongo_connection_string>

Start the back-end server:
npm run dev

Set up the Front-End:
Navigate to the client folder:
cd ../client

Install dependencies:
npm install
Start the front-end development server:
npm start

Open your browser and go to http://localhost:3000 to view the app.

API Endpoints
The back-end provides the following RESTful API endpoints for task management:

GET /api/tasks - Get all tasks
POST /api/tasks - Add a new task
PUT /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task
Deployment
To deploy the app, follow these steps:

Front-End:

Push the client folder to Vercel or Netlify.
Follow the platform's setup instructions to deploy the React app.
Back-End:

Push the server folder to Heroku or Render.
Set up the environment variable (MONGO_URI) in the deployment platform.
Continuous Deployment:

Link the GitHub repository to both platforms (Vercel/Netlify for front-end and Heroku/Render for back-end).
Every time you push changes to GitHub, the app will be automatically updated.





Challenges Faced
CORS Issues: Encountered cross-origin issues when making API requests from the front-end to the back-end, resolved using the cors middleware.
State Management: Managing the tasks' state and keeping it in sync with the API was a bit tricky initially but was resolved using Axios and React’s useEffect.










Future Enhancements
User Authentication: Add the ability for users to sign up and manage their personal to-do lists.
Task Prioritization: Implement task prioritization and deadlines for better task management.
Real-Time Updates: Use WebSockets for real-time task updates.
