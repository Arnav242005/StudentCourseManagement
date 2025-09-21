import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import { getCourses, searchCourses, addCourse, deleteCourse } from "../API/api";
import { useForm } from "react-hook-form";
import "../css/Courses.css"; // optional if you want separate CSS

function Courses() {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses", err);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchAll();
      return;
    }
    try {
      const res = await searchCourses(query);
      setCourses(res.data);
    } catch (err) {
      console.error("Error searching courses", err);
      setCourses([]);
    }
  };

  const onSubmit = async (data) => {
    try {
      await addCourse(data);
      reset();
      setShowForm(false);
      fetchAll();
    } catch (err) {
      console.error("Error adding course", err);
    }
  };

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(courseId);
        fetchAll();
      } catch (err) {
        console.error("Error deleting course", err);
      }
    }
  };

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <Search placeholder="Search courses..." onSearch={handleSearch} />

      <button className="toggle-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Course"}
      </button>

      {showForm && (
        <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Course Name"
            {...register("courseName", { required: "Name is required" })}
          />
          {errors.courseName && <p className="error">{errors.courseName.message}</p>}

          <input
            type="text"
            placeholder="Course Duration"
            {...register("courseDuration", { required: "Duration is required" })}
          />
          {errors.courseDuration && <p className="error">{errors.courseDuration.message}</p>}

          <input
            type="number"
            placeholder="Course Amount"
            {...register("courseAmount", {
              required: "Amount is required",
              min: { value: 1, message: "Amount must be positive" },
            })}
          />
          {errors.courseAmount && <p className="error">{errors.courseAmount.message}</p>}

          <input
            type="text"
            placeholder="Course Faculty"
            {...register("courseFaculty", { required: "Faculty is required" })}
          />
          {errors.courseFaculty && <p className="error">{errors.courseFaculty.message}</p>}

          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      )}

      {courses.length > 0 ? (
        <table className="courses-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration</th>
              <th>Amount</th>
              <th>Faculty</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.courseId}>
                <td>{c.courseName}</td>
                <td>{c.courseDuration}</td>
                <td>₹{c.courseAmount}</td>
                <td>{c.courseFaculty}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(c.courseId)}
                  >
                  Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No courses found.</p>
      )}
    </div>
  );
}

export default Courses;
