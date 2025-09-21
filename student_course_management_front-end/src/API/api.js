import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export const getStudents= () => axios.get(`${BASE_URL}/api/students`);
export const addStudent = (student) => axios.post(`${BASE_URL}/api/addStudent`, student);
export const searchStudents = (query) => axios.get(`${BASE_URL}/api/students/search?student_name=${query}`)
export const searchCourses = (query) => axios.get(`${BASE_URL}/courses/search?course_name=${query}`)
export const deleteStudent = (studentId) => axios.delete(`${BASE_URL}/students/delete/${studentId}`);
export const getCourses = () => axios.get(`${BASE_URL}/courses`);
export const addCourse = (course) => axios.post(`${BASE_URL}/courses/addCourse`, course);
export const deleteCourse = (courseId) => axios.delete(`${BASE_URL}/courses/deleteCourse/${courseId}`); 
export const getEnrollments = () => axios.get(`${BASE_URL}/enrollments`);
export const addEnrollment = (studentId, courseId) =>
  axios.post(`${BASE_URL}/enrollments/add`, null, {
    params: { studentId, courseId },
  });
export const deleteEnrollment = (id) => axios.delete(`${BASE_URL}/enrollments/delete/${id}`);