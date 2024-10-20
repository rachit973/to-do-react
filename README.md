# To-Do List Application

A full-stack to-do list application built using **React** for the front-end, **Node.js** for the back-end, and **MongoDB** for the database. This application allows users to add, view, edit, delete, and mark tasks as completed. The back-end handles data storage and provides a RESTful API for task management. The app is responsive and designed to work well on both desktop and mobile devices.


---

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **View Tasks**: Users can see a list of all their tasks.
- **Edit Tasks**: Users can edit the content of their existing tasks.
- **Delete Tasks**: Users can remove tasks from their list.
- **Mark Tasks as Completed**: Users can mark tasks as completed or unmark them.

---

## Technologies Used

**Front-End**:
- React
- Axios (for making API calls)
- CSS for styling and responsiveness

**Back-End**:
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS

**Deployment**:
- Vercel for the front-end
- Render (or any other platform of your choice) for the back-end

---

## Getting Started

Follow these steps to set up the application locally.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git

2. Server Startup:
   ```bash
   cd To-Do
   cd server
   npm run dev
3. Setup Frontend:
   ```bash
   cd client
   npm install npm start


#Challenges Faced
- CORS Issues: Encountered cross-origin issues when making API requests from the front-end to the back-end, resolved using the cors middleware.
- State Management: Managing the tasks' state and keeping it in sync with the API was a bit tricky initially but was resolved using Axios and React’s useEffect.


   




  



