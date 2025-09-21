package com.arnav.student_course_management_backend.Controller;

import com.arnav.student_course_management_backend.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.arnav.student_course_management_backend.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users loginRequest) {
        Users user = userService.validateUser(
                loginRequest.getUsername(),
                loginRequest.getPassword()
        );

        if (user != null) {
            return ResponseEntity.ok(user); // valid user
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }
    }
}
