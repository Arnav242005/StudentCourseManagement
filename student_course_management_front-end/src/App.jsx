import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getStudents, addStudent } from "./API/api";

export default function App() {
  const [students, setStudents] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data || []); // ensure it's always an array
    } catch (err) {
      console.error("Error fetching students", err);
      setStudents([]);
    }
  };

  const onSubmit = async (data) => {
    try {
      await addStudent(data);
      reset();
      fetchStudents();
    } catch (err) {
      console.error("Error adding student", err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>🎓 Student Management</h1>

      {/* Add Student Form */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Student Name"
          {...register("name", { required: "Name is required" })}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button type="submit">Add Student</button>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </form>

      {/* Student List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students && students.length > 0 ? (
          students.map((s, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
                padding: "5px",
                border: "1px solid #ddd",
              }}
            >
              <span>{s.name}</span>
            </li>
          ))
        ) : (
          <li>No students found.</li>
        )}
      </ul>
    </div>
  );
}
