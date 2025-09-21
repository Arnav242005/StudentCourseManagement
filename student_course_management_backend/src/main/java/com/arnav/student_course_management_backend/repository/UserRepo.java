package com.arnav.student_course_management_backend.repository;

import com.arnav.student_course_management_backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<Users,Integer> {
    Optional<Users> findByUsernameAndPassword(String username, String password);
}
