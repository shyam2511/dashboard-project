# Coder Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It was created for the Nielsen Bootcamp by: 

+ Dhruv Agarwal 
+ Shyam N V
+ Yash Kadam 
+ Sayan Samanta.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Description
Coder Dashboard is a web application designed to help developers keep track of their coding profiles across various platforms. Users can view their statistics from platforms like LeetCode, CodeChef, and Codeforces, all in one place.

## Features
- User authentication with Firebase
- Dashboard to view coding platform statistics
- Integration with LeetCode, CodeChef, and Codeforces APIs
- Profile management
- Responsive design using Bootstrap
- Persistent state management with Redux and Redux Persist

## Installation
1. Clone the repository:
   sh
   git clone https://github.com/shyam2511/dashboard-project.git
   cd dashboard-project
   

2. Install the dependencies:
   sh
   npm install
   

3. Create a .env file in the root directory and add your Firebase configuration:
   
   REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
   REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
   REACT_APP_FIREBASE_MEASUREMENT_ID=<your-firebase-measurement-id>
   

4. Start the application:
   sh
   npm start
   

## Usage
1. Navigate to http://localhost:3000 in your web browser.
2. Sign up or sign in using your credentials.
3. Navigate to the dashboard to view your coding statistics.
4. Use the sidebar to manage your profile and view other users' profiles.

## Technologies Used
- *React*: JavaScript library for building user interfaces
- *Redux*: State management for JavaScript apps
- *Firebase*: Backend-as-a-Service for authentication and storage
- *Axios*: Promise-based HTTP client for the browser and Node.js
- *Chart.js*: JavaScript library for creating charts
- *Bootstrap*: CSS framework for responsive design

  HomePage:
  ![image](https://github.com/shyam2511/dashboard-project/assets/79778864/40694ba6-dd9d-4097-a6c9-6c156ab2f394)

  SignIn:
  ![image](https://github.com/shyam2511/dashboard-project/assets/79778864/74e2b259-abc6-41c2-a119-c9835a2da095)

  SignUp:
  ![image](https://github.com/shyam2511/dashboard-project/assets/79778864/ad7943e4-eb08-4b93-8f67-3732d3609538)

  Forgot Password:
  ![image](https://github.com/shyam2511/dashboard-project/assets/79778864/81fe5467-0256-4966-ae0b-cd9d5702140e)

  Dashboard:
  ![image](https://github.com/shyam2511/dashboard-project/assets/79778864/0b947936-437e-47d8-aa6c-121b4562ac9f)

  Update Profile:
  ![image](https://github.com/shyam2511/dashboard-project/assets/79778864/1139fd3c-f3ff-4887-8535-5d18d94d5d8c)


