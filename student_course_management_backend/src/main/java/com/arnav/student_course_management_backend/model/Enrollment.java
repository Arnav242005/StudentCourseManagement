package com.arnav.student_course_management_backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "enrollments")
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Courses course;

    private LocalDate enrollmentdate;

    public Enrollment(int id, Student student, Courses course, LocalDate enrollmentdate) {
        this.id = id;
        this.student = student;
        this.course = course;
        this.enrollmentdate = enrollmentdate;
    }

    public Enrollment() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public LocalDate getEnrollmentdate() {
        return enrollmentdate;
    }

    public void setEnrollmentdate(LocalDate enrollmentdate) {
        this.enrollmentdate = enrollmentdate;
    }

    public Courses getCourse() {
        return course;
    }

    public void setCourse(Courses course) {
        this.course = course;
    }
}
