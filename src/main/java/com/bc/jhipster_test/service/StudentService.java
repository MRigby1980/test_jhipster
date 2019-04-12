package com.bc.jhipster_test.service;

import com.bc.jhipster_test.domain.Student;
import com.bc.jhipster_test.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepo;

//    public List<Student> findAll() { return studentRepo.findAll(); }

    //Pageable
    @Transactional(readOnly = true)
    public Page<Student> findAll(Pageable pageable) {
        return studentRepo.findAll(pageable).map(Student::new);
    }
}
