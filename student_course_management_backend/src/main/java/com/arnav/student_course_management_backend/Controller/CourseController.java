package com.arnav.student_course_management_backend.Controller;

import com.arnav.student_course_management_backend.model.Courses;
import com.arnav.student_course_management_backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService service;

    @GetMapping
    public ResponseEntity<List<Courses>> getCourses(){
        List<Courses> courses = service.getCourses();
        if(courses.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Courses>> getCoursesByName(@RequestParam String course_name){
        List<Courses> courses = service.searchByCourseName(course_name);
        if(courses.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(courses);
    }

    @PostMapping("/addCourse")
    public ResponseEntity<Courses> addCourse(@RequestBody  Courses course){
        Courses savedCourse = service.addCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCourse);
    }

    @DeleteMapping("/deleteCourse/{courseId}")
    public ResponseEntity<String> deleteCourse(@PathVariable int courseId) {
        try {
            service.deleteCourse(courseId);  // call service
            return ResponseEntity.ok("Course deleted successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}