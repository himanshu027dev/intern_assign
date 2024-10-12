# Quiz Application

This is a simple online quiz application built with Node.js, Express.js, and MongoDB. The application allows users to register, log in, create quizzes, and take quizzes with multiple-choice questions.

## Features

- User registration and authentication
- Create quizzes with multiple-choice questions
- Add questions to existing quizzes
- Take quizzes and receive scores
- Secure token-based authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcrypt for password hashing

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or use a cloud database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/himanshu027dev/intern_assign
   cd quiz-app


### How to run this application
Run the Application: After the MongoDB server is running, start the Node.js application:


```bash
node app.js

Access the Application: The server will be running on http://localhost:3000. You can use Postman to test the API endpoints as specified in the README file.

Fetch Quizzes: To see the quizzes, you can use the fetchQuizzes.js script included in the repository.

Navigate to the project directory in your terminal.
Run the script using the following command:



node fetchQuizzes.js
This script will make a GET request to the /quiz endpoint and display the available quizzes in the console.
