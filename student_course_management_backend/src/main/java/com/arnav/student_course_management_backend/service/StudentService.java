package com.arnav.student_course_management_backend.service;

import com.arnav.student_course_management_backend.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.arnav.student_course_management_backend.repository.StudentRepo;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo repo;

    public List<Student> getStudents() {
        return repo.findAll();
    }


    public Student addStudent(Student stu) {
        return repo.save(stu);
    }

    public List<Student> searchByNameStudent(String studentName) {
        return repo.findByStudentNameContainingIgnoreCase(studentName);
    }

    public void deleteStudent(int studentId) {
        if(repo.existsById(studentId)){
            repo.deleteById(studentId);
        }else{
            throw new RuntimeException("Not found with "+studentId);
        }
    }
}
