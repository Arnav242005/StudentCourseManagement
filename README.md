Student Course Management System

A full-stack web application to manage students, courses, and enrollments. This system allows administrators to add, view, search, and delete students and courses, as well as manage student enrollments. Authentication is implemented to restrict access to authorized users only.

Table of Contents

Features

Technologies Used

Backend Setup

Frontend Setup

Folder Structure

API Endpoints

Screenshots

License

Features

Authentication

Login system with validation against backend user database.

Route protection to restrict pages for authenticated users only.

Student Management

Add, view, search, and delete students.

Course Management

Add, view, search, and delete courses.

Enrollments

Enroll students in courses.

View enrollments with student, course, and enrollment date.

Delete enrollments.

Responsive UI

Fully responsive design for desktop and mobile devices.

Technologies Used

Frontend:

React 18

React Router v6

React Hook Form

Axios

CSS (Flexbox & Grid)

Backend:

Java Spring Boot

Spring Data JPA

Hibernate ORM

MySQL

Other Tools:

Vite for frontend bundling

Postman for API testing

Backend Setup

Install Java JDK 17+ and MySQL.

Clone the backend repository or navigate to your project folder.

Create a database student_course_management.

Run the following SQL to create tables and sample users:

CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL
);

INSERT INTO Users(username, password) VALUES ("Arnav", "Arnav2005");


Configure application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/student_course_management
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


Start the Spring Boot backend:

mvn spring-boot:run

Frontend Setup

Navigate to the frontend folder.

Install dependencies:

npm install


Start the Vite development server:

npm run dev


Open your browser at http://localhost:5173.

Note: Make sure backend is running at http://localhost:8080.

Folder Structure

Frontend:

src/
├─ API/             # Axios API calls
├─ components/      # Reusable components (Search, PrivateRoute, Navbar)
├─ Context/         # Authentication context and useAuth hook
├─ css/             # CSS files
├─ pages/           # Students, Courses, Enrollments, Dashboard, Login
├─ Reducer/         # authReducer for useReducer state management
├─ routes.jsx       # React Router setup
└─ main.jsx         # Entry point


Backend:

src/main/java/com/arnav/student_course_management_backend/
├─ controller/      # REST controllers
├─ model/           # Entity classes (Users, Students, Courses, Enrollments)
├─ repository/      # Spring Data JPA repositories
├─ service/         # Service classes (business logic)
└─ StudentCourseManagementApplication.java

API Endpoints

Authentication

Method	Endpoint	Description
POST	/auth/login	Login with username/password

Students

Method	Endpoint	Description
GET	/students	Fetch all students
GET	/students/search	Search students
POST	/students/add	Add a student
DELETE	/students/delete	Delete a student

Courses

Method	Endpoint	Description
GET	/courses	Fetch all courses
GET	/courses/search	Search courses
POST	/courses/add	Add a course
DELETE	/courses/delete	Delete a course

Enrollments

Method	Endpoint	Description
GET	/enrollments	Fetch all enrollments
POST	/enrollments/add	Add enrollment
DELETE	/enrollments/delete	Delete enrollment

Author: Arnav Jadhav

License

MIT License © 2025
