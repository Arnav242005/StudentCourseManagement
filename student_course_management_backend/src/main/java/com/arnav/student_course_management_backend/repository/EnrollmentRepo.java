package com.arnav.student_course_management_backend.repository;

import com.arnav.student_course_management_backend.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollmentRepo extends JpaRepository<Enrollment,Integer> {

}
