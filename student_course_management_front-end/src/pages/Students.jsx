import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Search from "../components/Search";
import { getStudents, searchStudents, addStudent, deleteStudent } from "../API/api";
import "../css/Students.css";

function Students() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students", err);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchAll(); // reset to all students
      return;
    }
    try {
      const res = await searchStudents(query);
      setStudents(res.data);
    } catch (err) {
      console.error("Error searching students", err);
      setStudents([]); // fallback empty
    }
  };

  const handleDelete = async (studentId) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await deleteStudent(studentId);
      fetchAll(); // refresh the list
    } catch (err) {
      console.error("Error deleting student", err);
    }
  };

  const onSubmit = async (data) => {
    try {
      await addStudent(data);
      reset();
      setShowForm(false);
      fetchAll(); // refresh list after adding
    } catch (err) {
      console.error("Error adding student", err);
    }
  };

  return (
    <div className="students-container">
      <h2 className="page-title">Students</h2>
      <Search placeholder="Search students..." onSearch={handleSearch} />

      <button
        className="toggle-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Add Student"}
      </button>

      {showForm && (
        <form className="student-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Student Name"
            {...register("studentName", { required: "Name is required" })}
          />
          {errors.studentName && <p className="error">{errors.studentName.message}</p>}

          <input
            type="number"
            placeholder="Age"
            {...register("studentAge", {
              required: "Age is required",
              min: { value: 1, message: "Age must be positive" },
            })}
          />
          {errors.studentAge && <p className="error">{errors.studentAge.message}</p>}

          <input
            type="text"
            placeholder="Phone Number"
            {...register("phoneNo", { required: "Phone number is required" })}
          />
          {errors.phoneNo && <p className="error">{errors.phoneNo.message}</p>}

          <input
            type="text"
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p className="error">{errors.address.message}</p>}

          <button type="submit" className="save-btn">Save</button>
        </form>
      )}

      {students.length > 0 ? (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.studentId}>
                <td>{s.studentName}</td>
                <td>{s.studentAge}</td>
                <td>{s.phoneNo}</td>
                <td>{s.address}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(s.studentId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No students found.</p>
      )}
    </div>
  );
}

export default Students;
