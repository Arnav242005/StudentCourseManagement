package com.arnav.student_course_management_backend.Controller;

import com.arnav.student_course_management_backend.model.Enrollment;
import com.arnav.student_course_management_backend.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
@CrossOrigin(origins = "http://localhost:5173")
public class EnrollmentController {

    @Autowired
    private EnrollmentService service;

    @GetMapping
    public ResponseEntity<List<Enrollment>> getEnrollments(){
        return ResponseEntity.ok(service.getEnrollents());
    }

    @PostMapping("/add")
    public ResponseEntity<Enrollment> addEnrollment(@RequestParam int studentId,@RequestParam int courseId){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.addEnrollment(studentId,courseId));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEnrollment(@PathVariable int id){
        service.deleteEnrollment(id);
        return ResponseEntity.ok("Enrollment Deleted");
    }
}
