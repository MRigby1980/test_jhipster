package com.bc.jhipster_test.web.rest;

import com.bc.jhipster_test.domain.Student;
import com.bc.jhipster_test.service.StudentService;
import com.bc.jhipster_test.web.rest.util.PaginationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;

import org.springframework.data.domain.Pageable;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    public StudentService studentService;

//    @GetMapping("/students")
//    public List<Student> findAll() {
//        return studentService.findAll();
//    }

    /**
     * GET /students : get all students.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and with body all users
     */
    @GetMapping("/students")
    public ResponseEntity<List<Student>> findAll(Pageable pageable) {
        final Page<Student> page = studentService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/students");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }


}
