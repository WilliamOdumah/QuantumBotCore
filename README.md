# Rex Chatbot

## Overview

The Rex Chatbot project is part of a software developer internship with Radical AI, designed to provide a robust and scalable chatbot solution using Firebase Cloud Functions. This project leverages the power of Firebase to manage and deploy serverless functions that handle various chatbot operations. The primary goal of this project is to create an efficient, responsive, and easy-to-maintain chatbot framework.

## Features

- **Firebase Cloud Functions**: Utilizes Firebase's serverless computing capabilities to handle backend logic, ensuring scalability and performance.
- **Firestore Integration**: Manages chat data and user interactions using Firestore, providing a real-time database solution that scales with your application.
- **Modular Code Structure**: Organized into distinct modules such as `api`, `helpers`, `models`, `services`, etc., to maintain clean and manageable code.
- **ESLint Integration**: Ensures code quality and consistency by enforcing coding standards and identifying potential issues through linting.
- **Secure and Reliable**: Implements best practices for security and reliability, leveraging Firebase's robust infrastructure.

## Project Structure

- **functions**: Contains the Firebase Cloud Functions code.
  - **api**: Includes API endpoints for chatbot interactions.
  - **helpers**: Utility functions and helpers for various operations.
  - **models**: Data models and Firestore schema definitions.
  - **services**: Business logic and services used by the chatbot.
- **public**: Static assets and public-facing files.
- **.eslintrc.js**: Configuration file for ESLint, defining coding standards and rules.
- **package.json**: Lists project dependencies and scripts, including linting and deployment commands.
- **firebase.json**: Configuration file for Firebase, specifying deployment settings and functions triggers.

## Getting Started

To get started with the Rex Chatbot project, follow these steps:

1. **Clone the Repository**: Clone the project repository to your local machine.
2. **Install Dependencies**: Navigate to the `functions` directory and run `npm install` to install all necessary dependencies.
3. **Set Up Firebase**: Ensure you have a Firebase project set up. Link your local project to your Firebase project using `firebase init` and follow the prompts.
4. **Deploy Functions**: Deploy your functions to Firebase using `firebase deploy --only functions`.
5. **Testing**: Test your deployed functions and chatbot interactions to ensure everything is working as expected.

## Contribution Guidelines

We welcome contributions to improve the Rex Chatbot project. To contribute:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure the code passes all linting checks.
3. Submit a pull request with a detailed description of your changes.

## Internship Experience

This project was developed as part of a software developer internship with Radical AI. The internship provided an opportunity to apply and enhance my skills in serverless computing, cloud functions, and real-time database management. Working on the Rex Chatbot project allowed me to contribute to a real-world application, solving complex problems and implementing best practices in software development. The experience gained through this internship has been invaluable in advancing my career as a software developer.

---

By following this README, you should have a clear understanding of the Rex Chatbot project's purpose, features, and how to get started. We hope you find this project useful and look forward to your contributions!
