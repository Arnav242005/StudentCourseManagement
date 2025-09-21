package com.arnav.student_course_management_backend.Controller;

import com.arnav.student_course_management_backend.model.Courses;
import com.arnav.student_course_management_backend.model.Student;
import com.arnav.student_course_management_backend.service.CourseService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.arnav.student_course_management_backend.service.StudentService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents(){
        List<Student> students = service.getStudents();
        if(students.isEmpty()){
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.ok(students);
        }
    }

    @PostMapping("/addStudent")
    public ResponseEntity<Student> addStudent(@RequestBody Student stu){
        Student savedStudent = service.addStudent(stu);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStudent);
    }

    @GetMapping("/students/search")
    public ResponseEntity<List<Student>> searchByNameStudent(@RequestParam String student_name){
        List<Student> students = service.searchByNameStudent(student_name);
        if (students.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(students);
    }

    @DeleteMapping("/students/delete/{studentId}")
    public ResponseEntity<String> deleteStudent(@PathVariable int studentId){
        try{
            service.deleteStudent(studentId);
            return ResponseEntity.ok("student deleted successfylly");
        }catch(RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
