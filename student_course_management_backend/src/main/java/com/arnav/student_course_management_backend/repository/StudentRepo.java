package com.arnav.student_course_management_backend.repository;

import com.arnav.student_course_management_backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {
    List<Student> findByStudentNameContainingIgnoreCase(String name);
}
