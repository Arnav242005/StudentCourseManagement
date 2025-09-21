import React, { useEffect, useState } from "react";
import { getStudents, getCourses, getEnrollments } from "../API/api";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    enrollments: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const students = (await getStudents()).data.length;
        const courses = (await getCourses()).data.length;
        const enrollments = (await getEnrollments()).data.length;

        setStats({ students, courses, enrollments });
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate("/students")}>
          <h3>Students</h3>
          <p>{stats.students}</p>
        </div>
        <div className="card" onClick={() => navigate("/courses")}>
          <h3>Courses</h3>
          <p>{stats.courses}</p>
        </div>
        <div className="card" onClick={() => navigate("/enrollments")}>
          <h3>Enrollments</h3>
          <p>{stats.enrollments}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
