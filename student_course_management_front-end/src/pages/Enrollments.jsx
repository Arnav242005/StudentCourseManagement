import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getStudents, getCourses, getEnrollments, addEnrollment, deleteEnrollment } from "../API/api";
import "../css/Enrollments.css"

function Enrollments() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setStudents((await getStudents()).data);
    setCourses((await getCourses()).data);
    setEnrollments((await getEnrollments()).data);
    console.log(enrollments.map(e => e.enrollmentDate));
  };

  const onSubmit = async (data) => {
    try {
      await addEnrollment(data.studentId, data.courseId);
      reset(); // reset the form after successful enrollment
      fetchData();
    } catch (err) {
      console.error("Error adding enrollment", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEnrollment(id);
      fetchData();
    } catch (err) {
      console.error("Error deleting enrollment", err);
    }
  };

  return (
    <div className="enrollments-container">
      <h2>Enrollments</h2>

      {/* Enrollment Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="enrollment-form">
        <select {...register("studentId", { required: "Please select a student" })}>
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.studentId} value={s.studentId}>
              {s.studentName}
            </option>
          ))}
        </select>
        {errors.studentId && <p className="error">{errors.studentId.message}</p>}

        <select {...register("courseId", { required: "Please select a course" })}>
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.courseId} value={c.courseId}>
              {c.courseName}
            </option>
          ))}
        </select>
        {errors.courseId && <p className="error">{errors.courseId.message}</p>}

        <button type="submit">Enroll</button>
      </form>

      {/* Enrollments Table */}
      <table className="enrollments-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Enrollment Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((e) => (
            <tr key={e.id}>
              <td>{e.student.studentName}</td>
              <td>{e.course.courseName}</td>
              <td>{new Date(e.enrollmentDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enrollments;
