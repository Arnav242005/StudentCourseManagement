package com.arnav.student_course_management_backend.repository;

import com.arnav.student_course_management_backend.model.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepo extends JpaRepository<Courses,Integer> {
    List<Courses> findByCourseNameContainingIgnoreCase(String courseName);
}
