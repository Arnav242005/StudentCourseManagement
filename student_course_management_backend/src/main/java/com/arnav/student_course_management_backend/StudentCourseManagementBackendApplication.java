package com.arnav.student_course_management_backend;

import com.arnav.student_course_management_backend.model.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.arnav.student_course_management_backend.repository.StudentRepo;

@SpringBootApplication
public class StudentCourseManagementBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentCourseManagementBackendApplication.class, args);
	}

	//Test Data
//	@Bean
//	CommandLineRunner init(StudentRepo repo) {
//		return args -> {
//			Student s = new Student();
//			s.setName("Kirti");
//			repo.save(s);
//
//			Student s2 = new Student();
//			s2.setName("Vedant");
//			repo.save(s2);
//		};
//	}
}
