

✨ Realtime Chat App ✨
A full-stack, real-time chat application built with the MERN stack, Socket.io, and TailwindCSS. This project features user authentication, real-time messaging, online status indicators, and much more.

➡️ Live Demo
Check out the live version here: chat-app.yourdomain.com

🌟 Key Features
Authentication & Authorization: Secure user login and registration using JSON Web Tokens (JWT).

Real-time Messaging: Instant message delivery and updates powered by Socket.io.

Online User Status: See which users are currently online.

Clean UI: Modern and responsive design using TailwindCSS and DaisyUI.

Global State Management: Efficient and predictable state management with Zustand.

Error Handling: Robust error handling on both the server and client sides.

Image Uploads: Users can upload profile pictures using Cloudinary.

Free Deployment: Step-by-step guide for deploying the application for free.

🛠️ Tech Stack
Technology	Description
MongoDB	NoSQL database for storing user and chat data.
Express.js	Backend framework for building the API.
React.js	Frontend library for building the UI.
Node.js	JavaScript runtime for the server.
Socket.io	Library for real-time, bidirectional communication.
TailwindCSS	Utility-first CSS framework for styling.
DaisyUI	TailwindCSS component library.
Zustand	Minimalist state management for React.
JWT	For secure user authentication.
Cloudinary	Cloud service for image and video management.

Export to Sheets
🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and MongoDB installed on your system.

Node.js (v18.x or higher)

MongoDB

Installation & Setup
Clone the repository:

Shell

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Setup Backend:

Shell

# Navigate to the backend directory
cd backend

# Install dependencies
npm install
Setup Frontend:

Shell

# Navigate to the frontend directory from the root
cd ../frontend

# Install dependencies
npm install
Create the .env file in the backend directory and add the following environment variables.

Code snippet

# MongoDB Connection String
MONGODB_URI=your_mongodb_connection_string

# Port for the server
PORT=5001

# JWT Secret Key for signing tokens
JWT_SECRET=your_super_secret_jwt_key

# Cloudinary Credentials for image uploads
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Node Environment (development or production)
NODE_ENV=development
Note: Get your MONGODB_URI from your MongoDB Atlas dashboard and your Cloudinary credentials from your Cloudinary dashboard.

📜 Available Scripts
Backend
In the backend directory, you can run the following commands:

Start the server with nodemon (for development):

Shell

npm run dev
Start the server (for production):

Shell

npm start
Frontend
In the frontend directory, you can run the following commands:

Start the development server:

Shell

npm run dev
Build the app for production:

Shell

npm run build
