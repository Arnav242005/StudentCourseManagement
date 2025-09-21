package com.arnav.student_course_management_backend.service;

import com.arnav.student_course_management_backend.model.Courses;
import com.arnav.student_course_management_backend.model.Enrollment;
import com.arnav.student_course_management_backend.model.Student;
import com.arnav.student_course_management_backend.repository.CourseRepo;
import com.arnav.student_course_management_backend.repository.EnrollmentRepo;
import com.arnav.student_course_management_backend.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepo repo;

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private CourseRepo courseRepo;

    public Enrollment addEnrollment(int studentId, int courseId) {
        Student student = studentRepo.findById(studentId).orElseThrow();
        Courses courses = courseRepo.findById(courseId).orElseThrow();
        Enrollment enrollment = new Enrollment();
        enrollment.setStudent(student);
        enrollment.setCourse(courses);
        enrollment.setEnrollmentdate(LocalDate.now());
        return repo.save(enrollment);
    }

    public void deleteEnrollment(int id) {
        repo.deleteById(id);
    }

    public List<Enrollment> getEnrollents() {
        return repo.findAll();
    }
}
