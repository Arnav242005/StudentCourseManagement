// src/routes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import Enrollments from "./pages/Enrollments";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Navbar /> {/* Navbar wraps all private pages */}
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> }, // default dashboard
      { path: "students", element: <Students /> },
      { path: "enrollments", element: <Enrollments /> },
      { path: "courses", element: <Courses /> },
    ],
  },
]);
