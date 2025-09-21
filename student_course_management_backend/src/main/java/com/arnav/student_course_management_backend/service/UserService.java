package com.arnav.student_course_management_backend.service;

import com.arnav.student_course_management_backend.model.Users;
import com.arnav.student_course_management_backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;
    public Users validateUser(String username, String password) {
        return repo.findByUsernameAndPassword(username,password).orElse(null);
    }
}
