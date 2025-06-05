## 🏋️ Exercise Tracker App
Author: Ronniekev

This is a full-stack web application that lets users log, update, and track their workouts. Built with the MERN stack (MongoDB, Express, React, Node), it’s designed for simplicity, responsiveness, and real-world usability. Great for fitness-minded folks or anyone looking to mess with CRUD apps and REST APIs.

Live site: https://creative-clafoutis-c8a37e.netlify.app/

# 💡 What it does
Lets users create, edit, and delete workout entries

Each workout includes exercise name, duration, date, and intensity

Data is stored in MongoDB and retrieved through Express API endpoints

React front-end handles routing and state

Deployed front-end to Netlify, backend to Render

# ⚙️ Tech Stack
Frontend: React, React Router, CSS

Backend: Node.js, Express.js, MongoDB

Deployment: Netlify (frontend) & Render (backend)

Other: Git for version control, Agile-style commits and workflows

# ✏️ Features
Fully functional CRUD interface

Responsive design that works on desktop and mobile

Built-in routing using React Router

RESTful API built with Express

MongoDB for flexible data storage

Error handling for invalid form input

Clean component structure (reusable and readable)

# 🚀 How to Run Locally
Clone the repo

```bash
git clone [https://github.com/Ronniekev/workout-tracker]
cd exercise-tracker
```
Install dependencies

For both client and server folders:

```bash
npm install
```
Set up environment variables
In the server folder, create a .env file with your MongoDB URI:

```bash
MONGO_URI=mongodb+srv://your_user:your_pass@cluster.mongodb.net/dbname
```
Run the app

```bash
# In one terminal
cd backend
npm start

# In another terminal
cd frontend
npm run dev
```
# 🧪 Testing
Basic testing is done manually through the UI — forms, error handling, and route behavior. Future improvements could include Cypress or Jest testing.

# 🛠️ Improvements to Explore
Add user auth (login, register)

Filter/sort workout logs

Track stats over time with charts

Unit tests for routes and components


