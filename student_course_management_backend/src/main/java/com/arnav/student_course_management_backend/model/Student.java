package com.arnav.student_course_management_backend.model;

import jakarta.persistence.*;

@Entity
public class Student{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId;

    @Column(name = "student_name")
    private String studentName;

    @Column(name = "student_age")
    private int studentAge;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "address")
    private String address;

    public Student() {
    }

    public Student(int studentId, String studentName, int studentAge, String phoneNo, String address) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.phoneNo = phoneNo;
        this.address = address;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public int getStudentAge() {
        return studentAge;
    }

    public void setStudentAge(int studentAge) {
        this.studentAge = studentAge;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + studentId +
                ", studentName='" + studentName + '\'' +
                ", studentAge=" + studentAge +
                ", phoneNo='" + phoneNo + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
