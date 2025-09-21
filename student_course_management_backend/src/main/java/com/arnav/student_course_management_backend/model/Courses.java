package com.arnav.student_course_management_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="courses")
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private int courseId;

    @Column(name = "course_name")
    private String courseName;

    @Column(name="course_duration")
    private String courseDuration;

    @Column(name="course_amount")
    private int courseAmount;

    @Column(name="course_faculty")
    private String courseFaculty;

    public Courses(int courseId, String courseName, String courseDuration, int courseAmount, String courseFaculty) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseDuration = courseDuration;
        this.courseAmount = courseAmount;
        this.courseFaculty = courseFaculty;
    }

    public Courses() {
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(String courseDuration) {
        this.courseDuration = courseDuration;
    }

    public int getCourseAmount() {
        return courseAmount;
    }

    public void setCourseAmount(int courseAmount) {
        this.courseAmount = courseAmount;
    }

    public String getCourseFaculty() {
        return courseFaculty;
    }

    public void setCourseFaculty(String courseFaculty) {
        this.courseFaculty = courseFaculty;
    }

    @Override
    public String toString() {
        return "Courses{" +
                "id=" + courseId +
                ", course_name='" + courseName + '\'' +
                ", course_duration='" + courseDuration + '\'' +
                ", course_amount=" + courseAmount +
                ", course_faculty=" + courseFaculty +
                '}';
    }
}
