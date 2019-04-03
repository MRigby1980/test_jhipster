package com.bc.jhipster_test.web.rest;

import com.bc.jhipster_test.domain.Student;
import com.bc.jhipster_test.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    public StudentService studentService;

    @GetMapping("/students")
    public List<Student> findAll() {
        return studentService.findAll();
    }


}
