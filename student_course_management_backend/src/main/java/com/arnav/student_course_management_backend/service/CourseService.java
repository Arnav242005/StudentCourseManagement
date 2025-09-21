package com.arnav.student_course_management_backend.service;

import com.arnav.student_course_management_backend.model.Courses;
import com.arnav.student_course_management_backend.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepo repo;

    public List<Courses> searchByCourseName(String course_name) {
        return repo.findByCourseNameContainingIgnoreCase(course_name);
    }

    public List<Courses> getCourses() {
        return repo.findAll();
    }

    public Courses addCourse(Courses course) {
        return repo.save(course);
    }

    public void deleteCourse(int courseId) {
        if(repo.existsById(courseId)){
            repo.deleteById(courseId);
        }else{
            throw new RuntimeException("Cannot not found with id"+courseId);
        }
    }
}
