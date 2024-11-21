# Social Media App

A full-stack social media application built with a backend using Node.js, Express, and MongoDB, and a frontend using React.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication and authorization
- Create, read, update, and delete (CRUD) posts
- Like and comment on posts
- Responsive UI

## Getting Started
Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- MongoDB
- Git

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/c16f65c5-a5fd-44e8-925c-5e221aca4836)

### SignUp / Login Page
![image](https://github.com/user-attachments/assets/42e4b6b5-6deb-41f1-bbff-49c64823ba7d)

### Explore Page
![image](https://github.com/user-attachments/assets/9dfaf515-2dd6-4a05-986b-852c84a882e6)

### Profile Page
![image](https://github.com/user-attachments/assets/3a7572fd-aa3b-48a0-b7a6-cc520a1983a4)

### Edit Profile Page
![image](https://github.com/user-attachments/assets/3e0786e2-de7c-4d91-b88b-039cbb5531a9)


### Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/Anu-affzara/Social-Media-App.git
    cd Social-Media-App
    ```

2. **Navigate to the backend directory and install dependencies**
    ```sh
    cd backend
    npm install
    ```

3. **Navigate to the frontend directory and install dependencies**
    ```sh
    cd ../frontend
    npm install
    ```

### Environment Variables

Create a `.env` file in the backend directory and add the following environment variables:

```plaintext
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/your_database?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

### Running the Application

1. **Start the backend server**
    ```sh
    cd backend
    npm start
    ```

2. **Start the frontend development server**
    ```sh
    cd ../frontend
    npm start
    ```

Visit `http://localhost:3000` to view the application in the browser.

## Usage

Once the servers are running, you can:
- Register and log in
- Create new posts
- Like, comment, and interact with other users' posts
- Follow and unfollow users

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
