package com.bc.jhipster_test.service;

import com.bc.jhipster_test.domain.Student;
import com.bc.jhipster_test.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepo;

    public List<Student> findAll() { return studentRepo.findAll(); }
}
